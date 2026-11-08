// ZK STORE — Luxury Slide Wishlist Drawer Component
import { store } from '../store/state.js';

export function renderWishlistDrawer() {
  const isOpen = store.ui.isWishlistOpen;
  const items = store.getWishlist();

  return `
    <div id="wishlist-drawer-backdrop" class="drawer-backdrop ${isOpen ? 'active' : ''}">
      <div class="slide-drawer">
        <!-- Header -->
        <div class="p-6 border-b border-[#E8E4DC] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="font-serif text-xl tracking-[0.16em] uppercase font-semibold text-[#111111]">Saved Pieces</span>
            <span class="text-xs text-[#737373]">(${items.length} items)</span>
          </div>
          <button id="close-wishlist-btn" class="p-1.5 text-[#111111] hover:opacity-60 transition-opacity" aria-label="Close wishlist">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Wishlist Items List / Empty State -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          ${items.length === 0 ? `
            <div class="h-full flex flex-col items-center justify-center text-center py-16">
              <div class="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#737373] mb-4">
                <i data-lucide="heart" class="w-8 h-8"></i>
              </div>
              <h4 class="font-serif text-xl text-[#111111] mb-2 font-medium">Your Wishlist is Empty</h4>
              <p class="text-xs text-[#737373] max-w-xs mb-6">
                Save pieces you desire by tapping the heart icon on any product.
              </p>
              <div class="flex gap-3">
                <a href="#/new-arrivals" class="btn-primary text-xs py-2.5 px-4 wishlist-close-action">Explore New Arrivals</a>
              </div>
            </div>
          ` : `
            <div class="divide-y divide-[#E8E4DC]">
              ${items.map((item) => {
                const prod = typeof item === 'string' ? store.getProductById(item) : item;
                if (!prod) return '';
                const formattedPrice = `Rs. ${(prod.price || prod.salePrice).toLocaleString('en-PK')}`;

                return `
                  <div class="py-4 first:pt-0 last:pb-0 flex gap-4">
                    <!-- Thumbnail -->
                    <div class="w-20 h-24 bg-[#F7F5F0] flex-shrink-0 overflow-hidden relative">
                      <img src="${prod.image || prod.images?.[0]}" alt="${prod.name}" class="w-full h-full object-cover">
                    </div>

                    <!-- Details -->
                    <div class="flex-1 flex flex-col justify-between">
                      <div>
                        <div class="flex items-start justify-between gap-2">
                          <h4 class="font-sans text-xs font-semibold text-[#111111] line-clamp-1">
                            <a href="#/product/${prod.id}" class="wishlist-close-action hover:underline">${prod.name}</a>
                          </h4>
                          <button class="wishlist-remove-btn text-[#737373] hover:text-[#111111] transition-colors p-0.5" data-id="${prod.id}" title="Remove item">
                            <i data-lucide="x" class="w-3.5 h-3.5"></i>
                          </button>
                        </div>
                        <div class="text-[11px] text-[#737373] mt-1">${prod.category}</div>
                        <div class="text-xs font-semibold text-[#111111] mt-1">${formattedPrice}</div>
                      </div>

                      <div class="pt-2">
                        <button class="wishlist-move-to-cart-btn btn-primary w-full py-2 text-[10px] tracking-wider uppercase" data-id="${prod.id}">
                          Move to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>

        <!-- Footer -->
        ${items.length > 0 ? `
          <div class="p-6 border-t border-[#E8E4DC] bg-white">
            <a href="#/wishlist" class="btn-outline w-full py-3 text-xs text-center wishlist-close-action font-semibold tracking-wider uppercase block">
              View Complete Wishlist Page &rarr;
            </a>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function bindWishlistDrawerEvents() {
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  if (!backdrop) return;

  const closeBtn = document.getElementById('close-wishlist-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.toggleWishlistDrawer(false));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.toggleWishlistDrawer(false);
    }
  });

  const closeActions = backdrop.querySelectorAll('.wishlist-close-action');
  closeActions.forEach(a => {
    a.addEventListener('click', () => store.toggleWishlistDrawer(false));
  });

  // Remove from wishlist
  const removeBtns = backdrop.querySelectorAll('.wishlist-remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const prod = store.getProductById(id);
      if (prod) {
        store.toggleWishlist(prod);
      }
    });
  });

  // Move to cart
  const moveBtns = backdrop.querySelectorAll('.wishlist-move-to-cart-btn');
  moveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const prod = store.getProductById(id);
      if (prod) {
        store.addToCart(prod, prod.colors[0]?.name || 'Standard', prod.sizes[0] || 'M', 1);
        store.toggleWishlist(prod); // remove from wishlist once moved
        store.toggleWishlistDrawer(false);
        store.toggleCart(true);
      }
    });
  });
}
