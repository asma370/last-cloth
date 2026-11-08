// ZK STORE — Dedicated Wishlist Page
import { store } from '../store/state.js';
import { renderProductCard, bindProductCardActions } from '../components/productCard.js';

export function renderWishlistPage() {
  const wishlistItems = store.getWishlist();
  const products = wishlistItems.map(item => {
    return typeof item === 'string' ? store.getProductById(item) : store.getProductById(item.id) || item;
  }).filter(Boolean);

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-10 pb-24">
      
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8E4DC] pb-6 gap-4">
        <div>
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
            CURATED SELECTION
          </span>
          <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111111] uppercase tracking-[0.08em]">
            Your Saved Wishlist
          </h1>
        </div>
        ${products.length > 0 ? `
          <div class="flex items-center gap-4">
            <span class="text-xs text-[#737373]">${products.length} saved pieces</span>
            <button id="wishlist-move-all-btn" class="btn-primary text-xs py-2.5 px-5">
              Move All to Bag
            </button>
          </div>
        ` : ''}
      </div>

      ${products.length === 0 ? `
        <div class="max-w-md mx-auto text-center py-20 bg-[#F7F5F0] p-12 border border-[#E8E4DC]">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#737373] mx-auto mb-4 shadow-sm">
            <i data-lucide="heart" class="w-8 h-8"></i>
          </div>
          <h3 class="font-serif text-2xl text-[#111] mb-2 font-medium">Your Wishlist is Empty</h3>
          <p class="text-xs text-[#737373] mb-6 leading-relaxed">
            Click the heart icon on any piece across our collection to save your personal favorites for later.
          </p>
          <div class="flex justify-center gap-4">
            <a href="#/new-arrivals" class="btn-primary text-xs py-3 px-6">Explore New Arrivals</a>
            <a href="#/best-sellers" class="btn-outline text-xs py-3 px-6">View Best Sellers</a>
          </div>
        </div>
      ` : `
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${products.map(prod => renderProductCard(prod)).join('')}
        </div>
      `}

    </div>
  `;
}

export function bindWishlistPageEvents() {
  bindProductCardActions();

  const moveAllBtn = document.getElementById('wishlist-move-all-btn');
  if (moveAllBtn) {
    moveAllBtn.addEventListener('click', () => {
      const items = store.getWishlist();
      items.forEach(item => {
        const prod = typeof item === 'string' ? store.getProductById(item) : store.getProductById(item.id) || item;
        if (prod) {
          store.addToCart(prod, prod.colors[0]?.name || 'Standard', prod.sizes[0] || 'M', 1);
        }
      });
      store.wishlist = [];
      store.notify('wishlist:updated', []);
      store.showToast('All saved pieces moved to your shopping bag', 'cart');
      store.toggleCart(true);
    });
  }
}
