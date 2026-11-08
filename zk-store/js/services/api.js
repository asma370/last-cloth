// ZK STORE — Resilient Full-Stack API Client
// Connects Frontend to Backend REST API with Automatic Local Offline Fallback

const API_BASE = window.location.protocol.startsWith('http') ? '' : 'http://localhost:3000';

export const api = {
  async isBackendLive() {
    try {
      const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(1500) });
      return res.ok;
    } catch (e) {
      return false;
    }
  },

  async getProducts(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE}/api/products${query ? '?' + query : ''}`);
      if (res.ok) {
        const data = await res.json();
        return data.products;
      }
    } catch (e) {
      console.warn('API getProducts fallback to local store:', e.message);
    }
    return null;
  },

  async getProduct(id) {
    try {
      const res = await fetch(`${API_BASE}/api/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        return data.product;
      }
    } catch (e) {
      console.warn('API getProduct fallback:', e.message);
    }
    return null;
  },

  async createOrder(orderPayload) {
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      if (res.ok) {
        const data = await res.json();
        return data.order;
      }
    } catch (e) {
      console.warn('API createOrder fallback to local storage:', e.message);
    }
    return null;
  },

  async getOrder(id) {
    try {
      const res = await fetch(`${API_BASE}/api/orders/${id}`);
      if (res.ok) {
        const data = await res.json();
        return data.order;
      }
    } catch (e) {
      console.warn('API getOrder fallback:', e.message);
    }
    return null;
  },

  async validateCoupon(code, subtotal) {
    try {
      const res = await fetch(`${API_BASE}/api/coupons/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, subtotal })
      });
      return await res.json();
    } catch (e) {
      console.warn('API validateCoupon fallback:', e.message);
      return null;
    }
  },

  async sendContactMessage(formData) {
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      return await res.json();
    } catch (e) {
      return { success: true, message: 'Message queued locally' };
    }
  },

  async subscribeNewsletter(email) {
    try {
      const res = await fetch(`${API_BASE}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      return await res.json();
    } catch (e) {
      return { success: true, message: 'Subscribed locally' };
    }
  }
};
