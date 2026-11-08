// ZK STORE — Exceptional Luxury Product Detail Page
import { store } from '../store/state.js';
import { renderProductCard, bindProductCardActions } from '../components/productCard.js';
import { Storage } from '../store/storage.js';

export function renderProductDetailPage(productId) {
  const product = store.getProductById(productId);

  if (!product) {
    return `
      <div class="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 class="font-serif text-3xl text-[#111111] mb-4">Piece Not Found</h2>
        <p class="text-xs text-[#737373] mb-6">The requested garment may be archived or unavailable.</p>
        <a href="#/" class="btn-primary">Return to House Home</a>
      </div>
    `;
  }

  // Record into recently viewed
  Storage.addRecentlyViewed(product.id);

  const isInWishlist = store.isInWishlist(product.id);
  const formattedSale = `Rs. ${product.salePrice.toLocaleString('en-PK')}`;
  const formattedOriginal = `Rs. ${product.originalPrice.toLocaleString('en-PK')}`;
  const savings = `Rs. ${(product.originalPrice - product.salePrice).toLocaleString('en-PK')}`;

  // Related products (same gender, excluding self)
  const relatedProducts = store.getProductsByGender(product.gender)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Recently viewed products
  const recentIds = Storage.getRecentlyViewed().filter(id => id !== product.id);
  const recentProducts = recentIds.map(id => store.getProductById(id)).filter(Boolean).slice(0, 4);

  return `
    <div class="space-y-16 sm:space-y-24 pb-24">
      
      <!-- Breadcrumb Navigation -->
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-6">
        <nav class="flex items-center gap-2 text-xs text-[#737373]">
          <a href="#/" class="hover:text-black">Home</a>
          <span>/</span>
          <a href="#/${product.gender}" class="hover:text-black capitalize">${product.gender}</a>
          <span>/</span>
          <a href="#/${product.gender}?category=${product.categorySlug}" class="hover:text-black">${product.category}</a>
          <span>/</span>
          <span class="text-black font-medium truncate max-w-xs">${product.name}</span>
        </nav>
      </div>

      <!-- Main Product Showcase Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- LEFT SIDE: Gallery & Zoom Showcase (7 Cols) -->
          <div class="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            <!-- Thumbnails Column -->
            <div class="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar flex-shrink-0 md:w-24">
              ${product.images.map((img, i) => `
                <button 
                  class="product-thumb-btn w-20 h-24 md:w-24 md:h-32 border ${i === 0 ? 'border-black' : 'border-transparent'} hover:border-black flex-shrink-0 bg-[#F7F5F0] overflow-hidden transition-colors"
                  data-img="${img}"
                >
                  <img src="${img}" alt="${product.name} thumbnail ${i + 1}" class="w-full h-full object-cover">
                </button>
              `).join('')}
            </div>

            <!-- Large Hero Main Image with Zoom -->
            <div class="flex-1 bg-[#F7F5F0] relative overflow-hidden aspect-[3/4] zoom-container group cursor-crosshair">
              <img 
                id="main-product-image" 
                src="${product.images[0]}" 
                alt="${product.name}" 
                class="w-full h-full object-cover select-none transition-transform duration-300"
              />

              <!-- Discount Tag -->
              <div class="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
                <span class="bg-[#111111] text-[#FFFFFF] text-[10px] font-semibold tracking-wider uppercase px-3 py-1">
                  Atelier ID: ${product.id}
                </span>
                ${product.discountPercent ? `
                  <span class="badge-discount">${product.discountPercent}% OFF</span>
                ` : ''}
              </div>

              <!-- Zoom Hint Overlay -->
              <div class="absolute bottom-4 right-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase text-black flex items-center gap-1.5 pointer-events-none">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i> Hover to Zoom
              </div>
            </div>

          </div>

          <!-- RIGHT SIDE: Information, Selectors & Checkout Actions (5 Cols) -->
          <div class="lg:col-span-5 flex flex-col justify-start space-y-6">
            
            <!-- Header & Ratings -->
            <div>
              <div class="flex items-center justify-between gap-4 mb-2">
                <span class="text-xs font-semibold tracking-[0.2em] uppercase text-[#737373]">
                  ${product.gender} &bull; ${product.category}
                </span>
                <!-- Wishlist Button -->
                <button 
                  id="detail-wishlist-btn" 
                  class="wishlist-btn ${isInWishlist ? 'active' : ''} !relative !top-0 !right-0" 
                  title="Save to Wishlist"
                  data-id="${product.id}"
                >
                  <i data-lucide="heart" class="w-4 h-4 ${isInWishlist ? 'fill-current text-rose-500' : ''}"></i>
                </button>
              </div>

              <h1 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium leading-tight mb-3">
                ${product.name}
              </h1>

              <!-- Star Rating -->
              <div class="flex items-center gap-2 mb-4">
                <div class="flex text-amber-500 text-xs">
                  ${[...Array(5)].map((_, i) => `
                    <i data-lucide="star" class="w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}"></i>
                  `).join('')}
                </div>
                <span class="text-xs font-semibold text-[#111]">${product.rating}</span>
                <span class="text-xs text-[#737373]">(${product.reviewCount} Patron Reviews)</span>
              </div>

              <!-- Pricing Display -->
              <div class="flex items-baseline gap-3 pb-6 border-b border-[#E8E4DC]">
                <span class="text-2xl sm:text-3xl font-semibold text-[#111111]">${formattedSale}</span>
                <span class="price-original text-base">${formattedOriginal}</span>
                <span class="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
                  Save ${savings} (${product.discountPercent}% OFF)
                </span>
              </div>
            </div>

            <!-- Color Swatches Selector -->
            <div>
              <div class="flex items-center justify-between text-xs font-medium mb-3">
                <span class="text-[#111]">Color: <strong id="detail-color-name">${product.colors[0]?.name}</strong></span>
                <span class="text-[#737373] text-[11px]">${product.colors.length} Atelier Tones</span>
              </div>
              <div class="flex items-center gap-3">
                ${product.colors.map((c, i) => `
                  <button 
                    class="detail-color-swatch w-8 h-8 rounded-full border border-black/20 flex items-center justify-center transition-all ${i === 0 ? 'ring-2 ring-black ring-offset-2' : ''}" 
                    style="background-color: ${c.hex};"
                    data-color="${c.name}"
                    title="${c.name}"
                  ></button>
                `).join('')}
              </div>
            </div>

            <!-- Size Selector -->
            <div>
              <div class="flex items-center justify-between text-xs font-medium mb-3">
                <span class="text-[#111]">Select Size</span>
                <button id="detail-open-sizeguide" class="text-xs text-[#737373] hover:text-black underline underline-offset-4 flex items-center gap-1">
                  <i data-lucide="ruler" class="w-3.5 h-3.5"></i> Atelier Size Guide
                </button>
              </div>
              <div class="flex flex-wrap gap-2.5">
                ${product.sizes.map((s, i) => `
                  <button 
                    class="detail-size-btn min-w-[50px] h-12 px-4 border border-[#E8E4DC] text-xs font-semibold tracking-wider uppercase transition-all ${i === 0 ? 'bg-[#111111] text-white border-black shadow-sm' : 'hover:border-black text-[#111]'}"
                    data-size="${s}"
                  >
                    ${s}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Quantity & Stock Status -->
            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center gap-3">
                <span class="text-xs font-medium text-[#111]">Quantity:</span>
                <div class="flex items-center border border-[#E8E4DC] bg-white">
                  <button id="detail-qty-minus" class="w-9 h-9 flex items-center justify-center text-sm hover:bg-gray-100 text-[#111]">-</button>
                  <span id="detail-qty-val" class="w-10 text-center text-xs font-bold">1</span>
                  <button id="detail-qty-plus" class="w-9 h-9 flex items-center justify-center text-sm hover:bg-gray-100 text-[#111]">+</button>
                </div>
              </div>
              <div class="text-xs font-medium text-emerald-800 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                ${product.stockStatus} &bull; Ready for Dispatch
              </div>
            </div>

            <!-- Action Buttons: Add to Bag & Buy Now -->
            <div class="space-y-3 pt-4">
              <button id="detail-add-to-cart-btn" class="btn-primary w-full py-4 text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Shopping Bag
              </button>
              <button id="detail-buy-now-btn" class="btn-outline w-full py-3.5 text-xs font-bold tracking-[0.2em] uppercase">
                Instant Express Checkout
              </button>
            </div>

            <!-- Reassurance Icons -->
            <div class="grid grid-cols-3 gap-2 py-4 border-y border-[#E8E4DC] text-center text-[10px] text-[#737373] uppercase tracking-wider font-medium">
              <div class="p-2 flex flex-col items-center gap-1">
                <i data-lucide="truck" class="w-4 h-4 text-black"></i>
                <span>TCS Express Free &gt; 5k</span>
              </div>
              <div class="p-2 flex flex-col items-center gap-1">
                <i data-lucide="refresh-cw" class="w-4 h-4 text-black"></i>
                <span>14-Day Exchanges</span>
              </div>
              <div class="p-2 flex flex-col items-center gap-1">
                <i data-lucide="shield-check" class="w-4 h-4 text-black"></i>
                <span>100% Authentic Fabric</span>
              </div>
            </div>

            <!-- Luxury Accordions -->
            <div class="divide-y divide-[#E8E4DC] text-xs">
              
              <!-- Accordion 1: Description -->
              <details open class="group py-3.5">
                <summary class="flex justify-between items-center cursor-pointer font-semibold uppercase tracking-wider text-[#111]">
                  <span>Product Story & Design</span>
                  <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pt-3 text-[#555] leading-relaxed">
                  ${product.description}
                </div>
              </details>

              <!-- Accordion 2: Material & Care -->
              <details class="group py-3.5">
                <summary class="flex justify-between items-center cursor-pointer font-semibold uppercase tracking-wider text-[#111]">
                  <span>Material Composition & Care</span>
                  <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pt-3 text-[#555] space-y-2">
                  <p><strong>Composition:</strong> ${product.material}</p>
                  <p><strong>Care Instructions:</strong> ${product.care}</p>
                </div>
              </details>

              <!-- Accordion 3: Shipping & Returns -->
              <details class="group py-3.5">
                <summary class="flex justify-between items-center cursor-pointer font-semibold uppercase tracking-wider text-[#111]">
                  <span>Shipping & Hassle-Free Returns</span>
                  <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pt-3 text-[#555] space-y-2 leading-relaxed">
                  <p>Complimentary TCS Express shipping across Pakistan on orders exceeding Rs. 5,000. Standard shipping fee of Rs. 350 for smaller parcels.</p>
                  <p>Karachi deliveries typically arrive within 24 to 48 hours. Lahore, Islamabad, and nationwide addresses receive parcels within 2 to 4 business days.</p>
                  <p>If sizing does not meet expectations, exchange requests can be initiated within 14 days of delivery.</p>
                </div>
              </details>

            </div>

          </div>

        </div>
      </section>

      <!-- Customer Reviews Section -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-10 border-t border-[#E8E4DC]">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#E8E4DC] gap-4">
            <div>
              <span class="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">PATRON FEEDBACK</span>
              <h2 class="font-serif text-3xl font-medium text-[#111]">Customer Reviews</h2>
              <div class="flex items-center gap-2 mt-2">
                <div class="flex text-amber-500">
                  ${[...Array(5)].map(() => `<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>`).join('')}
                </div>
                <span class="text-sm font-bold">${product.rating} out of 5</span>
                <span class="text-xs text-[#737373]">Based on ${product.reviewCount} verified patrons</span>
              </div>
            </div>

            <!-- Write Review Button -->
            <button id="toggle-review-form-btn" class="btn-outline text-xs px-6 py-2.5">
              Write a Review
            </button>
          </div>

          <!-- Review Form (Hidden by default) -->
          <div id="product-review-form-container" class="py-6 border-b border-[#E8E4DC] hidden bg-[#F7F5F0] p-6 mt-4">
            <h3 class="font-serif text-xl font-medium text-[#111] mb-3">Submit Your Review</h3>
            <form id="submit-review-form" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Your Name</label>
                  <input type="text" id="review-name" required placeholder="e.g. Daniyal Khan" class="w-full bg-white border border-[#E8E4DC] px-3 py-2 text-xs focus:outline-none focus:border-black">
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Rating</label>
                  <select id="review-rating" class="w-full bg-white border border-[#E8E4DC] px-3 py-2 text-xs focus:outline-none focus:border-black">
                    <option value="5">5 Stars — Flawless Atelier Quality</option>
                    <option value="4">4 Stars — Excellent Fit</option>
                    <option value="3">3 Stars — Satisfactory</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Your Review</label>
                <textarea id="review-comment" required rows="3" placeholder="Share details regarding fabric weight, hand feel, and sizing..." class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black"></textarea>
              </div>
              <button type="submit" class="btn-primary text-xs py-2.5 px-6">Submit Review</button>
            </form>
          </div>

          <!-- Patron Reviews List -->
          <div id="reviews-list" class="divide-y divide-[#E8E4DC] py-6">
            ${product.reviews.map(rev => `
              <div class="py-6 first:pt-4">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-[#111]">${rev.author}</span>
                    <span class="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">Verified Patron</span>
                  </div>
                  <span class="text-xs text-[#737373]">${rev.date}</span>
                </div>
                <div class="flex text-amber-500 mb-2">
                  ${[...Array(rev.rating)].map(() => `<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>`).join('')}
                </div>
                <p class="text-xs text-[#444] leading-relaxed">${rev.comment}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- You May Also Like -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-8">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC]">
          <h2 class="font-serif text-2xl sm:text-3xl text-[#111111] font-medium tracking-wide">
            You May Also Like
          </h2>
          <a href="#/${product.gender}" class="text-xs font-semibold tracking-wider uppercase text-[#111] hover:underline">
            View Collection &rarr;
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          ${relatedProducts.map(p => renderProductCard(p)).join('')}
        </div>
      </section>

      <!-- Recently Viewed -->
      ${recentProducts.length > 0 ? `
        <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-8">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC]">
            <h2 class="font-serif text-2xl sm:text-3xl text-[#111111] font-medium tracking-wide">
              Recently Viewed
            </h2>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            ${recentProducts.map(p => renderProductCard(p)).join('')}
          </div>
        </section>
      ` : ''}

    </div>
  `;
}

export function bindProductDetailPageEvents(productId) {
  bindProductCardActions();

  const product = store.getProductById(productId);
  if (!product) return;

  let selectedColor = product.colors[0]?.name || 'Standard';
  let selectedSize = product.sizes[0] || 'M';
  let quantity = 1;

  // Image zoom effect
  const zoomContainer = document.querySelector('.zoom-container');
  const mainImage = document.getElementById('main-product-image');

  if (zoomContainer && mainImage) {
    zoomContainer.addEventListener('mousemove', (e) => {
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImage.style.transformOrigin = `${x}% ${y}%`;
      mainImage.style.transform = 'scale(1.85)';
    });

    zoomContainer.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center center';
      mainImage.style.transform = 'scale(1)';
    });
  }

  // Thumbnail clicks
  const thumbs = document.querySelectorAll('.product-thumb-btn');
  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbs.forEach(b => b.classList.replace('border-black', 'border-transparent'));
      btn.classList.replace('border-transparent', 'border-black');
      const newSrc = btn.getAttribute('data-img');
      if (mainImage) mainImage.src = newSrc;
    });
  });

  // Color Swatch Selection
  const swatches = document.querySelectorAll('.detail-color-swatch');
  const colorNameLabel = document.getElementById('detail-color-name');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('ring-2', 'ring-black', 'ring-offset-2'));
      swatch.classList.add('ring-2', 'ring-black', 'ring-offset-2');
      selectedColor = swatch.getAttribute('data-color');
      if (colorNameLabel) colorNameLabel.textContent = selectedColor;
    });
  });

  // Size Selector
  const sizeBtns = document.querySelectorAll('.detail-size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => {
        b.classList.remove('bg-[#111111]', 'text-white', 'border-black', 'shadow-sm');
        b.classList.add('hover:border-black', 'text-[#111]');
      });
      btn.classList.add('bg-[#111111]', 'text-white', 'border-black', 'shadow-sm');
      btn.classList.remove('hover:border-black', 'text-[#111]');
      selectedSize = btn.getAttribute('data-size');
    });
  });

  // Size guide trigger
  const sizeGuideBtn = document.getElementById('detail-open-sizeguide');
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      store.openSizeGuide();
    });
  }

  // Wishlist toggle
  const wishlistBtn = document.getElementById('detail-wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const added = store.toggleWishlist(product);
      wishlistBtn.classList.toggle('active', added);
      const icon = wishlistBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fill-current', added);
        icon.classList.toggle('text-rose-500', added);
      }
    });
  }

  // Quantity stepper
  const minusBtn = document.getElementById('detail-qty-minus');
  const plusBtn = document.getElementById('detail-qty-plus');
  const qtyVal = document.getElementById('detail-qty-val');

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

  // Add to Cart
  const addToCartBtn = document.getElementById('detail-add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      store.addToCart(product, selectedColor, selectedSize, quantity);
      store.toggleCart(true);
    });
  }

  // Buy Now
  const buyNowBtn = document.getElementById('detail-buy-now-btn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      store.addToCart(product, selectedColor, selectedSize, quantity);
      window.location.hash = '#/checkout';
    });
  }

  // Review Form toggle & submission
  const toggleReviewBtn = document.getElementById('toggle-review-form-btn');
  const reviewFormContainer = document.getElementById('product-review-form-container');
  const reviewForm = document.getElementById('submit-review-form');

  if (toggleReviewBtn && reviewFormContainer) {
    toggleReviewBtn.addEventListener('click', () => {
      reviewFormContainer.classList.toggle('hidden');
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('review-name').value;
      const rating = parseInt(document.getElementById('review-rating').value, 10);
      const comment = document.getElementById('review-comment').value;

      product.reviews.unshift({
        author: author,
        rating: rating,
        date: 'Today',
        comment: comment
      });

      store.showToast('Thank you! Your verified patron review has been recorded.', 'success');
      reviewForm.reset();
      reviewFormContainer.classList.add('hidden');

      const reviewsList = document.getElementById('reviews-list');
      if (reviewsList) {
        reviewsList.innerHTML = product.reviews.map(rev => `
          <div class="py-6 first:pt-4">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-[#111]">${rev.author}</span>
                <span class="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">Verified Patron</span>
              </div>
              <span class="text-xs text-[#737373]">${rev.date}</span>
            </div>
            <div class="flex text-amber-500 mb-2">
              ${[...Array(rev.rating)].map(() => `<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>`).join('')}
            </div>
            <p class="text-xs text-[#444] leading-relaxed">${rev.comment}</p>
          </div>
        `).join('');
        if (window.lucide) window.lucide.createIcons({ root: reviewsList });
      }
    });
  }
}
