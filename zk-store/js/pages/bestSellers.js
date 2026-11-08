// ZK STORE — Best Sellers Collection Page
import { store } from '../store/state.js';
import { renderProductCard, bindProductCardActions } from '../components/productCard.js';

export function renderBestSellersPage() {
  const bestSellers = store.getBestSellers(50);

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Editorial Header -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-12 border-b border-[#E8E4DC] pb-8">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373] block mb-2">
          CLIENT FAVORITES &bull; ICONIC RELEASES
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em] mb-3">
          Best Sellers
        </h1>
        <p class="text-xs sm:text-sm text-[#555] max-w-xl leading-relaxed">
          The pieces our patrons return to time and again. Enduring silhouettes engineered to form the definitive luxury capsule wardrobe.
        </p>
      </section>

      <!-- Products Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${bestSellers.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

    </div>
  `;
}

export function bindBestSellersPageEvents() {
  bindProductCardActions();
}
