// ZK STORE — Luxury Instant Search Modal Component
import { store } from '../store/state.js';

export function renderSearchModal() {
  const isOpen = store.ui.isSearchOpen;

  return `
    <div id="search-modal-backdrop" class="modal-overlay ${isOpen ? 'active' : ''}">
      <div class="modal-dialog max-w-3xl bg-white shadow-2xl p-6 sm:p-8">
        
        <!-- Search Header & Input -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
          <div class="flex items-center gap-3 flex-1">
            <i data-lucide="search" class="w-5 h-5 text-[#737373]"></i>
            <input 
              type="text" 
              id="live-search-input" 
              placeholder="Search by product name, category (e.g. Hoodies, Denim), color, or style..." 
              class="w-full text-base sm:text-lg font-sans placeholder:text-[#888] focus:outline-none tracking-wide"
              autocomplete="off"
            />
          </div>
          <button id="close-search-modal-btn" class="p-2 text-[#737373] hover:text-[#111111] transition-colors ml-4">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Suggestions & Quick Chips -->
        <div class="py-4 border-b border-[#E8E4DC] flex flex-wrap items-center gap-2">
          <span class="text-xs font-semibold text-[#737373] tracking-wider uppercase mr-2">Trending:</span>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Heavyweight T-Shirt">T-Shirts</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Bomber Jacket">Bomber Jackets</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Satin Top">Satin Tops</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Jeans">Selvedge Jeans</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Hoodie">Hoodies</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Dress">Dresses</button>
        </div>

        <!-- Live Results Container -->
        <div id="search-live-results" class="py-6 max-h-[50vh] overflow-y-auto">
          <div class="text-center py-10 text-xs text-[#737373]">
            Start typing to explore the ZK STORE 50-piece collection.
          </div>
        </div>

        <!-- Footer link -->
        <div id="search-view-all-footer" class="pt-4 border-t border-[#E8E4DC] flex justify-between items-center hidden">
          <span id="search-result-count" class="text-xs text-[#737373]"></span>
          <a id="search-view-all-link" href="#/search?q=" class="text-xs font-semibold tracking-wider uppercase text-black hover:underline">
            View All Results &rarr;
          </a>
        </div>
      </div>
    </div>
  `;
}

export function bindSearchModalEvents() {
  const backdrop = document.getElementById('search-modal-backdrop');
  if (!backdrop) return;

  const closeBtn = document.getElementById('close-search-modal-btn');
  const input = document.getElementById('live-search-input');
  const resultsContainer = document.getElementById('search-live-results');
  const footer = document.getElementById('search-view-all-footer');
  const countSpan = document.getElementById('search-result-count');
  const viewAllLink = document.getElementById('search-view-all-link');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.toggleSearch(false));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.toggleSearch(false);
    }
  });

  // Trending chips click
  const chips = backdrop.querySelectorAll('.search-tag-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      if (input) {
        input.value = q;
        triggerSearch(q);
      }
    });
  });

  function triggerSearch(query) {
    const q = query.trim();
    if (!q) {
      resultsContainer.innerHTML = `
        <div class="text-center py-10 text-xs text-[#737373]">
          Start typing to explore the ZK STORE 50-piece collection.
        </div>
      `;
      footer.classList.add('hidden');
      return;
    }

    const matches = store.searchProducts(q);
    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="text-center py-12">
          <i data-lucide="search-x" class="w-8 h-8 text-[#737373] mx-auto mb-2"></i>
          <p class="font-serif text-lg text-[#111] mb-1">No Pieces Found</p>
          <p class="text-xs text-[#737373]">We couldn't find any clothing matching "${q}". Try searching for T-Shirts, Hoodies, Blazers, or Jeans.</p>
        </div>
      `;
      footer.classList.add('hidden');
    } else {
      resultsContainer.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${matches.slice(0, 6).map(prod => `
            <a href="#/product/${prod.id}" class="search-result-item flex gap-3 p-2 hover:bg-[#F7F5F0] transition-colors rounded">
              <div class="w-16 h-20 bg-[#F7F5F0] flex-shrink-0 overflow-hidden">
                <img src="${prod.images[0]}" alt="${prod.name}" class="w-full h-full object-cover">
              </div>
              <div class="flex-1 flex flex-col justify-center">
                <span class="text-[10px] uppercase font-semibold text-[#737373] tracking-widest">${prod.gender} &bull; ${prod.category}</span>
                <h4 class="text-xs font-semibold text-[#111111] line-clamp-1">${prod.name}</h4>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-xs font-bold text-[#111111]">Rs. ${prod.salePrice.toLocaleString('en-PK')}</span>
                  <span class="price-original text-[11px]">Rs. ${prod.originalPrice.toLocaleString('en-PK')}</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      `;

      footer.classList.remove('hidden');
      countSpan.textContent = `Showing top 6 of ${matches.length} matching pieces`;
      viewAllLink.href = `#/search?q=${encodeURIComponent(q)}`;
    }

    if (window.lucide) {
      window.lucide.createIcons({ root: resultsContainer });
    }

    // Attach click listener to close modal on navigation
    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => store.toggleSearch(false));
    });
    viewAllLink.addEventListener('click', () => store.toggleSearch(false));
  }

  if (input) {
    let debounceTimer;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        triggerSearch(e.target.value);
      }, 250);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) {
          store.toggleSearch(false);
          window.location.hash = `#/search?q=${encodeURIComponent(q)}`;
        }
      }
    });
  }
}
