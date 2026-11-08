// ZK STORE — Sophisticated Luxury Product Card Component
import { store } from '../store/state.js';

export function renderProductCard(product) {
  const isInWishlist = store.isInWishlist(product.id);
  const primaryImg = product.images[0];
  const secondaryImg = product.images[1] || product.images[0];
  const formattedSale = `Rs. ${product.salePrice.toLocaleString('en-PK')}`;
  const formattedOriginal = `Rs. ${product.originalPrice.toLocaleString('en-PK')}`;

  return `
    <div class="product-card group" data-product-id="${product.id}">
      <!-- Image Container with Hover Transition -->
      <div class="product-image-container relative">
        <a href="#/product/${product.id}" class="block w-full h-full relative" aria-label="View ${product.name}">
          <!-- Primary Image -->
          <img src="${primaryImg}" alt="${product.name}" loading="lazy" class="product-image-primary" />
          <!-- Secondary Hover Image -->
          <img src="${secondaryImg}" alt="${product.name} alternate view" loading="lazy" class="product-image-secondary" />
        </a>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 z-10 flex flex-col gap-1 pointer-events-none">
          ${product.isNew ? `
            <span class="bg-[#111111] text-[#FFFFFF] text-[9px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1">
              New
            </span>
          ` : ''}
          ${product.discountPercent ? `
            <span class="badge-discount">
              ${product.discountPercent}% OFF
            </span>
          ` : ''}
        </div>

        <!-- Wishlist Button -->
        <button 
          class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
          data-action="wishlist" 
          data-id="${product.id}" 
          title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          aria-label="Wishlist toggle"
        >
          <i data-lucide="heart" class="w-4 h-4 ${isInWishlist ? 'fill-current' : ''}"></i>
        </button>

        <!-- Quick Add / Quick View Action on Hover -->
        <div class="quick-add-action flex items-center gap-2">
          <button 
            class="flex-1 bg-white hover:bg-[#111111] text-[#111111] hover:text-white transition-colors duration-200 text-[11px] font-semibold tracking-[0.14em] uppercase py-2.5 px-3 flex items-center justify-center gap-1.5 shadow-sm"
            data-action="quick-view" 
            data-id="${product.id}"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            Quick View
          </button>
          <button 
            class="bg-[#111111] hover:bg-white text-white hover:text-[#111111] transition-colors duration-200 p-2.5 flex items-center justify-center shadow-sm"
            data-action="quick-add" 
            data-id="${product.id}"
            title="Add first variant to Bag"
          >
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>

      <!-- Product Meta Details -->
      <div class="pt-3.5 pb-2 flex flex-col space-y-1.5">
        
        <!-- Category & Swatches Row -->
        <div class="flex items-center justify-between text-[11px]">
          <span class="text-[#737373] tracking-widest uppercase font-medium">
            ${product.category}
          </span>
          <!-- Color Swatches -->
          <div class="flex items-center gap-1.5">
            ${product.colors.slice(0, 4).map((c, i) => `
              <span 
                class="color-swatch-circle ${i === 0 ? 'active' : ''}" 
                style="background-color: ${c.hex};" 
                title="${c.name}"
                data-color="${c.name}"
              ></span>
            `).join('')}
            ${product.colors.length > 4 ? `
              <span class="text-[9px] text-[#737373] font-medium">+${product.colors.length - 4}</span>
            ` : ''}
          </div>
        </div>

        <!-- Product Title -->
        <h3 class="font-sans text-[13px] font-medium text-[#111111] tracking-wide leading-tight line-clamp-1 group-hover:opacity-75 transition-opacity">
          <a href="#/product/${product.id}">${product.name}</a>
        </h3>

        <!-- Pricing with Strikethrough -->
        <div class="flex items-center gap-2 text-xs pt-0.5">
          <span class="price-sale text-sm font-semibold text-[#111111]">${formattedSale}</span>
          <span class="price-original text-xs text-[#888888]">${formattedOriginal}</span>
        </div>
      </div>
    </div>
  `;
}

export function bindProductCardActions(container = document) {
  // Wishlist clicks
  const wishlistBtns = container.querySelectorAll('[data-action="wishlist"]');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = store.getProductById(id);
      if (product) {
        const added = store.toggleWishlist(product);
        btn.classList.toggle('active', added);
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.toggle('fill-current', added);
        }
      }
    });
  });

  // Quick View clicks
  const quickViewBtns = container.querySelectorAll('[data-action="quick-view"]');
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = store.getProductById(id);
      if (product) {
        store.openQuickView(product);
      }
    });
  });

  // Quick Add directly to cart
  const quickAddBtns = container.querySelectorAll('[data-action="quick-add"]');
  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = store.getProductById(id);
      if (product) {
        const defaultColor = product.colors[0]?.name || 'Standard';
        const defaultSize = product.sizes[0] || 'M';
        store.addToCart(product, defaultColor, defaultSize, 1);
        store.toggleCart(true);
      }
    });
  });
}
