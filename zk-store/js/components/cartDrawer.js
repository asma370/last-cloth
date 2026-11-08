// ZK STORE — Luxury Slide Cart Drawer Component
import { store } from '../store/state.js';

export function renderCartDrawer() {
  const isOpen = store.ui.isCartOpen;
  const items = store.getCartItems();
  const subtotal = store.getCartSubtotal();
  const shipping = store.getShippingFee();
  const discount = store.getCouponDiscount();
  const total = store.getCartTotal();
  const freeThreshold = 5000;
  const remainingForFree = Math.max(0, freeThreshold - subtotal);
  const percentFilled = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  return `
    <div id="cart-drawer-backdrop" class="drawer-backdrop ${isOpen ? 'active' : ''}">
      <div class="slide-drawer">
        <!-- Header -->
        <div class="p-6 border-b border-[#E8E4DC] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="font-serif text-xl tracking-[0.16em] uppercase font-semibold text-[#111111]">Shopping Bag</span>
            <span class="text-xs text-[#737373]">(${store.getCartCount()} items)</span>
          </div>
          <button id="close-cart-btn" class="p-1.5 text-[#111111] hover:opacity-60 transition-opacity" aria-label="Close cart">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Free Shipping Progress Tracker -->
        <div class="bg-[#F7F5F0] px-6 py-3 border-b border-[#E8E4DC]">
          <div class="text-[11px] font-medium tracking-wide text-[#111111] mb-1.5">
            ${subtotal >= freeThreshold ? `
              <span class="text-emerald-800 font-semibold flex items-center gap-1">
                <i data-lucide="check" class="w-3.5 h-3.5"></i> Complimentary Express Shipping Unlocked across Pakistan!
              </span>
            ` : `
              Add <span class="font-bold">Rs. ${remainingForFree.toLocaleString('en-PK')}</span> more for Free Shipping
            `}
          </div>
          <div class="shipping-bar-track">
            <div class="shipping-bar-fill" style="width: ${percentFilled}%;"></div>
          </div>
        </div>

        <!-- Cart Items List / Empty State -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          ${items.length === 0 ? `
            <div class="h-full flex flex-col items-center justify-center text-center py-16">
              <div class="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#737373] mb-4">
                <i data-lucide="shopping-bag" class="w-8 h-8"></i>
              </div>
              <h4 class="font-serif text-xl text-[#111111] mb-2 font-medium">Your Shopping Bag is Empty</h4>
              <p class="text-xs text-[#737373] max-w-xs mb-6">
                Discover modern sartorial excellence with our latest ready-to-wear pieces.
              </p>
              <div class="flex gap-3">
                <a href="#/men" class="btn-primary text-xs py-2.5 px-4 drawer-close-action">Shop Men</a>
                <a href="#/women" class="btn-outline text-xs py-2.5 px-4 drawer-close-action">Shop Women</a>
              </div>
            </div>
          ` : `
            <div class="divide-y divide-[#E8E4DC]">
              ${items.map((item, index) => `
                <div class="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <!-- Thumbnail -->
                  <div class="w-20 h-24 bg-[#F7F5F0] flex-shrink-0 overflow-hidden relative">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                  </div>

                  <!-- Details -->
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <div class="flex items-start justify-between gap-2">
                        <h4 class="font-sans text-xs font-semibold text-[#111111] line-clamp-1">
                          <a href="#/product/${item.productId}" class="drawer-close-action hover:underline">${item.name}</a>
                        </h4>
                        <button class="cart-remove-btn text-[#737373] hover:text-[#111111] transition-colors p-0.5" data-index="${index}" title="Remove item">
                          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                      </div>

                      <div class="text-[11px] text-[#737373] flex items-center gap-3 mt-1">
                        <span>Color: <strong>${item.color}</strong></span>
                        <span>Size: <strong>${item.size}</strong></span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between mt-2 pt-1">
                      <!-- Quantity Stepper -->
                      <div class="flex items-center border border-[#E8E4DC]">
                        <button class="cart-qty-minus w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-100 text-[#111]" data-index="${index}">-</button>
                        <span class="w-7 text-center text-xs font-semibold">${item.quantity}</span>
                        <button class="cart-qty-plus w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-100 text-[#111]" data-index="${index}">+</button>
                      </div>

                      <!-- Line Price -->
                      <span class="text-xs font-semibold text-[#111111]">
                        Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}
                      </span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Footer / Checkout Area -->
        ${items.length > 0 ? `
          <div class="p-6 border-t border-[#E8E4DC] bg-white space-y-4">
            
            <!-- Promo Voucher Input -->
            <div class="flex gap-2">
              <input 
                type="text" 
                id="cart-coupon-input" 
                placeholder="PROMO CODE (e.g. ZK10)" 
                value="${store.coupon ? store.coupon.code : ''}"
                ${store.coupon ? 'disabled' : ''}
                class="flex-1 px-3 py-2 border border-[#E8E4DC] text-xs uppercase tracking-wider focus:outline-none focus:border-black"
              />
              ${store.coupon ? `
                <button id="cart-remove-coupon-btn" class="bg-gray-200 text-[#111] text-[11px] font-semibold px-3 py-2 uppercase tracking-wider">
                  Remove
                </button>
              ` : `
                <button id="cart-apply-coupon-btn" class="bg-black text-white text-[11px] font-semibold px-4 py-2 uppercase tracking-wider hover:bg-black/80">
                  Apply
                </button>
              `}
            </div>
            ${store.coupon ? `
              <div class="text-[10px] text-emerald-700 font-medium tracking-wide">
                ${store.coupon.label} applied successfully.
              </div>
            ` : ''}

            <!-- Subtotals -->
            <div class="space-y-1.5 text-xs">
              <div class="flex justify-between text-[#737373]">
                <span>Subtotal</span>
                <span>Rs. ${subtotal.toLocaleString('en-PK')}</span>
              </div>
              ${discount > 0 ? `
                <div class="flex justify-between text-emerald-700 font-medium">
                  <span>Privilege Discount</span>
                  <span>- Rs. ${discount.toLocaleString('en-PK')}</span>
                </div>
              ` : ''}
              <div class="flex justify-between text-[#737373]">
                <span>Delivery (Pakistan)</span>
                <span>${shipping === 0 ? 'Complimentary' : `Rs. ${shipping}`}</span>
              </div>
              <div class="flex justify-between text-sm font-semibold text-[#111111] pt-2 border-t border-[#E8E4DC]">
                <span>Grand Total</span>
                <span>Rs. ${total.toLocaleString('en-PK')}</span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="space-y-2 pt-2">
              <a href="#/checkout" class="btn-primary w-full py-3.5 text-xs text-center drawer-close-action font-semibold tracking-luxury">
                Proceed to Checkout &rarr;
              </a>
              <a href="#/cart" class="btn-outline w-full py-2.5 text-xs text-center drawer-close-action font-medium">
                View Full Shopping Bag
              </a>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function bindCartDrawerEvents() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (!backdrop) return;

  // Close triggers
  const closeBtn = document.getElementById('close-cart-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.toggleCart(false));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.toggleCart(false);
    }
  });

  const closeActions = backdrop.querySelectorAll('.drawer-close-action');
  closeActions.forEach(a => {
    a.addEventListener('click', () => store.toggleCart(false));
  });

  // Quantity and remove buttons
  const minusBtns = backdrop.querySelectorAll('.cart-qty-minus');
  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current - 1);
    });
  });

  const plusBtns = backdrop.querySelectorAll('.cart-qty-plus');
  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current + 1);
    });
  });

  const removeBtns = backdrop.querySelectorAll('.cart-remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      store.removeFromCart(idx);
    });
  });

  // Coupon
  const applyCouponBtn = document.getElementById('cart-apply-coupon-btn');
  const removeCouponBtn = document.getElementById('cart-remove-coupon-btn');
  const couponInput = document.getElementById('cart-coupon-input');

  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      store.applyCoupon(couponInput.value);
    });
  }

  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      store.removeCoupon();
    });
  }
}
