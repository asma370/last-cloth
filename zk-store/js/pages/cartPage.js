// ZK STORE — Dedicated Full Shopping Bag Page
import { store } from '../store/state.js';

export function renderCartPage() {
  const items = store.getCartItems();
  const subtotal = store.getCartSubtotal();
  const originalTotal = store.getCartOriginalTotal();
  const savings = store.getCartSavings();
  const shipping = store.getShippingFee();
  const couponDiscount = store.getCouponDiscount();
  const total = store.getCartTotal();
  const freeThreshold = 5000;
  const remainingForFree = Math.max(0, freeThreshold - subtotal);
  const percentFilled = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-10 pb-24">
      
      <!-- Page Header -->
      <div class="border-b border-[#E8E4DC] pb-6">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
          ATELIER CHECKOUT PREPARATION
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111111] uppercase tracking-[0.08em]">
          Your Shopping Bag
        </h1>
      </div>

      ${items.length === 0 ? `
        <div class="max-w-md mx-auto text-center py-20 bg-[#F7F5F0] p-12 border border-[#E8E4DC]">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#737373] mx-auto mb-4 shadow-sm">
            <i data-lucide="shopping-bag" class="w-8 h-8"></i>
          </div>
          <h3 class="font-serif text-2xl text-[#111] mb-2 font-medium">Your Bag is Currently Empty</h3>
          <p class="text-xs text-[#737373] mb-6 leading-relaxed">
            You have not placed any garments into your shopping bag yet. Explore our latest arrivals to discover tailored luxury.
          </p>
          <div class="flex justify-center gap-4">
            <a href="#/men" class="btn-primary text-xs py-3 px-6">Explore Men</a>
            <a href="#/women" class="btn-outline text-xs py-3 px-6">Explore Women</a>
          </div>
        </div>
      ` : `
        <!-- Free Shipping Tracker -->
        <div class="bg-[#F7F5F0] p-5 border border-[#E8E4DC]">
          <div class="flex justify-between items-center text-xs text-[#111] font-medium mb-2">
            <span>
              ${subtotal >= freeThreshold ? `
                <strong class="text-emerald-800 flex items-center gap-1.5 font-bold">
                  <i data-lucide="check-circle" class="w-4 h-4"></i> Complimentary Express Delivery Unlocked Across Pakistan
                </strong>
              ` : `
                Add <strong>Rs. ${remainingForFree.toLocaleString('en-PK')}</strong> more to unlock Complimentary Delivery
              `}
            </span>
            <span class="text-[#737373]">${percentFilled}%</span>
          </div>
          <div class="shipping-bar-track">
            <div class="shipping-bar-fill" style="width: ${percentFilled}%;"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Items Table (8 Cols) -->
          <div class="lg:col-span-8">
            <div class="divide-y divide-[#E8E4DC]">
              
              <!-- Table Header -->
              <div class="hidden sm:grid grid-cols-12 pb-4 text-xs font-semibold tracking-wider uppercase text-[#737373]">
                <div class="col-span-6">Garment</div>
                <div class="col-span-2 text-center">Quantity</div>
                <div class="col-span-2 text-right">Price</div>
                <div class="col-span-2 text-right">Subtotal</div>
              </div>

              <!-- Product Rows -->
              ${items.map((item, index) => `
                <div class="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <!-- Product Image & Meta (6 Cols) -->
                  <div class="sm:col-span-6 flex gap-4">
                    <a href="#/product/${item.productId}" class="w-24 h-32 bg-[#F7F5F0] flex-shrink-0 overflow-hidden block">
                      <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    </a>
                    <div class="flex flex-col justify-between py-1">
                      <div>
                        <span class="text-[10px] tracking-widest uppercase font-semibold text-[#737373]">${item.gender} &bull; ${item.category}</span>
                        <h3 class="font-sans text-sm font-semibold text-[#111111] hover:underline">
                          <a href="#/product/${item.productId}">${item.name}</a>
                        </h3>
                        <div class="flex items-center gap-3 text-xs text-[#555] mt-1.5">
                          <span>Color: <strong>${item.color}</strong></span>
                          <span>Size: <strong>${item.size}</strong></span>
                        </div>
                      </div>
                      <button class="cart-page-remove-btn text-xs text-rose-700 hover:text-black flex items-center gap-1 w-max transition-colors pt-2" data-index="${index}">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove piece
                      </button>
                    </div>
                  </div>

                  <!-- Quantity Stepper (2 Cols) -->
                  <div class="sm:col-span-2 flex justify-start sm:justify-center">
                    <div class="flex items-center border border-[#E8E4DC] bg-white">
                      <button class="cart-page-qty-minus w-8 h-8 flex items-center justify-center text-xs hover:bg-gray-100" data-index="${index}">-</button>
                      <span class="w-8 text-center text-xs font-bold">${item.quantity}</span>
                      <button class="cart-page-qty-plus w-8 h-8 flex items-center justify-center text-xs hover:bg-gray-100" data-index="${index}">+</button>
                    </div>
                  </div>

                  <!-- Price Each (2 Cols) -->
                  <div class="sm:col-span-2 text-left sm:text-right text-xs">
                    <div class="font-semibold text-[#111]">Rs. ${item.price.toLocaleString('en-PK')}</div>
                    ${item.originalPrice > item.price ? `
                      <div class="price-original text-[11px]">Rs. ${item.originalPrice.toLocaleString('en-PK')}</div>
                    ` : ''}
                  </div>

                  <!-- Line Total (2 Cols) -->
                  <div class="sm:col-span-2 text-left sm:text-right text-sm font-bold text-[#111]">
                    Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}
                  </div>
                </div>
              `).join('')}

            </div>

            <!-- Back to shopping link -->
            <div class="pt-8 border-t border-[#E8E4DC] flex justify-between items-center">
              <a href="#/categories" class="text-xs font-semibold uppercase tracking-wider text-black hover:underline flex items-center gap-1.5">
                &larr; Continue Exploring Collections
              </a>
              <button id="cart-clear-all-btn" class="text-xs text-[#737373] hover:text-rose-700 transition-colors">
                Clear Shopping Bag
              </button>
            </div>
          </div>

          <!-- Order Summary Sidebar (4 Cols) -->
          <div class="lg:col-span-4">
            <div class="bg-[#F7F5F0] p-6 sm:p-8 border border-[#E8E4DC] space-y-6 sticky top-28">
              <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
                Order Summary
              </h3>

              <!-- Promo Code Input -->
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-2">Promotional Voucher</label>
                <div class="flex gap-2">
                  <input 
                    type="text" 
                    id="cart-page-coupon-input" 
                    placeholder="ENTER CODE (e.g. ZK10)" 
                    value="${store.coupon ? store.coupon.code : ''}"
                    ${store.coupon ? 'disabled' : ''}
                    class="flex-1 bg-white border border-[#E8E4DC] px-3 py-2.5 text-xs uppercase tracking-wider focus:outline-none focus:border-black"
                  />
                  ${store.coupon ? `
                    <button id="cart-page-remove-coupon-btn" class="bg-gray-200 text-[#111] text-[11px] font-semibold px-3 py-2.5 uppercase">
                      Remove
                    </button>
                  ` : `
                    <button id="cart-page-apply-coupon-btn" class="bg-black text-white text-[11px] font-semibold px-4 py-2.5 uppercase hover:bg-black/80">
                      Apply
                    </button>
                  `}
                </div>
                ${store.coupon ? `
                  <p class="text-[11px] text-emerald-800 font-medium mt-1">${store.coupon.label} applied.</p>
                ` : `
                  <p class="text-[10px] text-[#737373] mt-1">Try code <span class="font-bold text-black">ZKLUXURY10</span> for 10% off</p>
                `}
              </div>

              <!-- Cost breakdown -->
              <div class="space-y-3 text-xs border-t border-[#E8E4DC] pt-4">
                <div class="flex justify-between text-[#555]">
                  <span>Original Atelier Total</span>
                  <span class="price-original">Rs. ${originalTotal.toLocaleString('en-PK')}</span>
                </div>
                ${savings > 0 ? `
                  <div class="flex justify-between text-emerald-800 font-medium">
                    <span>Catalog Savings</span>
                    <span>- Rs. ${savings.toLocaleString('en-PK')}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between text-[#555]">
                  <span>Subtotal</span>
                  <span>Rs. ${subtotal.toLocaleString('en-PK')}</span>
                </div>
                ${couponDiscount > 0 ? `
                  <div class="flex justify-between text-emerald-800 font-medium">
                    <span>Voucher Discount</span>
                    <span>- Rs. ${couponDiscount.toLocaleString('en-PK')}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between text-[#555]">
                  <span>Express Delivery (Pakistan)</span>
                  <span>${shipping === 0 ? '<strong class="text-emerald-800">Complimentary</strong>' : `Rs. ${shipping}`}</span>
                </div>
                <div class="flex justify-between text-base font-bold text-[#111] pt-3 border-t border-[#E8E4DC]">
                  <span>Estimated Total</span>
                  <span>Rs. ${total.toLocaleString('en-PK')}</span>
                </div>
                <p class="text-[10px] text-[#737373] pt-1">Inclusive of all local sales taxes & duty.</p>
              </div>

              <!-- Checkout Button -->
              <div class="pt-2">
                <a href="#/checkout" class="btn-primary w-full py-4 text-xs text-center font-bold tracking-[0.2em] uppercase shadow-lg">
                  Proceed to Checkout &rarr;
                </a>
              </div>

              <!-- Security seals -->
              <div class="pt-4 flex items-center justify-center gap-4 text-xs text-[#737373]">
                <span class="flex items-center gap-1"><i data-lucide="lock" class="w-3.5 h-3.5 text-black"></i> 256-Bit SSL</span>
                <span class="flex items-center gap-1"><i data-lucide="shield" class="w-3.5 h-3.5 text-black"></i> Atelier Guaranteed</span>
              </div>
            </div>
          </div>

        </div>
      `}

    </div>
  `;
}

export function bindCartPageEvents() {
  const minusBtns = document.querySelectorAll('.cart-page-qty-minus');
  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current - 1);
    });
  });

  const plusBtns = document.querySelectorAll('.cart-page-qty-plus');
  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current + 1);
    });
  });

  const removeBtns = document.querySelectorAll('.cart-page-remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      store.removeFromCart(idx);
    });
  });

  const clearBtn = document.getElementById('cart-clear-all-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you wish to empty your shopping bag?')) {
        store.clearCart();
      }
    });
  }

  const applyBtn = document.getElementById('cart-page-apply-coupon-btn');
  const removeCouponBtn = document.getElementById('cart-page-remove-coupon-btn');
  const couponInput = document.getElementById('cart-page-coupon-input');

  if (applyBtn && couponInput) {
    applyBtn.addEventListener('click', () => {
      store.applyCoupon(couponInput.value);
    });
  }

  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      store.removeCoupon();
    });
  }
}
