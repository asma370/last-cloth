// ZK STORE — Luxury 2-Step Atelier Checkout Page
import { store } from '../store/state.js';

export function renderCheckoutPage() {
  const items = store.getCartItems();
  const subtotal = store.getCartSubtotal();
  const shipping = store.getShippingFee();
  const couponDiscount = store.getCouponDiscount();
  const total = store.getCartTotal();
  const user = store.user;

  if (items.length === 0) {
    return `
      <div class="max-w-[800px] mx-auto px-6 py-24 text-center">
        <div class="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#737373] mx-auto mb-4">
          <i data-lucide="shopping-bag" class="w-8 h-8"></i>
        </div>
        <h2 class="font-serif text-3xl text-[#111111] mb-2 font-medium">Your Shopping Bag is Empty</h2>
        <p class="text-xs text-[#737373] mb-6">Please add at least one garment to your shopping bag before proceeding to checkout.</p>
        <a href="#/categories" class="btn-primary text-xs py-3 px-8">Discover Collections</a>
      </div>
    `;
  }

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-10 pb-24">
      
      <!-- Checkout Header -->
      <div class="border-b border-[#E8E4DC] pb-6 flex items-center justify-between">
        <div>
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
            SECURE ATELIER ENCRYPTION
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl font-medium text-[#111111] uppercase tracking-[0.08em]">
            Checkout & Order Dispatch
          </h1>
        </div>
        <div class="flex items-center gap-2 text-xs text-[#737373]">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-700"></i>
          <span>256-Bit SSL Safe</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Shipping & Payment Form (7 Cols) -->
        <div class="lg:col-span-7">
          <form id="checkout-main-form" class="space-y-10">
            
            <!-- Step 1: Client Information -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="stepper-circle active">1</span>
                <h3 class="font-serif text-xl font-medium text-[#111]">Client Contact & Identification</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Full Name <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="checkout-name" 
                    required 
                    value="${user?.name || ''}"
                    placeholder="e.g. Daniyal Ahmed" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Phone (for Delivery Courier) <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="checkout-phone" 
                    required 
                    value="${user?.phone || ''}"
                    placeholder="0300 1234567" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Email Address (for Order Tracking Updates) <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="checkout-email" 
                    required 
                    value="${user?.email || ''}"
                    placeholder="daniyal.ahmed@example.com" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>
              </div>
            </div>

            <!-- Step 2: Shipping Destination -->
            <div class="space-y-4 pt-4 border-t border-[#E8E4DC]">
              <div class="flex items-center gap-3">
                <span class="stepper-circle active">2</span>
                <h3 class="font-serif text-xl font-medium text-[#111]">Shipping Destination (Pakistan & International)</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Complete Street Address & Apartment/House # <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="checkout-address" 
                    required 
                    value="${user?.address || ''}"
                    placeholder="House / Flat #, Street, Phase / Block, Sector" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    City <span class="text-rose-600">*</span>
                  </label>
                  <select id="checkout-city" required class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium">
                    <option value="Karachi" ${user?.city === 'Karachi' ? 'selected' : ''}>Karachi</option>
                    <option value="Lahore" ${user?.city === 'Lahore' ? 'selected' : ''}>Lahore</option>
                    <option value="Islamabad" ${user?.city === 'Islamabad' ? 'selected' : ''}>Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Postal Code
                  </label>
                  <input 
                    type="text" 
                    id="checkout-postal" 
                    value="${user?.postalCode || '75500'}"
                    placeholder="e.g. 75500" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Country
                  </label>
                  <input 
                    type="text" 
                    id="checkout-country" 
                    value="Pakistan" 
                    readonly 
                    class="w-full bg-gray-50 border border-[#E8E4DC] px-4 py-3 text-xs text-[#555] font-medium cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <!-- Step 3: Payment Method -->
            <div class="space-y-4 pt-4 border-t border-[#E8E4DC]">
              <div class="flex items-center gap-3">
                <span class="stepper-circle active">3</span>
                <h3 class="font-serif text-xl font-medium text-[#111]">Payment Method</h3>
              </div>

              <div class="space-y-3 pt-2">
                
                <!-- Option 1: Cash on Delivery -->
                <label class="flex items-start gap-3 p-4 border border-black bg-[#F7F5F0] cursor-pointer transition-colors block">
                  <input type="radio" name="paymentMethod" value="Cash on Delivery" checked class="mt-1 text-black">
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-black uppercase tracking-wider">Cash on Delivery (COD)</span>
                      <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Recommended</span>
                    </div>
                    <p class="text-xs text-[#555] mt-1">
                      Pay with cash when TCS Express delivers your package to your doorstep. Complimentary on orders over Rs. 5,000.
                    </p>
                  </div>
                </label>

                <!-- Option 2: Bank Transfer -->
                <label class="flex items-start gap-3 p-4 border border-[#E8E4DC] hover:border-black bg-white cursor-pointer transition-colors block">
                  <input type="radio" name="paymentMethod" value="Bank Transfer" class="mt-1 text-black">
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-black uppercase tracking-wider">Direct Bank Transfer</span>
                      <span class="text-[10px] text-[#737373]">Meezan / SCB</span>
                    </div>
                    <p class="text-xs text-[#555] mt-1">
                      Transfer directly into ZK STORE Atelier corporate account. Official IBAN & receipt upload link provided on order placement.
                    </p>
                  </div>
                </label>

                <!-- Option 3: Card Payment (Gateway Note) -->
                <label class="flex items-start gap-3 p-4 border border-[#E8E4DC] hover:border-black bg-white cursor-pointer transition-colors block">
                  <input type="radio" name="paymentMethod" value="Card Payment" class="mt-1 text-black">
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-black uppercase tracking-wider">Credit / Debit Card</span>
                      <span class="text-[10px] text-[#737373]">Visa / Mastercard</span>
                    </div>
                    <p class="text-xs text-[#555] mt-1">
                      Safe 256-Bit SSL card simulation. Encrypted test sandbox without live gateway charges.
                    </p>
                  </div>
                </label>

              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-6">
              <button type="submit" id="place-order-submit-btn" class="btn-primary w-full py-4 text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
                Confirm & Place Order &rarr;
              </button>
              <p class="text-[10px] text-center text-[#737373] mt-2">
                By clicking Confirm, you agree to ZK STORE Terms of Atelier Sale and 14-day exchange privilege.
              </p>
            </div>

          </form>
        </div>

        <!-- Right: Order Items & Pricing Summary (5 Cols) -->
        <div class="lg:col-span-5">
          <div class="bg-[#F7F5F0] p-6 sm:p-8 border border-[#E8E4DC] space-y-6 sticky top-28">
            <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
              Your Garments (${store.getCartCount()})
            </h3>

            <!-- Item Mini List -->
            <div class="divide-y divide-[#E8E4DC] max-h-72 overflow-y-auto no-scrollbar">
              ${items.map(item => `
                <div class="py-3 flex gap-3 text-xs">
                  <div class="w-14 h-18 bg-white flex-shrink-0 overflow-hidden relative border border-[#E8E4DC]">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    <span class="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      ${item.quantity}
                    </span>
                  </div>
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 class="font-semibold text-[#111] line-clamp-1">${item.name}</h4>
                      <p class="text-[11px] text-[#737373]">${item.color} &bull; Size ${item.size}</p>
                    </div>
                    <span class="font-semibold text-black">Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Cost Summary -->
            <div class="space-y-2 text-xs border-t border-[#E8E4DC] pt-4">
              <div class="flex justify-between text-[#555]">
                <span>Subtotal</span>
                <span>Rs. ${subtotal.toLocaleString('en-PK')}</span>
              </div>
              ${couponDiscount > 0 ? `
                <div class="flex justify-between text-emerald-800 font-medium">
                  <span>Privilege Voucher (${store.coupon?.code})</span>
                  <span>- Rs. ${couponDiscount.toLocaleString('en-PK')}</span>
                </div>
              ` : ''}
              <div class="flex justify-between text-[#555]">
                <span>Delivery (Pakistan)</span>
                <span>${shipping === 0 ? '<strong class="text-emerald-800">Complimentary</strong>' : `Rs. ${shipping}`}</span>
              </div>
              <div class="flex justify-between text-base font-bold text-[#111] pt-3 border-t border-[#E8E4DC]">
                <span>Grand Total</span>
                <span>Rs. ${total.toLocaleString('en-PK')}</span>
              </div>
            </div>

            <!-- Reassurance Box -->
            <div class="p-3 bg-white border border-[#E8E4DC] text-[11px] text-[#555] space-y-1">
              <div class="font-semibold text-[#111] flex items-center gap-1">
                <i data-lucide="package-check" class="w-3.5 h-3.5 text-black"></i> Atelier Quality Assured
              </div>
              <p>Every piece undergoes hand inspection and pressing before dispatch with TCS Express Prime.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function bindCheckoutPageEvents() {
  const form = document.getElementById('checkout-main-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const email = document.getElementById('checkout-email').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const city = document.getElementById('checkout-city').value;
    const postalCode = document.getElementById('checkout-postal').value.trim();
    const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'Cash on Delivery';

    if (!fullName || !phone || !email || !address) {
      alert('Please fill in all required shipping fields.');
      return;
    }

    const order = store.createOrder({
      fullName,
      phone,
      email,
      address,
      city,
      postalCode,
      country: 'Pakistan',
      paymentMethod
    });

    // Fire Confetti if available
    if (window.confetti) {
      window.confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }

    store.showToast(`Order Confirmed! Your tracking number is ${order.id}`, 'success');
    window.location.hash = `#/order-tracking?orderId=${order.id}`;
  });
}
