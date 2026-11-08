// ZK STORE — Privacy Policy Page

export function renderPrivacyPage() {
  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          TRUST & PATRON INTEGRITY
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Privacy Policy
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          How ZK STORE collects, safeguards, and respects your personal client data.
        </p>
      </div>

      <!-- Policy Text Content -->
      <div class="bg-white p-8 sm:p-12 border border-[#E8E4DC] space-y-8 text-xs text-[#555] leading-relaxed">
        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">1. Overview of Client Privacy</h2>
          <p>
            ZK STORE Haute Atelier Ltd. respects your fundamental right to digital privacy. We operate on a principle of absolute confidentiality. We do not sell, rent, or trade customer contact details, sizing data, or purchase histories with third-party advertising networks.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">2. Information We Collect</h2>
          <p>
            When you place an order or create a patron account, we collect:
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-[#444]">
            <li>Full name and personal contact coordinates (telephone number, email address).</li>
            <li>Physical delivery destination and billing information.</li>
            <li>Purchase history, sizing selections, and wishlist preferences.</li>
            <li>Digital identifiers (IP address, browser session identifiers) utilized strictly for website performance and fraud prevention.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">3. 256-Bit SSL Security Standards</h2>
          <p>
            All communications between your device and ZK STORE are encrypted using industry-standard TLS 1.3 / 256-Bit SSL protocols. Payment credentials entered on our checkout platform are processed via compliant encrypted channels.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">4. Your Data Rights</h2>
          <p>
            Under our patron charter, you hold the right to request a complete copy of all data stored regarding your account, or to request permanent erasure of your profile. Inquiries may be directed to <span class="text-black font-semibold">concierge@zkstore.luxury</span>.
          </p>
        </div>
      </div>

    </div>
  `;
}

export function bindPrivacyPageEvents() {}
