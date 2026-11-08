// ZK STORE — Main Application Controller & Dynamic Router
import { store } from './store/state.js';
import { renderNavbar, bindNavbarEvents } from './components/navbar.js';
import { renderFooter, bindFooterEvents } from './components/footer.js';
import { renderCartDrawer, bindCartDrawerEvents } from './components/cartDrawer.js';
import { renderWishlistDrawer, bindWishlistDrawerEvents } from './components/wishlistDrawer.js';
import { renderSearchModal, bindSearchModalEvents } from './components/searchModal.js';
import { renderQuickViewModal, bindQuickViewEvents } from './components/quickViewModal.js';
import { renderSizeGuideModal, bindSizeGuideEvents } from './components/sizeGuideModal.js';
import { showToast } from './components/toast.js';

// Pages
import { renderHomePage, bindHomePageEvents } from './pages/home.js';
import { renderMenPage, bindMenPageEvents } from './pages/men.js';
import { renderWomenPage, bindWomenPageEvents } from './pages/women.js';
import { renderNewArrivalsPage, bindNewArrivalsPageEvents } from './pages/newArrivals.js';
import { renderBestSellersPage, bindBestSellersPageEvents } from './pages/bestSellers.js';
import { renderCategoriesPage, bindCategoriesPageEvents } from './pages/categories.js';
import { renderProductDetailPage, bindProductDetailPageEvents } from './pages/productDetail.js';
import { renderSearchPage, bindSearchPageEvents } from './pages/searchPage.js';
import { renderCartPage, bindCartPageEvents } from './pages/cartPage.js';
import { renderWishlistPage, bindWishlistPageEvents } from './pages/wishlistPage.js';
import { renderCheckoutPage, bindCheckoutPageEvents } from './pages/checkoutPage.js';
import { renderAccountPage, bindAccountPageEvents } from './pages/accountPage.js';
import { renderOrderTrackingPage, bindOrderTrackingPageEvents } from './pages/orderTracking.js';
import { renderAboutPage, bindAboutPageEvents } from './pages/aboutPage.js';
import { renderContactPage, bindContactPageEvents } from './pages/contactPage.js';
import { renderFaqPage, bindFaqPageEvents } from './pages/faqPage.js';
import { renderShippingPage, bindShippingPageEvents } from './pages/shippingPage.js';
import { renderPrivacyPage, bindPrivacyPageEvents } from './pages/privacyPage.js';
import { renderTermsPage, bindTermsPageEvents } from './pages/termsPage.js';

class App {
  constructor() {
    this.appEl = document.getElementById('app');
    this.currentRoute = '';
    this.init();
  }

  init() {
    // Subscribe to store notifications
    store.subscribe((event, payload) => {
      this.handleStoreEvent(event, payload);
    });

    // Listen to hash changes for routing
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());

    // Initial render
    this.handleRoute();
  }

  handleStoreEvent(event, payload) {
    if (event === 'toast:show') {
      showToast(payload.message, payload.type);
    } else if (event === 'cart:updated') {
      this.refreshHeader();
      this.refreshCartDrawer();
      if (this.currentRoute.startsWith('#/cart') || this.currentRoute.startsWith('#/checkout')) {
        this.renderCurrentPage();
      }
    } else if (event === 'wishlist:updated') {
      this.refreshHeader();
      this.refreshWishlistDrawer();
      if (this.currentRoute.startsWith('#/wishlist')) {
        this.renderCurrentPage();
      }
    } else if (event === 'ui:cart') {
      this.refreshCartDrawer();
    } else if (event === 'ui:wishlist') {
      this.refreshWishlistDrawer();
    } else if (event === 'ui:search') {
      this.refreshSearchModal();
    } else if (event === 'ui:quickview') {
      this.refreshQuickViewModal();
    } else if (event === 'ui:sizeguide') {
      this.refreshSizeGuideModal();
    } else if (event === 'user:updated') {
      this.refreshHeader();
      if (this.currentRoute.startsWith('#/account')) {
        this.renderCurrentPage();
      }
    }
  }

  parseHash() {
    const hash = window.location.hash || '#/';
    const [pathPart, queryPart] = hash.split('?');
    const queryParams = {};

    if (queryPart) {
      const pairs = queryPart.split('&');
      pairs.forEach(pair => {
        const [k, v] = pair.split('=');
        if (k) queryParams[k] = decodeURIComponent(v || '');
      });
    }

    return { path: pathPart, query: queryParams, full: hash };
  }

  handleRoute() {
    const { path, query, full } = this.parseHash();
    this.currentRoute = full;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Render page shell
    this.renderCurrentPage(path, query);
  }

  renderCurrentPage(path, query) {
    if (!path) {
      const parsed = this.parseHash();
      path = parsed.path;
      query = parsed.query;
    }

    let pageHtml = '';
    let bindFn = () => {};

    // Route matching
    if (path === '#/' || path === '#' || path === '') {
      pageHtml = renderHomePage();
      bindFn = bindHomePageEvents;
      document.title = 'ZK STORE — $50k Luxury Fashion Atelier';
    } else if (path === '#/men') {
      pageHtml = renderMenPage(query);
      bindFn = () => bindMenPageEvents(query);
      document.title = "ZK STORE — Men's Haute Atelier Collection";
    } else if (path === '#/women') {
      pageHtml = renderWomenPage(query);
      bindFn = () => bindWomenPageEvents(query);
      document.title = "ZK STORE — Women's Haute Atelier Collection";
    } else if (path === '#/new-arrivals') {
      pageHtml = renderNewArrivalsPage();
      bindFn = bindNewArrivalsPageEvents;
      document.title = 'ZK STORE — New Season Atelier Arrivals';
    } else if (path === '#/best-sellers') {
      pageHtml = renderBestSellersPage();
      bindFn = bindBestSellersPageEvents;
      document.title = 'ZK STORE — Iconic Best Sellers';
    } else if (path === '#/categories') {
      pageHtml = renderCategoriesPage();
      bindFn = bindCategoriesPageEvents;
      document.title = 'ZK STORE — Complete Ready-To-Wear Categories';
    } else if (path.startsWith('#/product/')) {
      const productId = path.replace('#/product/', '');
      pageHtml = renderProductDetailPage(productId);
      bindFn = () => bindProductDetailPageEvents(productId);
      const prod = store.getProductById(productId);
      document.title = prod ? `${prod.name} — ZK STORE Haute Atelier` : 'Piece Details — ZK STORE';
    } else if (path === '#/search') {
      pageHtml = renderSearchPage(query);
      bindFn = bindSearchPageEvents;
      document.title = `Search: ${query.q || 'Collection'} — ZK STORE`;
    } else if (path === '#/cart') {
      pageHtml = renderCartPage();
      bindFn = bindCartPageEvents;
      document.title = 'Shopping Bag — ZK STORE';
    } else if (path === '#/wishlist') {
      pageHtml = renderWishlistPage();
      bindFn = bindWishlistPageEvents;
      document.title = 'Saved Wishlist — ZK STORE';
    } else if (path === '#/checkout') {
      pageHtml = renderCheckoutPage();
      bindFn = bindCheckoutPageEvents;
      document.title = 'Secure Atelier Checkout — ZK STORE';
    } else if (path === '#/account') {
      pageHtml = renderAccountPage();
      bindFn = bindAccountPageEvents;
      document.title = 'My Account & Orders — ZK STORE';
    } else if (path === '#/order-tracking') {
      pageHtml = renderOrderTrackingPage(query);
      bindFn = bindOrderTrackingPageEvents;
      document.title = 'Real-Time Order Tracking — ZK STORE';
    } else if (path === '#/about') {
      pageHtml = renderAboutPage();
      bindFn = bindAboutPageEvents;
      document.title = 'About The House — ZK STORE Haute Atelier';
    } else if (path === '#/contact') {
      pageHtml = renderContactPage();
      bindFn = bindContactPageEvents;
      document.title = 'Client Concierge & Boutiques — ZK STORE';
    } else if (path === '#/faq') {
      pageHtml = renderFaqPage();
      bindFn = bindFaqPageEvents;
      document.title = 'Frequently Asked Questions — ZK STORE';
    } else if (path === '#/shipping') {
      pageHtml = renderShippingPage();
      bindFn = bindShippingPageEvents;
      document.title = 'Complimentary Shipping & Returns — ZK STORE';
    } else if (path === '#/privacy') {
      pageHtml = renderPrivacyPage();
      bindFn = bindPrivacyPageEvents;
      document.title = 'Privacy & Patron Data Security — ZK STORE';
    } else if (path === '#/terms') {
      pageHtml = renderTermsPage();
      bindFn = bindTermsPageEvents;
      document.title = 'Terms & Conditions — ZK STORE';
    } else {
      pageHtml = `
        <div class="max-w-[800px] mx-auto px-6 py-24 text-center">
          <h1 class="font-serif text-4xl text-black mb-3">Page Not Found</h1>
          <p class="text-xs text-[#737373] mb-6">The requested atelier page could not be located.</p>
          <a href="#/" class="btn-primary">Return to Homepage</a>
        </div>
      `;
    }

    // Build overall DOM structure
    this.appEl.innerHTML = `
      <div class="min-h-screen flex flex-col justify-between">
        <div id="navbar-wrapper">${renderNavbar()}</div>
        <main class="flex-grow">${pageHtml}</main>
        <div id="footer-wrapper">${renderFooter()}</div>
      </div>

      <!-- Drawers & Modals Container -->
      <div id="drawers-container">
        ${renderCartDrawer()}
        ${renderWishlistDrawer()}
        ${renderSearchModal()}
        ${renderQuickViewModal()}
        ${renderSizeGuideModal()}
      </div>
    `;

    // Bind all handlers
    bindNavbarEvents();
    bindFooterEvents();
    bindCartDrawerEvents();
    bindWishlistDrawerEvents();
    bindSearchModalEvents();
    bindQuickViewEvents();
    bindSizeGuideEvents();
    bindFn();

    // Re-create lucide icons across the DOM
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  refreshHeader() {
    const navbarWrapper = document.getElementById('navbar-wrapper');
    if (navbarWrapper) {
      navbarWrapper.innerHTML = renderNavbar();
      bindNavbarEvents();
      if (window.lucide) window.lucide.createIcons({ root: navbarWrapper });
    }
  }

  refreshCartDrawer() {
    const container = document.getElementById('cart-drawer-backdrop');
    if (container) {
      container.outerHTML = renderCartDrawer();
      bindCartDrawerEvents();
      const newEl = document.getElementById('cart-drawer-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }

  refreshWishlistDrawer() {
    const container = document.getElementById('wishlist-drawer-backdrop');
    if (container) {
      container.outerHTML = renderWishlistDrawer();
      bindWishlistDrawerEvents();
      const newEl = document.getElementById('wishlist-drawer-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }

  refreshSearchModal() {
    const container = document.getElementById('search-modal-backdrop');
    if (container) {
      container.outerHTML = renderSearchModal();
      bindSearchModalEvents();
      const newEl = document.getElementById('search-modal-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
      const input = document.getElementById('live-search-input');
      if (input && store.ui.isSearchOpen) {
        setTimeout(() => input.focus(), 150);
      }
    }
  }

  refreshQuickViewModal() {
    const container = document.getElementById('quickview-modal-container');
    if (container) {
      container.outerHTML = renderQuickViewModal();
      bindQuickViewEvents();
      const newEl = document.getElementById('quickview-modal-container');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }

  refreshSizeGuideModal() {
    const container = document.getElementById('sizeguide-modal-backdrop');
    if (container) {
      container.outerHTML = renderSizeGuideModal();
      bindSizeGuideEvents();
      const newEl = document.getElementById('sizeguide-modal-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }
}

// Instantiate and expose application globally
window.zkApp = new App();
