// ZK STORE — LocalStorage Persistence Layer

const STORAGE_KEYS = {
  CART: 'zk_store_cart_v1',
  WISHLIST: 'zk_store_wishlist_v1',
  USER: 'zk_store_user_v1',
  ORDERS: 'zk_store_orders_v1',
  RECENTLY_VIEWED: 'zk_store_recent_v1'
};

export const Storage = {
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn('Storage read failed for', key, e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed for', key, e);
    }
  },

  getCart() {
    return this.get(STORAGE_KEYS.CART, []);
  },

  setCart(cart) {
    this.set(STORAGE_KEYS.CART, cart);
  },

  getWishlist() {
    return this.get(STORAGE_KEYS.WISHLIST, []);
  },

  setWishlist(wishlist) {
    this.set(STORAGE_KEYS.WISHLIST, wishlist);
  },

  getUser() {
    return this.get(STORAGE_KEYS.USER, null);
  },

  setUser(user) {
    this.set(STORAGE_KEYS.USER, user);
  },

  getOrders() {
    // Return saved orders or initialize with default sample luxury order for demonstration
    const orders = this.get(STORAGE_KEYS.ORDERS, null);
    if (orders) return orders;

    const sampleOrders = [
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
    ];

    this.set(STORAGE_KEYS.ORDERS, sampleOrders);
    return sampleOrders;
  },

  setOrders(orders) {
    this.set(STORAGE_KEYS.ORDERS, orders);
  },

  getRecentlyViewed() {
    return this.get(STORAGE_KEYS.RECENTLY_VIEWED, []);
  },

  addRecentlyViewed(productId) {
    const list = this.getRecentlyViewed().filter(id => id !== productId);
    list.unshift(productId);
    this.set(STORAGE_KEYS.RECENTLY_VIEWED, list.slice(0, 10));
  }
};
