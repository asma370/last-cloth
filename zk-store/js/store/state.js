// ZK STORE — Central Reactive Store & Backend Synchronizer
import { Storage } from './storage.js';
import { PRODUCTS } from '../data/products.js';
import { api } from '../services/api.js';

class Store {
  constructor() {
    this.cart = Storage.getCart();
    this.wishlist = Storage.getWishlist();
    this.user = Storage.getUser() || {
      isLoggedIn: true,
      name: 'Daniyal Ahmed',
      email: 'daniyal.ahmed@example.com',
      phone: '+92 300 1234567',
      city: 'Karachi',
      address: 'Bungalow 42-B, Khyaban-e-Shahbaz, DHA Phase 6',
      postalCode: '75500',
      ordersCount: 3
    };
    this.orders = Storage.getOrders();
    this.coupon = null;
    
    // UI Drawer / Modal states
    this.ui = {
      isCartOpen: false,
      isWishlistOpen: false,
      isSearchOpen: false,
      isQuickViewOpen: false,
      quickViewProduct: null,
      isSizeGuideOpen: false,
      isAuthModalOpen: false,
      announcementVisible: true
    };

    this.listeners = new Set();

    // Async sync with backend
    this.syncWithBackend();
  }

  async syncWithBackend() {
    try {
      const isLive = await api.isBackendLive();
      if (isLive) {
        console.log('✓ Connected to ZK STORE Atelier Backend API');
      }
    } catch (e) {
      // Offline fallback is active
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, payload) {
    this.listeners.forEach(fn => fn(event, payload, this));
  }

  // --- Cart Actions ---
  getCartItems() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartOriginalTotal() {
    return this.cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  }

  getCartSavings() {
    return this.getCartOriginalTotal() - this.getCartSubtotal();
  }

  getShippingFee() {
    const subtotal = this.getCartSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 5000 ? 0 : 350; // Free shipping over Rs. 5,000 across Pakistan
  }

  getCouponDiscount() {
    if (!this.coupon) return 0;
    const subtotal = this.getCartSubtotal();
    if (this.coupon.percent) {
      return Math.round((subtotal * this.coupon.percent) / 100);
    }
    if (this.coupon.amount) {
      return Math.min(subtotal, this.coupon.amount);
    }
    return 0;
  }

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    if (subtotal === 0) return 0;
    const shipping = this.getShippingFee();
    const couponDiscount = this.getCouponDiscount();
    return Math.max(0, subtotal + shipping - couponDiscount);
  }

  addToCart(product, colorName, size, quantity = 1) {
    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.color === colorName && item.size === size
    );

    const colorObj = product.colors.find(c => c.name === colorName) || product.colors[0];

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        productId: product.id,
        name: product.name,
        category: product.category,
        gender: product.gender,
        image: product.images[0],
        price: product.salePrice,
        originalPrice: product.originalPrice,
        color: colorName,
        colorHex: colorObj.hex,
        size: size,
        quantity: quantity
      });
    }

    Storage.setCart(this.cart);
    this.notify('cart:updated', this.cart);
    this.showToast(`Added to shopping bag: ${product.name}`, 'cart');
  }

  removeFromCart(index) {
    if (index >= 0 && index < this.cart.length) {
      const removed = this.cart.splice(index, 1)[0];
      Storage.setCart(this.cart);
      this.notify('cart:updated', this.cart);
      this.showToast(`Removed from shopping bag: ${removed.name}`, 'info');
    }
  }

  updateQuantity(index, quantity) {
    if (index >= 0 && index < this.cart.length) {
      if (quantity <= 0) {
        this.removeFromCart(index);
      } else {
        this.cart[index].quantity = Math.min(10, quantity);
        Storage.setCart(this.cart);
        this.notify('cart:updated', this.cart);
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.coupon = null;
    Storage.setCart(this.cart);
    this.notify('cart:updated', this.cart);
  }

  async applyCoupon(code) {
    const clean = code.trim().toUpperCase();
    const subtotal = this.getCartSubtotal();

    // 1. Check with Backend API
    try {
      const apiRes = await api.validateCoupon(clean, subtotal);
      if (apiRes && apiRes.valid) {
        this.coupon = { code: apiRes.code, percent: apiRes.percent, amount: apiRes.discount, label: apiRes.label };
        this.notify('cart:updated', this.cart);
        this.showToast(`Promo code applied: ${apiRes.label}`, 'success');
        return { success: true, message: apiRes.label };
      }
    } catch (e) {
      // Local fallback below
    }

    // 2. Local Fallback Validation
    if (clean === 'ZK10' || clean === 'ZKLUXURY10') {
      this.coupon = { code: clean, percent: 10, label: '10% Exclusive Luxury Privilege' };
      this.notify('cart:updated', this.cart);
      this.showToast('Promo code ZKLUXURY10 applied: 10% OFF', 'success');
      return { success: true, message: '10% discount applied!' };
    }
    if (clean === 'WELCOMEZK') {
      this.coupon = { code: clean, amount: 500, label: 'Rs. 500 Welcome Voucher' };
      this.notify('cart:updated', this.cart);
      this.showToast('Voucher WELCOMEZK applied: Rs. 500 OFF', 'success');
      return { success: true, message: 'Rs. 500 discount applied!' };
    }
    return { success: false, message: 'Invalid or expired promotional code' };
  }

  removeCoupon() {
    this.coupon = null;
    this.notify('cart:updated', this.cart);
    this.showToast('Promo code removed', 'info');
  }

  // --- Wishlist Actions ---
  getWishlist() {
    return this.wishlist;
  }

  isInWishlist(productId) {
    return this.wishlist.some(item => (typeof item === 'string' ? item === productId : item.id === productId));
  }

  toggleWishlist(product) {
    const id = product.id;
    const index = this.wishlist.findIndex(item => (typeof item === 'string' ? item === id : item.id === id));
    
    if (index > -1) {
      this.wishlist.splice(index, 1);
      Storage.setWishlist(this.wishlist);
      this.notify('wishlist:updated', this.wishlist);
      this.showToast(`Removed from your Wishlist`, 'info');
      return false;
    } else {
      this.wishlist.push({
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.images[0],
        price: product.salePrice,
        originalPrice: product.originalPrice,
        colors: product.colors,
        sizes: product.sizes
      });
      Storage.setWishlist(this.wishlist);
      this.notify('wishlist:updated', this.wishlist);
      this.showToast(`Added to your Wishlist`, 'wishlist');
      return true;
    }
  }

  // --- Orders & Backend Synchronization ---
  createOrder(checkoutData) {
    const newOrderId = `ZK-${Math.floor(10000 + Math.random() * 90000)}`;
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    const trackingNumber = `TCS-${Math.floor(10000000 + Math.random() * 90000000)}PK`;

    const newOrder = {
      id: newOrderId,
      date: today,
      status: 'Confirmed',
      carrier: 'TCS Express Prime',
      trackingNumber: trackingNumber,
      estimatedDelivery: '3-4 Business Days',
      items: [...this.cart],
      subtotal: this.getCartSubtotal(),
      discount: this.getCartSavings() + this.getCouponDiscount(),
      shipping: this.getShippingFee(),
      total: this.getCartTotal(),
      paymentMethod: checkoutData.paymentMethod || 'Cash on Delivery',
      shippingAddress: {
        fullName: checkoutData.fullName,
        phone: checkoutData.phone,
        email: checkoutData.email,
        address: checkoutData.address,
        city: checkoutData.city,
        postalCode: checkoutData.postalCode || '75000',
        country: checkoutData.country || 'Pakistan'
      },
      steps: [
        { title: 'Order Confirmed', date: 'Just now', completed: true, current: true },
        { title: 'Atelier Quality Inspection', date: 'Upcoming', completed: false, current: false },
        { title: 'Dispatched via TCS Express', date: 'Upcoming', completed: false, current: false },
        { title: 'Out for Delivery', date: 'Upcoming', completed: false, current: false },
        { title: 'Delivered', date: '3-4 Business Days', completed: false, current: false }
      ]
    };

    // Save in local storage
    this.orders.unshift(newOrder);
    Storage.setOrders(this.orders);
    this.clearCart();
    this.notify('orders:updated', this.orders);

    // Asynchronously dispatch to Backend REST API for server-side persistence
    api.createOrder(newOrder).then(serverOrder => {
      if (serverOrder) {
        console.log('✓ Order persisted to backend database:', serverOrder.id);
      }
    }).catch(e => console.warn('Backend sync warning:', e.message));

    return newOrder;
  }

  getOrderById(id) {
    if (!id) return null;
    const clean = id.trim().toUpperCase();
    return this.orders.find(o => o.id.toUpperCase() === clean || (o.trackingNumber && o.trackingNumber.toUpperCase() === clean)) || null;
  }

  // --- User Profile ---
  login(userData) {
    this.user = {
      isLoggedIn: true,
      name: userData.name || 'ZK Patron',
      email: userData.email,
      phone: userData.phone || '+92 300 0000000',
      city: userData.city || 'Lahore',
      address: userData.address || 'Gulberg III',
      postalCode: '54000',
      ordersCount: this.orders.length
    };
    Storage.setUser(this.user);
    this.notify('user:updated', this.user);
    this.showToast(`Welcome back, ${this.user.name}`, 'success');

    // Notify backend
    api.sendContactMessage({ type: 'login', email: userData.email });
  }

  logout() {
    this.user = { isLoggedIn: false };
    Storage.setUser(this.user);
    this.notify('user:updated', this.user);
    this.showToast('You have been signed out', 'info');
  }

  // --- UI Triggers ---
  toggleCart(open) {
    this.ui.isCartOpen = open !== undefined ? open : !this.ui.isCartOpen;
    this.notify('ui:cart', this.ui.isCartOpen);
  }

  toggleWishlistDrawer(open) {
    this.ui.isWishlistOpen = open !== undefined ? open : !this.ui.isWishlistOpen;
    this.notify('ui:wishlist', this.ui.isWishlistOpen);
  }

  toggleSearch(open) {
    this.ui.isSearchOpen = open !== undefined ? open : !this.ui.isSearchOpen;
    this.notify('ui:search', this.ui.isSearchOpen);
  }

  openQuickView(product) {
    this.ui.quickViewProduct = product;
    this.ui.isQuickViewOpen = true;
    this.notify('ui:quickview', product);
  }

  closeQuickView() {
    this.ui.isQuickViewOpen = false;
    this.ui.quickViewProduct = null;
    this.notify('ui:quickview', null);
  }

  openSizeGuide() {
    this.ui.isSizeGuideOpen = true;
    this.notify('ui:sizeguide', true);
  }

  closeSizeGuide() {
    this.ui.isSizeGuideOpen = false;
    this.notify('ui:sizeguide', false);
  }

  closeAnnouncement() {
    this.ui.announcementVisible = false;
    this.notify('ui:announcement', false);
  }

  // --- Toast Manager ---
  showToast(message, type = 'info') {
    this.notify('toast:show', { message, type, id: Date.now() });
  }

  // Helper product queries
  getProductById(id) {
    return PRODUCTS.find(p => p.id === id) || null;
  }

  getProductsByCategory(categorySlug) {
    return PRODUCTS.filter(p => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
  }

  getProductsByGender(gender) {
    return PRODUCTS.filter(p => p.gender.toLowerCase() === gender.toLowerCase());
  }

  getNewArrivals(limit = 8) {
    return PRODUCTS.filter(p => p.isNew).slice(0, limit);
  }

  getBestSellers(limit = 8) {
    return PRODUCTS.filter(p => p.isBestSeller).slice(0, limit);
  }

  searchProducts(query, filters = {}) {
    let results = [...PRODUCTS];
    const q = (query || '').trim().toLowerCase();

    if (q) {
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.colors.some(c => c.name.toLowerCase().includes(q))
      );
    }

    if (filters.gender && filters.gender !== 'all') {
      results = results.filter(p => p.gender === filters.gender);
    }

    if (filters.category && filters.category !== 'all') {
      results = results.filter(p => p.categorySlug === filters.category);
    }

    if (filters.color) {
      results = results.filter(p => p.colors.some(c => c.name.toLowerCase() === filters.color.toLowerCase()));
    }

    if (filters.size) {
      results = results.filter(p => p.sizes.includes(filters.size));
    }

    if (filters.minPrice) {
      results = results.filter(p => p.salePrice >= filters.minPrice);
    }

    if (filters.maxPrice) {
      results = results.filter(p => p.salePrice <= filters.maxPrice);
    }

    // Sorting
    if (filters.sortBy === 'price-low') {
      results.sort((a, b) => a.salePrice - b.salePrice);
    } else if (filters.sortBy === 'price-high') {
      results.sort((a, b) => b.salePrice - a.salePrice);
    } else if (filters.sortBy === 'newest') {
      results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (filters.sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  }
}

export const store = new Store();
