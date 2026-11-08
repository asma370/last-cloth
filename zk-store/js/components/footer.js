// ZK STORE — High-Fashion Luxury Editorial Footer Component
import { store } from '../store/state.js';

export function renderFooter() {
  return `
    <!-- Luxury Brand Footer -->
    <footer class="bg-[#111111] text-[#F7F5F0] pt-20 pb-12 border-t border-[#292929]">
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        <!-- Top Section: Brand Statement & Newsletter Subscription -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#292929]">
          
          <!-- Brand Identity Column -->
          <div class="lg:col-span-5 space-y-6">
            <a href="#/" class="inline-block">
              <span class="font-serif text-3xl sm:text-4xl tracking-[0.24em] font-semibold uppercase text-white block">
                ZK STORE
              </span>
              <span class="font-sans text-[10px] tracking-[0.4em] uppercase text-[#D8C8B5] block mt-1">
                HAUTE LUXURY ATELIER
              </span>
            </a>
            <p class="text-xs sm:text-sm text-[#999999] leading-relaxed max-w-md font-sans">
              Rooted in sculptural architectural cuts, custom-milled heavyweight organic cottons, and timeless European tailoring. An international luxury fashion house crafted for those who speak through silhouette.
            </p>
            <div class="flex items-center space-x-5 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="ZK STORE Instagram">
                <i data-lucide="instagram" class="w-4 h-4"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="ZK STORE Facebook">
                <i data-lucide="facebook" class="w-4 h-4"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="ZK STORE TikTok">
                <i data-lucide="video" class="w-4 h-4"></i>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="WhatsApp VIP Concierge">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- Newsletter Column -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <div class="bg-[#1C1C1C] p-8 sm:p-10 border border-[#2E2E2E]">
              <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D8C8B5] block mb-2">
                EXCLUSIVITY AWAITS
              </span>
              <h3 class="font-serif text-2xl sm:text-3xl text-white font-medium mb-3">
                Join the Private Atelier Circle
              </h3>
              <p class="text-xs text-[#AAAAAA] mb-6 max-w-lg leading-relaxed">
                Receive private invitations to seasonal drops, atelier previews, and enjoy Rs. 500 privilege voucher on your first order.
              </p>

              <form id="footer-newsletter-form" class="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  id="footer-newsletter-email" 
                  placeholder="Enter your VIP email address..." 
                  required 
                  class="flex-1 bg-black/60 border border-[#3A3A3A] px-4 py-3.5 text-xs text-white placeholder:text-[#666] focus:outline-none focus:border-[#D8C8B5] tracking-wider"
                />
                <button type="submit" class="bg-[#D8C8B5] hover:bg-white text-[#111111] px-8 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-colors flex-shrink-0">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

        </div>

        <!-- Middle Section: Navigation Columns -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-[#292929] text-xs">
          
          <!-- Column 1: Men -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Men's Atelier</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/men?category=t-shirts" class="hover:text-white transition-colors">Heavyweight T-Shirts</a></li>
              <li><a href="#/men?category=shirts" class="hover:text-white transition-colors">Italian Poplin & Linen Shirts</a></li>
              <li><a href="#/men?category=hoodies" class="hover:text-white transition-colors">500GSM Loopback Hoodies</a></li>
              <li><a href="#/men?category=jackets" class="hover:text-white transition-colors">Bombers & Outerwear</a></li>
              <li><a href="#/men?category=jeans" class="hover:text-white transition-colors">Selvedge Denim</a></li>
              <li><a href="#/men?category=trousers" class="hover:text-white transition-colors">Pleated Sartorial Trousers</a></li>
              <li><a href="#/men" class="text-white font-medium hover:underline pt-1 block">View All Men (25) &rarr;</a></li>
            </ul>
          </div>

          <!-- Column 2: Women -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Women's Atelier</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/women?category=tops" class="hover:text-white transition-colors">Satin Tops & Corsets</a></li>
              <li><a href="#/women?category=shirts" class="hover:text-white transition-colors">Oversized Cotton Shirting</a></li>
              <li><a href="#/women?category=dresses" class="hover:text-white transition-colors">Evening Gowns & Slip Dresses</a></li>
              <li><a href="#/women?category=jackets" class="hover:text-white transition-colors">Cashmere Coats & Blazers</a></li>
              <li><a href="#/women?category=jeans" class="hover:text-white transition-colors">High-Rise & Wide Leg Denim</a></li>
              <li><a href="#/women?category=skirts" class="hover:text-white transition-colors">Bias-Cut Silk Skirts</a></li>
              <li><a href="#/women" class="text-white font-medium hover:underline pt-1 block">View All Women (25) &rarr;</a></li>
            </ul>
          </div>

          <!-- Column 3: The House -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">The House</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/about" class="hover:text-white transition-colors">Brand Story & Heritage</a></li>
              <li><a href="#/categories" class="hover:text-white transition-colors">All Clothing Collections</a></li>
              <li><a href="#/new-arrivals" class="hover:text-white transition-colors">New Season Arrivals</a></li>
              <li><a href="#/best-sellers" class="hover:text-white transition-colors">House Best Sellers</a></li>
              <li><a href="#/about#craftsmanship" class="hover:text-white transition-colors">Fabric & Craftsmanship</a></li>
            </ul>
          </div>

          <!-- Column 4: Client Services -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Client Concierge</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/order-tracking" class="hover:text-white transition-colors">Live Order Tracking</a></li>
              <li><a href="#/contact" class="hover:text-white transition-colors">Contact Concierge</a></li>
              <li><a href="#/shipping" class="hover:text-white transition-colors">Complimentary Delivery Info</a></li>
              <li><a href="#/shipping#returns" class="hover:text-white transition-colors">Atelier 14-Day Exchanges</a></li>
              <li><a href="#/faq" class="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#/privacy" class="hover:text-white transition-colors">Privacy & Data Security</a></li>
              <li><a href="#/terms" class="hover:text-white transition-colors">Terms of Atelier Sale</a></li>
            </ul>
          </div>

          <!-- Column 5: Boutiques & Assistance -->
          <div class="space-y-4 col-span-2 md:col-span-4 lg:col-span-1">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Flagship Boutiques</h4>
            <div class="space-y-3 text-[#999]">
              <div>
                <p class="text-white font-medium">Karachi Atelier</p>
                <p class="text-[11px]">Bukhari Commercial, DHA Phase VI</p>
              </div>
              <div>
                <p class="text-white font-medium">Lahore Atelier</p>
                <p class="text-[11px]">MM Alam Road, Gulberg III</p>
              </div>
              <div class="pt-2 text-[11px]">
                <p class="text-white">VIP Direct Line:</p>
                <p>+92 21 3524 8900</p>
                <p class="text-[#D8C8B5]">concierge@zkstore.luxury</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Row: Payment Logos & Copyright -->
        <div class="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#777777]">
          <div class="flex items-center gap-2">
            <span>&copy; ${new Date().getFullYear()} ZK STORE Haute Atelier Ltd. All rights reserved.</span>
          </div>

          <!-- Accepted Payment Methods in Pakistan & International -->
          <div class="flex items-center flex-wrap gap-2 text-[10px]">
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Cash on Delivery</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Meezan Bank</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Bank Alfalah</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">TCS Express</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Visa / Mastercard</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">SSL 256-Bit</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function bindFooterEvents() {
  const form = document.getElementById('footer-newsletter-form');
  const input = document.getElementById('footer-newsletter-email');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();
      if (email) {
        store.showToast(`Thank you for joining the VIP Atelier circle: ${email}`, 'success');
        input.value = '';
      }
    });
  }
}
