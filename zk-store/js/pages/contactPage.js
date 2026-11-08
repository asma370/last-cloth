// ZK STORE — VIP Client Concierge & Contact Page
import { store } from '../store/state.js';

export function renderContactPage() {
  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-16 pb-24">
      
      <!-- Page Header -->
      <div class="border-b border-[#E8E4DC] pb-6">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
          CLIENT SERVICES & PRIVATE APPOINTMENTS
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111111] uppercase tracking-[0.08em]">
          Contact Concierge
        </h1>
        <p class="text-xs sm:text-sm text-[#737373] mt-2 max-w-xl">
          Our dedicated fashion advisors and logistics specialists are available to assist with sizing consultations, custom atelier orders, and order inquiries.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <!-- Left: Concierge Form (7 Cols) -->
        <div class="lg:col-span-7 bg-[#F7F5F0] p-8 sm:p-12 border border-[#E8E4DC]">
          <h2 class="font-serif text-2xl sm:text-3xl font-medium text-[#111] mb-2">Send an Inquiry</h2>
          <p class="text-xs text-[#737373] mb-8">Expect a response within 4 hours during business days.</p>

          <form id="contact-concierge-form" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Your Name *</label>
                <input type="text" id="contact-name" required placeholder="Daniyal Ahmed" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Phone / WhatsApp</label>
                <input type="tel" id="contact-phone" placeholder="+92 300 1234567" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Email Address *</label>
              <input type="email" id="contact-email" required placeholder="daniyal@example.com" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Subject of Inquiry</label>
              <select id="contact-subject" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
                <option value="Sizing">Sizing & Garment Fit Consultation</option>
                <option value="Order Tracking">Existing Order Inquiry / Tracking</option>
                <option value="Exchanges">14-Day Exchange or Return Request</option>
                <option value="Bespoke">Bespoke Atelier Styling Appointment</option>
                <option value="Press">Press & Corporate Collaborations</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Message *</label>
              <textarea id="contact-message" required rows="5" placeholder="How may our atelier concierge assist you today?" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium"></textarea>
            </div>

            <button type="submit" class="btn-primary w-full py-4 text-xs font-bold uppercase tracking-[0.2em]">
              Send Message to Concierge &rarr;
            </button>
          </form>
        </div>

        <!-- Right: Flagship Boutiques & Contact Direct (5 Cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Direct Channels -->
          <div class="bg-white border border-[#E8E4DC] p-8 space-y-6">
            <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
              Direct Contact Lines
            </h3>

            <div class="space-y-4 text-xs">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 text-black">
                  <i data-lucide="phone" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-black uppercase tracking-wider">VIP Telephone Line</h4>
                  <p class="text-[#737373] mt-0.5">+92 21 3524 8900 &bull; Mon - Sat, 10 AM - 9 PM</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 text-black">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-black uppercase tracking-wider">WhatsApp VIP Direct</h4>
                  <a href="https://wa.me/923001234567" target="_blank" class="text-[#D8C8B5] font-semibold hover:underline block mt-0.5">
                    +92 300 1234567 &rarr; (Instant Chat)
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 text-black">
                  <i data-lucide="mail" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-black uppercase tracking-wider">Electronic Inquiries</h4>
                  <p class="text-[#737373] mt-0.5">concierge@zkstore.luxury</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Flagship Locations -->
          <div class="bg-white border border-[#E8E4DC] p-8 space-y-6">
            <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
              Atelier Flagship Boutiques
            </h3>

            <div class="space-y-6 text-xs text-[#555]">
              <div>
                <h4 class="font-bold text-black text-sm uppercase tracking-wider mb-1">Karachi Flagship Atelier</h4>
                <p>Plot 42-C, 26th Street, Bukhari Commercial Area</p>
                <p>DHA Phase VI, Karachi, Pakistan</p>
                <p class="text-[11px] text-[#737373] mt-1">Open 11:00 AM — 10:00 PM Daily</p>
              </div>

              <div class="pt-2 border-t border-[#E8E4DC]">
                <h4 class="font-bold text-black text-sm uppercase tracking-wider mb-1">Lahore Sartorial Boutique</h4>
                <p>94-B, MM Alam Road</p>
                <p>Gulberg III, Lahore, Pakistan</p>
                <p class="text-[11px] text-[#737373] mt-1">Open 11:00 AM — 10:00 PM Daily</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

export function bindContactPageEvents() {
  const form = document.getElementById('contact-concierge-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      store.showToast(`Thank you, ${name}. Your message has been dispatched to the VIP concierge team.`, 'success');
      form.reset();
    });
  }
}
