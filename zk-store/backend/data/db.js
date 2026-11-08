// ZK STORE — Backend Database & Persistent File Store
const fs = require('fs');
const path = require('path');

const DB_DIR = __dirname;
const DB_FILE = path.join(DB_DIR, 'db.json');

// Default initial database state
const INITIAL_DATA = {
  coupons: [
    { code: 'ZK10', percent: 10, minSpend: 0, label: '10% Exclusive Luxury Privilege' },
    { code: 'ZKLUXURY10', percent: 10, minSpend: 0, label: '10% Exclusive Luxury Privilege' },
    { code: 'WELCOMEZK', amount: 500, minSpend: 3000, label: 'Rs. 500 Welcome Voucher' },
    { code: 'VIP500', amount: 500, minSpend: 4000, label: 'Rs. 500 VIP Privilege' }
  ],
  orders: [
    {
      id: 'ZK-89421',
      date: 'November 03, 2026',
      status: 'In Transit',
      carrier: 'TCS Express Prime',
      trackingNumber: 'TCS-90234812PK',
      estimatedDelivery: 'November 08, 2026',
      items: [
        {
          id: 'ZK-M01',
          name: 'Premium Oversized T-Shirt',
          image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
          color: 'Black',
          size: 'L',
          price: 3999,
          quantity: 1
        },
        {
          id: 'ZK-M13',
          name: 'Premium Bomber Jacket',
          image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
          color: 'Olive Green',
          size: 'L',
          price: 11999,
          quantity: 1
        }
      ],
      subtotal: 15998,
      discount: 1599,
      shipping: 0,
      total: 14399,
      paymentMethod: 'Cash on Delivery',
      shippingAddress: {
        fullName: 'Daniyal Ahmed',
        phone: '+92 300 1234567',
        email: 'daniyal.ahmed@example.com',
        address: 'Bungalow 42-B, Khyaban-e-Shahbaz, DHA Phase 6',
        city: 'Karachi',
        postalCode: '75500',
        country: 'Pakistan'
      },
      steps: [
        { title: 'Order Confirmed', date: 'Nov 03, 10:30 AM', completed: true, current: false },
        { title: 'Atelier Quality Inspection', date: 'Nov 04, 02:15 PM', completed: true, current: false },
        { title: 'Dispatched via TCS Express', date: 'Nov 05, 09:00 AM', completed: true, current: true },
        { title: 'Out for Delivery', date: 'Expected Nov 07', completed: false, current: false },
        { title: 'Delivered', date: 'Expected Nov 08', completed: false, current: false }
      ]
    }
  ],
  messages: [],
  subscribers: ['concierge@zkstore.luxury', 'vip.patron@example.com'],
  users: [
    {
      id: 'USR-001',
      name: 'Daniyal Ahmed',
      email: 'daniyal.ahmed@example.com',
      phone: '+92 300 1234567',
      city: 'Karachi',
      address: 'Bungalow 42-B, Khyaban-e-Shahbaz, DHA Phase 6',
      postalCode: '75500',
      role: 'VIP Patron'
    }
  ]
};

class Database {
  constructor() {
    this.data = this.loadData();
    this.products = [];
    this.categories = { men: [], women: [], styles: [] };
    this.loadCatalogFromFrontend();
  }

  loadData() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Could not read db.json, initializing fresh store:', e.message);
    }
    this.saveData(INITIAL_DATA);
    return INITIAL_DATA;
  }

  saveData(newData) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(newData || this.data, null, 2), 'utf8');
    } catch (e) {
      console.error('Failed to write db.json:', e);
    }
  }

  loadCatalogFromFrontend() {
    try {
      // Read products from js/data/products.js
      const prodPath = path.join(__dirname, '../../js/data/products.js');
      if (fs.existsSync(prodPath)) {
        const content = fs.readFileSync(prodPath, 'utf8');
        // Extract array using regex or evaluation
        const match = content.match(/export const PRODUCTS = (\[[\s\S]*?\]);\s*$/);
        if (match) {
          this.products = eval(match[1]);
        }
      }

      // Read categories
      const catPath = path.join(__dirname, '../../js/data/categories.js');
      if (fs.existsSync(catPath)) {
        const content = fs.readFileSync(catPath, 'utf8');
        const menMatch = content.match(/export const MEN_CATEGORIES = (\[[\s\S]*?\]);\s*export/);
        const womenMatch = content.match(/export const WOMEN_CATEGORIES = (\[[\s\S]*?\]);\s*export/);
        const styleMatch = content.match(/export const STYLE_COLLECTIONS = (\[[\s\S]*?\]);\s*$/);
        if (menMatch) this.categories.men = eval(menMatch[1]);
        if (womenMatch) this.categories.women = eval(womenMatch[1]);
        if (styleMatch) this.categories.styles = eval(styleMatch[1]);
      }
    } catch (e) {
      console.warn('Catalog parser notice:', e.message);
    }
  }

  // --- Products ---
  getProducts(filters = {}) {
    let list = [...this.products];
    const q = (filters.q || '').trim().toLowerCase();

    if (q) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.colors.some(c => c.name.toLowerCase().includes(q))
      );
    }

    if (filters.gender && filters.gender !== 'all') {
      list = list.filter(p => p.gender.toLowerCase() === filters.gender.toLowerCase());
    }

    if (filters.category && filters.category !== 'all') {
      list = list.filter(p => p.categorySlug.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.maxPrice) {
      const max = parseFloat(filters.maxPrice);
      if (!isNaN(max)) list = list.filter(p => p.salePrice <= max);
    }

    if (filters.sale === 'true') {
      list = list.filter(p => p.discountPercent >= 25);
    }

    // Sorting
    if (filters.sort === 'price-low') {
      list.sort((a, b) => a.salePrice - b.salePrice);
    } else if (filters.sort === 'price-high') {
      list.sort((a, b) => b.salePrice - a.salePrice);
    } else if (filters.sort === 'newest') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (filters.sort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }

  getProductById(id) {
    return this.products.find(p => p.id.toUpperCase() === id.toUpperCase()) || null;
  }

  addReview(productId, review) {
    const prod = this.getProductById(productId);
    if (!prod) return false;
    prod.reviews = prod.reviews || [];
    prod.reviews.unshift({
      author: review.author || 'Patron',
      rating: Number(review.rating) || 5,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      comment: review.comment || ''
    });
    prod.reviewCount = (prod.reviewCount || 0) + 1;
    return true;
  }

  // --- Categories ---
  getCategories() {
    return this.categories;
  }

  // --- Orders ---
  getOrders() {
    return this.data.orders;
  }

  getOrderById(id) {
    const clean = id.trim().toUpperCase();
    return this.data.orders.find(o => 
      o.id.toUpperCase() === clean || 
      (o.trackingNumber && o.trackingNumber.toUpperCase() === clean)
    ) || null;
  }

  createOrder(orderData) {
    const orderId = `ZK-${Math.floor(10000 + Math.random() * 90000)}`;
    const trackingNumber = `TCS-${Math.floor(10000000 + Math.random() * 90000000)}PK`;
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });

    // Calculate items
    const items = Array.isArray(orderData.items) ? orderData.items : [];
    const subtotal = items.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity || 1)), 0);
    const shipping = subtotal >= 5000 ? 0 : 350;
    
    // Apply coupon if given
    let couponDiscount = 0;
    if (orderData.couponCode) {
      const couponCheck = this.validateCoupon(orderData.couponCode, subtotal);
      if (couponCheck.valid) {
        couponDiscount = couponCheck.discount;
      }
    }

    const total = Math.max(0, subtotal + shipping - couponDiscount);

    const newOrder = {
      id: orderId,
      date: today,
      status: 'Confirmed',
      carrier: 'TCS Express Prime',
      trackingNumber: trackingNumber,
      estimatedDelivery: '3-4 Business Days',
      items: items,
      subtotal: subtotal,
      discount: couponDiscount,
      shipping: shipping,
      total: total,
      paymentMethod: orderData.paymentMethod || 'Cash on Delivery',
      shippingAddress: {
        fullName: orderData.shippingAddress?.fullName || orderData.fullName || 'Valued Patron',
        phone: orderData.shippingAddress?.phone || orderData.phone || '',
        email: orderData.shippingAddress?.email || orderData.email || '',
        address: orderData.shippingAddress?.address || orderData.address || '',
        city: orderData.shippingAddress?.city || orderData.city || 'Karachi',
        postalCode: orderData.shippingAddress?.postalCode || orderData.postalCode || '75500',
        country: 'Pakistan'
      },
      steps: [
        { title: 'Order Confirmed', date: 'Just now', completed: true, current: true },
        { title: 'Atelier Quality Inspection', date: 'Upcoming (within 24 hrs)', completed: false, current: false },
        { title: 'Dispatched via TCS Express', date: 'Upcoming', completed: false, current: false },
        { title: 'Out for Delivery', date: 'Upcoming', completed: false, current: false },
        { title: 'Delivered', date: '3-4 Business Days', completed: false, current: false }
      ]
    };

    this.data.orders.unshift(newOrder);
    this.saveData();
    return newOrder;
  }

  // --- Coupons ---
  validateCoupon(code, subtotal = 0) {
    if (!code) return { valid: false, message: 'Please enter a promotional code.' };
    const clean = code.trim().toUpperCase();
    const coupon = this.data.coupons.find(c => c.code.toUpperCase() === clean);

    if (!coupon) {
      return { valid: false, message: 'Invalid or expired promotional code.' };
    }

    if (coupon.minSpend && subtotal < coupon.minSpend) {
      return { valid: false, message: `Minimum spend of Rs. ${coupon.minSpend.toLocaleString('en-PK')} required.` };
    }

    let discount = 0;
    if (coupon.percent) {
      discount = Math.round((subtotal * coupon.percent) / 100);
    } else if (coupon.amount) {
      discount = Math.min(subtotal, coupon.amount);
    }

    return {
      valid: true,
      code: coupon.code,
      discount: discount,
      label: coupon.label
    };
  }

  // --- Messages & Newsletter ---
  saveMessage(msg) {
    const entry = {
      id: `MSG-${Date.now()}`,
      date: new Date().toISOString(),
      name: msg.name,
      email: msg.email,
      phone: msg.phone,
      subject: msg.subject,
      message: msg.message
    };
    this.data.messages = this.data.messages || [];
    this.data.messages.unshift(entry);
    this.saveData();
    return entry;
  }

  saveSubscriber(email) {
    if (!email || !email.includes('@')) return false;
    this.data.subscribers = this.data.subscribers || [];
    if (!this.data.subscribers.includes(email.toLowerCase())) {
      this.data.subscribers.push(email.toLowerCase());
      this.saveData();
    }
    return true;
  }

  // --- Auth ---
  authenticate(email, password) {
    const user = this.data.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      return { success: true, user };
    }
    // Auto register patron if not found
    const newUser = {
      id: `USR-${Date.now()}`,
      name: email.split('@')[0],
      email: email,
      phone: '+92 300 0000000',
      city: 'Karachi',
      address: 'DHA Phase 6',
      postalCode: '75500',
      role: 'VIP Patron'
    };
    this.data.users.push(newUser);
    this.saveData();
    return { success: true, user: newUser };
  }
}

module.exports = new Database();
