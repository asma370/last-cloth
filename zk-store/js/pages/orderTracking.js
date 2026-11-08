// ZK STORE — Real-Time Order Tracking Interface
import { store } from '../store/state.js';

export function renderOrderTrackingPage(queryParams = {}) {
  const queryId = queryParams.orderId || 'ZK-89421';
  const order = store.getOrderById(queryId);

  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-4">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          LOGISTICS & ATELIER DISPATCH
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Order Tracking
        </h1>
        <p class="text-xs text-[#737373] max-w-md mx-auto">
          Enter your ZK STORE order number (e.g. <strong>ZK-89421</strong>) or TCS tracking code to review live courier status.
        </p>

        <!-- Search Tracker Input -->
        <form id="track-order-form" class="max-w-md mx-auto flex gap-2 pt-2">
          <input 
            type="text" 
            id="track-order-input" 
            value="${queryId}" 
            placeholder="e.g. ZK-89421" 
            required 
            class="flex-1 bg-white border border-[#E8E4DC] px-4 py-3 text-xs uppercase tracking-wider focus:outline-none focus:border-black font-semibold"
          />
          <button type="submit" class="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black/80">
            Track
          </button>
        </form>
      </div>

      ${!order ? `
        <div class="p-12 text-center bg-[#F7F5F0] border border-[#E8E4DC] max-w-lg mx-auto">
          <i data-lucide="package-search" class="w-10 h-10 text-[#737373] mx-auto mb-3"></i>
          <h3 class="font-serif text-xl font-medium text-black mb-1">Order Not Found</h3>
          <p class="text-xs text-[#737373] mb-4">We could not find an order matching "${queryId}". Please verify your reference number or sign in to your patron account.</p>
          <a href="#/account" class="btn-primary text-xs py-2 px-5">View My Orders</a>
        </div>
      ` : `
        <!-- Order Tracking Card -->
        <div class="bg-white border border-[#E8E4DC] shadow-md p-6 sm:p-10 space-y-10">
          
          <!-- Order Headline Meta -->
          <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8E4DC] gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h2 class="font-serif text-2xl font-bold text-black">${order.id}</h2>
                <span class="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  ${order.status}
                </span>
              </div>
              <p class="text-xs text-[#737373] mt-1">
                Placed on ${order.date} &bull; Estimated Delivery: <strong>${order.estimatedDelivery}</strong>
              </p>
            </div>

            <div class="text-left md:text-right text-xs text-[#555]">
              <p>Carrier: <strong>${order.carrier}</strong></p>
              <p>Tracking Code: <strong class="text-black font-mono">${order.trackingNumber}</strong></p>
            </div>
          </div>

          <!-- Visual Animated Progress Stepper -->
          <div class="py-4">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-8">Live Progress Timeline</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              ${order.steps.map((step, idx) => `
                <div class="flex md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-3 relative">
                  
                  <!-- Circle Indicator -->
                  <div class="stepper-circle ${step.completed ? 'completed' : (step.current ? 'active animate-pulse' : '')} z-10">
                    ${step.completed ? '<i data-lucide="check" class="w-4 h-4"></i>' : (idx + 1)}
                  </div>

                  <!-- Text Details -->
                  <div>
                    <h4 class="text-xs font-bold text-black leading-tight">${step.title}</h4>
                    <p class="text-[11px] text-[#737373] mt-0.5">${step.date}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Order Summary & Shipping Address Details Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E8E4DC]">
            
            <!-- Shipping Address -->
            <div class="bg-[#F7F5F0] p-6 border border-[#E8E4DC] space-y-2 text-xs">
              <h4 class="font-serif text-base font-semibold text-black uppercase tracking-wider mb-2">Delivery Destination</h4>
              <p class="font-bold text-black">${order.shippingAddress.fullName}</p>
              <p class="text-[#555]">${order.shippingAddress.address}</p>
              <p class="text-[#555]">${order.shippingAddress.city}, ${order.shippingAddress.postalCode}</p>
              <p class="text-[#555]">${order.shippingAddress.country}</p>
              <p class="text-[#737373] pt-1">Phone: ${order.shippingAddress.phone}</p>
              <p class="text-[#737373]">Payment: <strong>${order.paymentMethod}</strong></p>
            </div>

            <!-- Ordered Items Showcase -->
            <div class="space-y-3">
              <h4 class="font-serif text-base font-semibold text-black uppercase tracking-wider mb-2">Garments in Parcel (${order.items.length})</h4>
              <div class="divide-y divide-[#E8E4DC] max-h-56 overflow-y-auto no-scrollbar">
                ${order.items.map(item => `
                  <div class="py-2.5 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-3">
                      <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover bg-[#F7F5F0] border border-[#E8E4DC]">
                      <div>
                        <h5 class="font-semibold text-black line-clamp-1">${item.name}</h5>
                        <p class="text-[11px] text-[#737373]">${item.color} &bull; Size ${item.size} &bull; Qty ${item.quantity}</p>
                      </div>
                    </div>
                    <span class="font-bold text-black">Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}</span>
                  </div>
                `).join('')}
              </div>

              <div class="flex justify-between items-center text-sm font-bold text-black pt-3 border-t border-[#E8E4DC]">
                <span>Total Amount</span>
                <span>Rs. ${order.total.toLocaleString('en-PK')}</span>
              </div>
            </div>

          </div>

          <!-- Help footer -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] border-t border-[#E8E4DC] gap-3">
            <span>Questions regarding this parcel? Contact our VIP logistics concierge.</span>
            <a href="https://wa.me/923001234567" target="_blank" class="text-black font-semibold hover:underline flex items-center gap-1">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp Concierge Direct
            </a>
          </div>

        </div>
      `}

    </div>
  `;
}

export function bindOrderTrackingPageEvents() {
  const form = document.getElementById('track-order-form');
  const input = document.getElementById('track-order-input');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = input.value.trim().toUpperCase();
      if (id) {
        window.location.hash = `#/order-tracking?orderId=${encodeURIComponent(id)}`;
      }
    });
  }
}
