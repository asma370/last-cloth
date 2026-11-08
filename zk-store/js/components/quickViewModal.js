// ZK STORE — Quick View Modal Component
import { store } from '../store/state.js';

export function renderQuickViewModal() {
  const product = store.ui.quickViewProduct;
  const isOpen = store.ui.isQuickViewOpen && product;

  if (!isOpen || !product) {
    return `<div id="quickview-modal-container" class="modal-overlay"></div>`;
  }

  const formattedSale = `Rs. ${product.salePrice.toLocaleString('en-PK')}`;
  const formattedOriginal = `Rs. ${product.originalPrice.toLocaleString('en-PK')}`;

  return `
    <div id="quickview-modal-container" class="modal-overlay active">
      <div class="modal-dialog max-w-4xl p-0 shadow-2xl relative bg-white">
        <!-- Close button -->
        <button id="close-quickview-btn" class="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Image Showcase -->
          <div class="bg-[#F7F5F0] relative overflow-hidden aspect-[3/4]">
            <img id="quickview-main-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
            ${product.discountPercent ? `
              <div class="absolute top-4 left-4 z-10">
                <span class="badge-discount">${product.discountPercent}% OFF</span>
              </div>
            ` : ''}
          </div>

          <!-- Product Details & Variant Selection -->
          <div class="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#737373] mb-1">
                ${product.gender} &bull; ${product.category}
              </div>
              <h2 class="font-serif text-2xl sm:text-3xl font-medium text-[#111111] leading-tight mb-2">
                ${product.name}
              </h2>
              
              <!-- Price & Rating -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xl font-semibold text-[#111111]">${formattedSale}</span>
                <span class="price-original text-sm">${formattedOriginal}</span>
                <span class="text-xs text-emerald-700 font-medium">Save Rs. ${(product.originalPrice - product.salePrice).toLocaleString('en-PK')}</span>
              </div>

              <p class="text-xs text-[#555] leading-relaxed mb-6 line-clamp-3">
                ${product.description}
              </p>

              <!-- Color Selection -->
              <div class="mb-5">
                <div class="flex items-center justify-between text-xs font-medium mb-2">
                  <span class="text-[#111]">Color: <span id="quickview-selected-color" class="font-bold">${product.colors[0]?.name}</span></span>
                </div>
                <div class="flex items-center gap-2">
                  ${product.colors.map((c, i) => `
                    <button 
                      class="quickview-color-btn w-7 h-7 rounded-full border border-black/20 flex items-center justify-center transition-all ${i === 0 ? 'ring-2 ring-black ring-offset-2' : ''}" 
                      style="background-color: ${c.hex};"
                      data-color="${c.name}"
                      title="${c.name}"
                    ></button>
                  `).join('')}
                </div>
              </div>

              <!-- Size Selection -->
              <div class="mb-6">
                <div class="flex items-center justify-between text-xs font-medium mb-2">
                  <span class="text-[#111]">Select Size</span>
                  <button id="quickview-open-sizeguide" class="text-xs underline text-[#737373] hover:text-[#111]">Size Guide</button>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${product.sizes.map((s, i) => `
                    <button 
                      class="quickview-size-btn min-w-[42px] h-10 px-3 border border-[#E8E4DC] text-xs font-semibold tracking-wider transition-colors ${i === 0 ? 'bg-black text-white border-black' : 'hover:border-black text-[#111]'}"
                      data-size="${s}"
                    >
                      ${s}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Quantity Selector -->
              <div class="mb-6 flex items-center gap-4">
                <span class="text-xs font-medium text-[#111]">Quantity:</span>
                <div class="flex items-center border border-[#E8E4DC]">
                  <button id="quickview-qty-minus" class="w-8 h-8 flex items-center justify-center text-sm hover:bg-gray-100">-</button>
                  <span id="quickview-qty-val" class="w-10 text-center text-xs font-semibold">1</span>
                  <button id="quickview-qty-plus" class="w-8 h-8 flex items-center justify-center text-sm hover:bg-gray-100">+</button>
                </div>
                <span class="text-[11px] text-[#737373]">${product.stockStatus}</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-2.5 pt-4 border-t border-[#E8E4DC]">
              <button id="quickview-add-to-cart" class="btn-primary w-full py-3.5 text-xs font-bold tracking-luxury uppercase">
                Add to Shopping Bag
              </button>
              <a href="#/product/${product.id}" id="quickview-view-details" class="block text-center text-xs text-[#737373] hover:text-[#111] font-medium tracking-wider uppercase py-1">
                View Full Atelier Product Details &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function bindQuickViewEvents() {
  const container = document.getElementById('quickview-modal-container');
  if (!container) return;

  // Close handlers
  const closeBtn = document.getElementById('close-quickview-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.closeQuickView());
  }

  container.addEventListener('click', (e) => {
    if (e.target === container) {
      store.closeQuickView();
    }
  });

  const product = store.ui.quickViewProduct;
  if (!product) return;

  let selectedColor = product.colors[0]?.name || 'Standard';
  let selectedSize = product.sizes[0] || 'M';
  let quantity = 1;

  // Color clicks
  const colorBtns = container.querySelectorAll('.quickview-color-btn');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('ring-2', 'ring-black', 'ring-offset-2'));
      btn.classList.add('ring-2', 'ring-black', 'ring-offset-2');
      selectedColor = btn.getAttribute('data-color');
      const label = document.getElementById('quickview-selected-color');
      if (label) label.textContent = selectedColor;
    });
  });

  // Size clicks
  const sizeBtns = container.querySelectorAll('.quickview-size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => {
        b.classList.remove('bg-black', 'text-white', 'border-black');
        b.classList.add('text-[#111]');
      });
      btn.classList.add('bg-black', 'text-white', 'border-black');
      selectedSize = btn.getAttribute('data-size');
    });
  });

  // Qty plus / minus
  const minusBtn = document.getElementById('quickview-qty-minus');
  const plusBtn = document.getElementById('quickview-qty-plus');
  const qtyVal = document.getElementById('quickview-qty-val');

  if (minusBtn && qtyVal) {
    minusBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyVal.textContent = quantity;
      }
    });
  }

  if (plusBtn && qtyVal) {
    plusBtn.addEventListener('click', () => {
      if (quantity < 10) {
        quantity++;
        qtyVal.textContent = quantity;
      }
    });
  }

  // Size guide trigger
  const sizeGuideBtn = document.getElementById('quickview-open-sizeguide');
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      store.openSizeGuide();
    });
  }

  // Add to cart click
  const addToCartBtn = document.getElementById('quickview-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      store.addToCart(product, selectedColor, selectedSize, quantity);
      store.closeQuickView();
      store.toggleCart(true);
    });
  }

  const viewDetailsLink = document.getElementById('quickview-view-details');
  if (viewDetailsLink) {
    viewDetailsLink.addEventListener('click', () => {
      store.closeQuickView();
    });
  }
}
