// ZK STORE — Frequently Asked Questions Page

export function renderFaqPage() {
  const faqs = [
    {
      category: 'Ordering & Authenticity',
      items: [
        {
          q: 'Are all garments authentically produced by ZK STORE?',
          a: 'Yes. Every garment bearing the ZK STORE hallmark is designed in-house and manufactured using custom-milled textiles, genuine French terry, and certified extra-long-staple pima or organic cottons. We do not use generic blank garments.'
        },
        {
          q: 'How do I know which size to choose?',
          a: 'Each piece features an Atelier Size Guide with exact chest, shoulder, waist, and length measurements in inches and centimeters. For our oversized streetwear tees and hoodies, we engineer an architectural drop-shoulder cut; ordering your true size yields the intended relaxed drape, while sizing down produces a tailored fit.'
        },
        {
          q: 'Can I cancel or modify an order after placing it?',
          a: 'Because our atelier immediately initiates hand-inspection and steam-pressing upon order confirmation, modifications must be communicated to our WhatsApp VIP concierge within 2 hours of placement.'
        }
      ]
    },
    {
      category: 'Shipping & Delivery',
      items: [
        {
          q: 'What are the delivery times within Pakistan?',
          a: 'For Karachi deliveries, orders typically arrive within 24 to 48 hours via TCS Express Prime. For Lahore, Islamabad, Rawalpindi, and other metropolitan centers, delivery takes 2 to 3 business days. Remote or regional destinations take 3 to 4 business days.'
        },
        {
          q: 'How does complimentary delivery work?',
          a: 'All orders with a subtotal exceeding Rs. 5,000 qualify automatically for Complimentary TCS Express Shipping anywhere across Pakistan. Orders below this threshold incur a flat delivery fee of Rs. 350.'
        },
        {
          q: 'Will I receive real-time tracking updates?',
          a: 'Yes. Immediately upon courier handoff, a tracking number is registered to your order. You can enter your Order ID (e.g. ZK-89421) into our live Order Tracking page at any time to monitor courier milestones.'
        }
      ]
    },
    {
      category: 'Payment Methods & Security',
      items: [
        {
          q: 'Is Cash on Delivery (COD) supported nationwide?',
          a: 'Yes, Cash on Delivery is supported across all cities and towns serviced by TCS Express across Pakistan. You simply hand cash to the courier upon parcel delivery.'
        },
        {
          q: 'What other payment methods are accepted?',
          a: 'We accept direct bank transfers via Meezan Bank, Bank Alfalah, and Standard Chartered, as well as Visa and Mastercard payments processed through 256-bit SSL encrypted channels.'
        }
      ]
    },
    {
      category: 'Exchanges & 14-Day Guarantee',
      items: [
        {
          q: 'What is the atelier return and exchange policy?',
          a: 'We extend a 14-day exchange privilege on all unworn garments in their original packaging with tags intact. If the size or fit is not ideal, our concierge will arrange a seamless size swap.'
        },
        {
          q: 'How do I initiate an exchange?',
          a: 'Simply contact our concierge team via WhatsApp or email with your Order ID and preferred replacement size. A courier pickup and exchange will be scheduled.'
        }
      ]
    }
  ];

  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          HELP CENTER & CLIENT GUIDES
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Frequently Asked Questions
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          Clear answers regarding atelier sizing, bespoke fabrics, nationwide delivery, and returns.
        </p>
      </div>

      <!-- FAQ Accordions by Category -->
      <div class="space-y-12">
        ${faqs.map(sec => `
          <div class="space-y-4">
            <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider border-b border-[#E8E4DC] pb-2">
              ${sec.category}
            </h2>
            <div class="divide-y divide-[#E8E4DC]">
              ${sec.items.map(item => `
                <details class="group py-4 text-xs">
                  <summary class="flex justify-between items-center cursor-pointer font-bold text-sm text-[#111] hover:text-[#555] transition-colors">
                    <span>${item.q}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                  </summary>
                  <p class="pt-3 text-[#555] leading-relaxed text-xs">
                    ${item.a}
                  </p>
                </details>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Footer Help Box -->
      <div class="bg-[#F7F5F0] p-8 border border-[#E8E4DC] text-center space-y-3 mt-12">
        <h3 class="font-serif text-xl font-medium text-black">Still have a question?</h3>
        <p class="text-xs text-[#737373]">Our VIP concierge is available via WhatsApp or telephone for personal assistance.</p>
        <a href="#/contact" class="btn-primary text-xs py-2.5 px-6 inline-block mt-2">Speak to Concierge</a>
      </div>

    </div>
  `;
}

export function bindFaqPageEvents() {}
