// ZK STORE — Shipping & Returns Policy Page

export function renderShippingPage() {
  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          LOGISTICS & ATELIER COMMITMENT
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Shipping & Returns Policy
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          Complimentary nationwide express delivery on qualifying orders and seamless 14-day exchanges.
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-10 text-xs text-[#555] leading-relaxed">
        
        <!-- Section 1 -->
        <div class="bg-white p-8 border border-[#E8E4DC] space-y-3">
          <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider">
            1. Express Delivery Network across Pakistan
          </h2>
          <p>
            All ZK STORE parcels are dispatched from our centralized fulfillment atelier in Karachi using TCS Express Prime. Each package is double-boxed in our bespoke matte black rigid packaging with luxury tissue wrap and signature fragrance seal.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-black font-semibold">
            <div class="bg-[#F7F5F0] p-4 border border-[#E8E4DC]">
              <span class="block text-xs uppercase text-[#737373] font-normal">Karachi Metropolitan</span>
              <span class="text-sm">24 to 48 Hours</span>
            </div>
            <div class="bg-[#F7F5F0] p-4 border border-[#E8E4DC]">
              <span class="block text-xs uppercase text-[#737373] font-normal">Lahore & Islamabad</span>
              <span class="text-sm">2 to 3 Business Days</span>
            </div>
            <div class="bg-[#F7F5F0] p-4 border border-[#E8E4DC]">
              <span class="block text-xs uppercase text-[#737373] font-normal">Nationwide Express</span>
              <span class="text-sm">3 to 4 Business Days</span>
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="bg-white p-8 border border-[#E8E4DC] space-y-3">
          <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider">
            2. Shipping Rates & Complimentary Threshold
          </h2>
          <p>
            Orders with a subtotal of <strong>Rs. 5,000 or greater</strong> qualify automatically for <strong>Complimentary Express Shipping</strong> anywhere across Pakistan. For orders below Rs. 5,000, a standardized courier fee of Rs. 350 applies.
          </p>
          <p>
            International delivery across the GCC, United Kingdom, North America, and Europe is available by special arrangement with DHL Express. Contact our VIP concierge for quotes and duties calculation.
          </p>
        </div>

        <!-- Section 3 -->
        <div id="returns" class="bg-white p-8 border border-[#E8E4DC] space-y-3">
          <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider">
            3. 14-Day Atelier Exchange Privilege
          </h2>
          <p>
            We take pride in every stitch. If a garment does not fit as intended or does not meet your expectations, you may initiate an exchange within <strong>14 days of receipt</strong>.
          </p>
          <div class="space-y-1.5 pl-4 list-disc text-[#444]">
            <p>&bull; Garments must remain unworn, unwashed, and with all atelier security tags intact.</p>
            <p>&bull; Original luxury presentation box and tissue packaging must be preserved.</p>
            <p>&bull; Our concierge arranges reverse pickup at your address or provides a drop-off voucher at any authorized courier center.</p>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function bindShippingPageEvents() {}
