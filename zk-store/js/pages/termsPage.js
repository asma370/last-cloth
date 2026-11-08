// ZK STORE — Terms & Conditions Page

export function renderTermsPage() {
  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          ATELIER SALE CONDITIONS & LEGAL
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Terms & Conditions
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          Terms governing the purchase, delivery, and ownership of garments from ZK STORE.
        </p>
      </div>

      <!-- Terms Text Content -->
      <div class="bg-white p-8 sm:p-12 border border-[#E8E4DC] space-y-8 text-xs text-[#555] leading-relaxed">
        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">1. Atelier Agreement</h2>
          <p>
            By accessing the ZK STORE platform or confirming a purchase, you agree to be bound by these Terms & Conditions. All orders placed are subject to stock availability and validation of client coordinates.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">2. Pricing & Currency</h2>
          <p>
            All prices listed on ZK STORE are quoted in Pakistani Rupees (PKR) and include all applicable local manufacturing taxes. In the event of a typographical pricing error, the atelier reserves the right to notify the client and either re-confirm the order at the corrected price or void the transaction.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">3. Product Descriptions & Photography</h2>
          <p>
            We strive to present garment colors, cuts, and textile textures with absolute chromatic accuracy. However, slight variations in shade may occur depending on individual monitor calibrations and ambient lighting conditions.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">4. Intellectual Property</h2>
          <p>
            All typographic layouts, garment patterns, photography, brand hallmarks, and digital assets associated with ZK STORE are the exclusive intellectual property of ZK STORE Haute Atelier Ltd. Unauthorized commercial reproduction is strictly prohibited.
          </p>
        </div>
      </div>

    </div>
  `;
}

export function bindTermsPageEvents() {}
