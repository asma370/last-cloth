// ZK STORE — Luxury Header & Mega Menu Navigation Component
import { store } from '../store/state.js';
import { MEN_CATEGORIES, WOMEN_CATEGORIES } from '../data/categories.js';

export function renderNavbar() {
  const cartCount = store.getCartCount();
  const wishlistCount = store.getWishlist().length;
  const isAnnouncement = store.ui.announcementVisible;

  return `
    <!-- Announcement Bar -->
    ${isAnnouncement ? `
      <div id="announcement-bar" class="announcement-bar py-2.5 px-4 flex items-center justify-between border-b border-[#292929]">
        <div class="flex-1 text-center font-sans tracking-luxury text-[11px] font-medium text-[#F7F5F0]">
          NEW SEASON COLLECTION — DISCOVER YOUR STYLE &bull; COMPLIMENTARY SHIPPING OVER RS. 5,000 ACROSS PAKISTAN
        </div>
        <button id="close-announcement-btn" class="text-white/60 hover:text-white transition-colors p-1" title="Close announcement">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    ` : ''}

    <!-- Main Navigation Header -->
    <header class="header-sticky">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        <!-- Mobile Hamburger Button (Left on Mobile) -->
        <div class="flex items-center lg:hidden">
          <button id="mobile-menu-toggle" class="p-2 -ml-2 text-[#111111] hover:opacity-70 transition-opacity" aria-label="Toggle navigation menu">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>

        <!-- Brand Wordmark Logo (Left on Desktop, Center on Mobile) -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#/" class="group flex flex-col items-start leading-none text-decoration-none">
            <span class="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-semibold text-[#111111] uppercase group-hover:opacity-80 transition-opacity">
              ZK STORE
            </span>
            <span class="font-sans text-[8px] sm:text-[9px] tracking-[0.38em] text-[#737373] uppercase font-medium mt-1">
              HAUTE ATELIER
            </span>
          </a>
        </div>

        <!-- Center Desktop Navigation Links & Mega Menus -->
        <nav class="hidden lg:flex items-center space-x-10">
          <a href="#/" class="nav-link">Home</a>

          <!-- Men with Mega Menu -->
          <div class="group relative py-6">
            <a href="#/men" class="nav-link flex items-center gap-1">
              Men
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180"></i>
            </a>

            <!-- Men Mega Menu Container -->
            <div class="mega-menu">
              <div class="max-w-[1500px] mx-auto px-10 py-10 grid grid-cols-12 gap-8">
                <!-- Categories Column 1 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Tops & Layering
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/men?category=t-shirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">T-Shirts</a></li>
                    <li><a href="#/men?category=shirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Shirts</a></li>
                    <li><a href="#/men?category=hoodies" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Hoodies</a></li>
                    <li><a href="#/men?category=sweatshirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Sweatshirts</a></li>
                    <li><a href="#/men?category=jackets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Jackets & Coats</a></li>
                  </ul>
                </div>

                <!-- Categories Column 2 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Bottoms & Sets
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/men?category=jeans" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Jeans & Denim</a></li>
                    <li><a href="#/men?category=trousers" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Tailored Trousers</a></li>
                    <li><a href="#/men?category=shorts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Casual Shorts</a></li>
                    <li><a href="#/men?category=co-ord-sets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Co-Ord Sets</a></li>
                    <li><a href="#/men" class="text-xs font-semibold text-[#111] uppercase tracking-wider block pt-2 underline underline-offset-4">Explore All Men (25) &rarr;</a></li>
                  </ul>
                </div>

                <!-- Featured Editorial 1 -->
                <div class="col-span-3">
                  <a href="#/men?category=jackets" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80" alt="Men's Outerwear" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Campaign</span>
                      <span class="font-serif text-lg text-white font-medium">The Autumn Outerwear</span>
                    </div>
                  </a>
                </div>

                <!-- Featured Editorial 2 -->
                <div class="col-span-3">
                  <a href="#/men?category=t-shirts" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80" alt="Heavyweight Cotton" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Atelier Edition</span>
                      <span class="font-serif text-lg text-white font-medium">280GSM Heavyweight Basics</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Women with Mega Menu -->
          <div class="group relative py-6">
            <a href="#/women" class="nav-link flex items-center gap-1">
              Women
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180"></i>
            </a>

            <!-- Women Mega Menu Container -->
            <div class="mega-menu">
              <div class="max-w-[1500px] mx-auto px-10 py-10 grid grid-cols-12 gap-8">
                <!-- Categories Column 1 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Tops & Silhouettes
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/women?category=tops" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Tops & Corsets</a></li>
                    <li><a href="#/women?category=shirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Shirts & Blouses</a></li>
                    <li><a href="#/women?category=dresses" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Dresses & Gowns</a></li>
                    <li><a href="#/women?category=hoodies" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Hoodies</a></li>
                    <li><a href="#/women?category=sweatshirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Sweatshirts</a></li>
                  </ul>
                </div>

                <!-- Categories Column 2 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Outerwear & Bottoms
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/women?category=jackets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Blazers & Coats</a></li>
                    <li><a href="#/women?category=jeans" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Jeans & Wide Leg</a></li>
                    <li><a href="#/women?category=trousers" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Tailored Trousers</a></li>
                    <li><a href="#/women?category=skirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Silk Skirts</a></li>
                    <li><a href="#/women?category=co-ord-sets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Co-Ord Sets</a></li>
                  </ul>
                </div>

                <!-- Featured Editorial 1 -->
                <div class="col-span-3">
                  <a href="#/women?category=dresses" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80" alt="Silk & Satin" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Editorial</span>
                      <span class="font-serif text-lg text-white font-medium">The Evening Silk Collection</span>
                    </div>
                  </a>
                </div>

                <!-- Featured Editorial 2 -->
                <div class="col-span-3">
                  <a href="#/women?category=jackets" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80" alt="Tailored Blazers" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Sartorial</span>
                      <span class="font-serif text-lg text-white font-medium">Sculpted Double-Breasted Blazers</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#/new-arrivals" class="nav-link">New Arrivals</a>
          <a href="#/categories" class="nav-link">Collections</a>
          <a href="#/best-sellers" class="nav-link">Best Sellers</a>
          <a href="#/men?sale=true" class="nav-link text-rose-700">Sale</a>
        </nav>

        <!-- Right Quick Actions (Search, Account, Wishlist, Bag) -->
        <div class="flex items-center space-x-5 sm:space-x-6">
          <!-- Search Trigger -->
          <button id="nav-search-btn" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors" aria-label="Search clothing catalog">
            <i data-lucide="search" class="w-5 h-5"></i>
          </button>

          <!-- Account -->
          <a href="#/account" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors" aria-label="My Account">
            <i data-lucide="user" class="w-5 h-5"></i>
          </a>

          <!-- Wishlist Trigger -->
          <button id="nav-wishlist-btn" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors relative" aria-label="Wishlist drawer">
            <i data-lucide="heart" class="w-5 h-5"></i>
            ${wishlistCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-[#111111] text-[#FFFFFF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                ${wishlistCount}
              </span>
            ` : ''}
          </button>

          <!-- Shopping Bag Trigger -->
          <button id="nav-cart-btn" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors relative" aria-label="Shopping bag">
            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            ${cartCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-[#111111] text-[#FFFFFF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                ${cartCount}
              </span>
            ` : ''}
          </button>
        </div>

      </div>
    </header>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-menu-drawer" class="drawer-backdrop">
      <div class="slide-drawer left-0 right-auto max-w-sm">
        <div class="p-6 border-b border-[#E8E4DC] flex items-center justify-between">
          <span class="font-serif text-xl tracking-[0.18em] font-semibold text-[#111111] uppercase">ZK STORE</span>
          <button id="close-mobile-menu-btn" class="p-1 text-[#111111]">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <div class="space-y-4">
            <a href="#/" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">Home</a>
            
            <div class="border-t border-[#E8E4DC] pt-4">
              <span class="block text-xs font-semibold tracking-luxury uppercase text-[#737373] mb-2">Men's Atelier</span>
              <div class="grid grid-cols-2 gap-2 pl-2">
                <a href="#/men?category=t-shirts" class="text-xs text-[#333] py-1">T-Shirts</a>
                <a href="#/men?category=shirts" class="text-xs text-[#333] py-1">Shirts</a>
                <a href="#/men?category=hoodies" class="text-xs text-[#333] py-1">Hoodies</a>
                <a href="#/men?category=jackets" class="text-xs text-[#333] py-1">Jackets</a>
                <a href="#/men?category=jeans" class="text-xs text-[#333] py-1">Jeans</a>
                <a href="#/men?category=trousers" class="text-xs text-[#333] py-1">Trousers</a>
                <a href="#/men" class="text-xs font-bold text-[#111] py-1 col-span-2">All Men's Products (25) &rarr;</a>
              </div>
            </div>

            <div class="border-t border-[#E8E4DC] pt-4">
              <span class="block text-xs font-semibold tracking-luxury uppercase text-[#737373] mb-2">Women's Atelier</span>
              <div class="grid grid-cols-2 gap-2 pl-2">
                <a href="#/women?category=tops" class="text-xs text-[#333] py-1">Tops & Blouses</a>
                <a href="#/women?category=dresses" class="text-xs text-[#333] py-1">Dresses</a>
                <a href="#/women?category=jackets" class="text-xs text-[#333] py-1">Blazers & Coats</a>
                <a href="#/women?category=jeans" class="text-xs text-[#333] py-1">Jeans</a>
                <a href="#/women?category=trousers" class="text-xs text-[#333] py-1">Trousers</a>
                <a href="#/women?category=skirts" class="text-xs text-[#333] py-1">Skirts</a>
                <a href="#/women" class="text-xs font-bold text-[#111] py-1 col-span-2">All Women's Products (25) &rarr;</a>
              </div>
            </div>

            <div class="border-t border-[#E8E4DC] pt-4 space-y-3">
              <a href="#/new-arrivals" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">New Arrivals</a>
              <a href="#/best-sellers" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">Best Sellers</a>
              <a href="#/categories" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">Clothing Categories</a>
              <a href="#/order-tracking" class="mobile-nav-item block text-sm font-medium tracking-wider text-[#555]">Track Your Order</a>
              <a href="#/about" class="mobile-nav-item block text-sm font-medium tracking-wider text-[#555]">About ZK STORE</a>
              <a href="#/contact" class="mobile-nav-item block text-sm font-medium tracking-wider text-[#555]">Concierge / Contact</a>
            </div>
          </div>
        </div>

        <div class="p-6 border-t border-[#E8E4DC] bg-[#F7F5F0]">
          <div class="flex items-center justify-between text-xs text-[#555]">
            <span>Currency: <strong>PKR (Rs.)</strong></span>
            <span>Flagship: <strong>Karachi & Lahore</strong></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function bindNavbarEvents() {
  // Announcement close
  const closeAnnouncementBtn = document.getElementById('close-announcement-btn');
  if (closeAnnouncementBtn) {
    closeAnnouncementBtn.addEventListener('click', () => {
      store.closeAnnouncement();
      const el = document.getElementById('announcement-bar');
      if (el) el.remove();
    });
  }

  // Cart trigger
  const cartBtn = document.getElementById('nav-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => store.toggleCart(true));
  }

  // Wishlist trigger
  const wishlistBtn = document.getElementById('nav-wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => store.toggleWishlistDrawer(true));
  }

  // Search trigger
  const searchBtn = document.getElementById('nav-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => store.toggleSearch(true));
  }

  // Mobile menu drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobileBtn = document.getElementById('close-mobile-menu-btn');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });
  }

  if (closeMobileBtn && mobileDrawer) {
    closeMobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove('active');
      }
    });

    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }
}
