// ZK STORE — Men's Dedicated Luxury Storefront
import { store } from '../store/state.js';
import { renderProductCard, bindProductCardActions } from '../components/productCard.js';
import { MEN_CATEGORIES } from '../data/categories.js';

export function renderMenPage(queryParams = {}) {
  const activeCategory = queryParams.category || 'all';
  const isSaleOnly = queryParams.sale === 'true';

  let products = store.getProductsByGender('men');
  if (activeCategory !== 'all') {
    products = products.filter(p => p.categorySlug === activeCategory);
  }
  if (isSaleOnly) {
    products = products.filter(p => p.discountPercent >= 25);
  }

  const categoryTitle = activeCategory === 'all' 
    ? (isSaleOnly ? "Men's Atelier Sale" : "Men's Collection")
    : MEN_CATEGORIES.find(c => c.slug === activeCategory)?.name || "Men's Collection";

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Editorial Masculine Hero Banner -->
      <section class="relative min-h-[42vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80" 
            alt="Men's Haute Collection" 
            class="w-full h-full object-cover object-center brightness-75 contrast-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5]">
            HAUTE HOMME &bull; 25 BESPOKE STYLES
          </span>
          <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.1em] uppercase leading-tight">
            ${categoryTitle}
          </h1>
          <p class="font-sans text-xs sm:text-sm text-[#DDD] max-w-lg mx-auto font-light leading-relaxed">
            Architectural tailoring, 280GSM heavy knitwear, and Japanese raw denim engineered for modern stature.
          </p>
        </div>
      </section>

      <!-- Main Container with Category Chips & Filter Bar -->
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar border-b border-[#E8E4DC]">
          <a href="#/men" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-colors ${activeCategory === 'all' ? 'bg-[#111111] text-white' : 'bg-[#F7F5F0] text-[#111] hover:bg-gray-200'}">
            All Men (25)
          </a>
          ${MEN_CATEGORIES.map(cat => `
            <a href="#/men?category=${cat.slug}" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-colors ${activeCategory === cat.slug ? 'bg-[#111111] text-white' : 'bg-[#F7F5F0] text-[#111] hover:bg-gray-200'}">
              ${cat.name}
            </a>
          `).join('')}
        </div>

        <!-- Filter & Sorting Control Bar -->
        <div class="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E4DC]">
          <div class="flex items-center gap-4 text-xs text-[#737373]">
            <span>Showing <strong>${products.length}</strong> styles</span>
            ${activeCategory !== 'all' ? `
              <span class="bg-[#F7F5F0] text-black px-2.5 py-1 rounded-sm text-[11px] font-semibold flex items-center gap-1">
                Category: ${categoryTitle}
                <a href="#/men" class="hover:text-red-500 ml-1">&times;</a>
              </span>
            ` : ''}
          </div>

          <!-- Controls: Sort & Price Filter -->
          <div class="flex items-center flex-wrap gap-4">
            
            <!-- Sort dropdown -->
            <div class="flex items-center gap-2">
              <label for="men-sort-select" class="text-xs text-[#737373] uppercase tracking-wider font-semibold">Sort by:</label>
              <select id="men-sort-select" class="bg-white border border-[#E8E4DC] text-xs px-3 py-2 text-[#111] focus:outline-none focus:border-black font-medium">
                <option value="featured">Featured Atelier</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <!-- Price quick filter -->
            <div class="flex items-center gap-2">
              <label for="men-price-filter" class="text-xs text-[#737373] uppercase tracking-wider font-semibold">Max Price:</label>
              <select id="men-price-filter" class="bg-white border border-[#E8E4DC] text-xs px-3 py-2 text-[#111] focus:outline-none focus:border-black font-medium">
                <option value="all">All Prices</option>
                <option value="5000">Under Rs. 5,000</option>
                <option value="10000">Under Rs. 10,000</option>
                <option value="15000">Under Rs. 15,000</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Product Grid -->
        <div id="men-product-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 pt-8">
          ${products.length > 0 ? products.map(prod => renderProductCard(prod)).join('') : `
            <div class="col-span-full py-16 text-center text-xs text-[#737373]">
              No pieces match your selected filter criteria.
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

export function bindMenPageEvents(queryParams = {}) {
  bindProductCardActions();

  const sortSelect = document.getElementById('men-sort-select');
  const priceSelect = document.getElementById('men-price-filter');
  const grid = document.getElementById('men-product-grid');

  function applyFilters() {
    let items = store.getProductsByGender('men');
    const activeCat = queryParams.category || 'all';
    if (activeCat !== 'all') {
      items = items.filter(p => p.categorySlug === activeCat);
    }

    const maxPrice = priceSelect ? priceSelect.value : 'all';
    if (maxPrice !== 'all') {
      const num = parseInt(maxPrice, 10);
      items = items.filter(p => p.salePrice <= num);
    }

    const sort = sortSelect ? sortSelect.value : 'featured';
    if (sort === 'price-low') {
      items.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sort === 'price-high') {
      items.sort((a, b) => b.salePrice - a.salePrice);
    } else if (sort === 'newest') {
      items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    if (grid) {
      grid.innerHTML = items.length > 0 
        ? items.map(p => renderProductCard(p)).join('')
        : `<div class="col-span-full py-16 text-center text-xs text-[#737373]">No pieces match your selected filter criteria.</div>`;
      
      if (window.lucide) {
        window.lucide.createIcons({ root: grid });
      }
      bindProductCardActions(grid);
    }
  }

  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);
}
