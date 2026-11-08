// ZK STORE — Dedicated Search Results Page
import { store } from '../store/state.js';
import { renderProductCard, bindProductCardActions } from '../components/productCard.js';

export function renderSearchPage(queryParams = {}) {
  const query = queryParams.q || '';
  const results = store.searchProducts(query);

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Search Header & Search Input -->
      <section class="max-w-[1200px] mx-auto px-6 sm:px-12 pt-12 text-center space-y-6">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373]">
          ATELIER SEARCH & DISCOVERY
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em]">
          Search Results
        </h1>

        <!-- Search Bar -->
        <form id="search-page-form" class="max-w-2xl mx-auto flex items-center border border-[#111111] bg-white p-1">
          <div class="pl-4 pr-2 text-[#737373]">
            <i data-lucide="search" class="w-5 h-5"></i>
          </div>
          <input 
            type="text" 
            id="search-page-input" 
            value="${query}" 
            placeholder="Search by piece name, category, or color..." 
            class="flex-1 py-3 text-xs sm:text-sm font-sans focus:outline-none tracking-wide"
          />
          <button type="submit" class="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black/80">
            Search
          </button>
        </form>

        <p class="text-xs text-[#737373]">
          ${query ? `Found <strong>${results.length}</strong> matching pieces for "<em>${query}</em>"` : 'Showing complete collection'}
        </p>
      </section>

      <!-- Results Grid or Empty State -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        ${results.length === 0 ? `
          <div class="max-w-md mx-auto text-center py-20 bg-[#F7F5F0] p-10 border border-[#E8E4DC]">
            <i data-lucide="search-x" class="w-12 h-12 text-[#737373] mx-auto mb-3"></i>
            <h3 class="font-serif text-2xl text-[#111] mb-2 font-medium">No Matches Found</h3>
            <p class="text-xs text-[#737373] mb-6 leading-relaxed">
              We couldn't locate any items matching your exact search. Explore our curated Men's or Women's departments below.
            </p>
            <div class="flex justify-center gap-3">
              <a href="#/men" class="btn-primary text-xs py-2.5 px-5">Shop Men</a>
              <a href="#/women" class="btn-outline text-xs py-2.5 px-5">Shop Women</a>
            </div>
          </div>
        ` : `
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            ${results.map(prod => renderProductCard(prod)).join('')}
          </div>
        `}
      </section>

    </div>
  `;
}

export function bindSearchPageEvents() {
  bindProductCardActions();

  const form = document.getElementById('search-page-form');
  const input = document.getElementById('search-page-input');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      window.location.hash = `#/search?q=${encodeURIComponent(q)}`;
    });
  }
}
