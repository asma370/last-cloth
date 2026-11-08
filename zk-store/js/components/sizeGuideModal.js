// ZK STORE — Luxury Size Guide Modal Component
import { store } from '../store/state.js';

export function renderSizeGuideModal() {
  const isOpen = store.ui.isSizeGuideOpen;

  return `
    <div id="sizeguide-modal-backdrop" class="modal-overlay ${isOpen ? 'active' : ''}">
      <div class="modal-dialog max-w-2xl bg-white shadow-2xl p-6 sm:p-8">
        <div class="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
          <div>
            <h3 class="font-serif text-2xl font-medium text-[#111111]">Atelier Size & Fit Guide</h3>
            <p class="text-xs text-[#737373] mt-0.5">Precision garment measurements (in inches & centimeters)</p>
          </div>
          <button id="close-sizeguide-btn" class="p-2 text-[#737373] hover:text-[#111] transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Gender Tabs -->
        <div class="py-4">
          <div class="flex gap-4 border-b border-[#E8E4DC] mb-4">
            <button class="sizeguide-tab-btn pb-2 text-xs font-semibold uppercase tracking-wider border-b-2 border-black text-black" data-tab="men">
              Men's Sizing
            </button>
            <button class="sizeguide-tab-btn pb-2 text-xs font-semibold uppercase tracking-wider text-[#737373] hover:text-black" data-tab="women">
              Women's Sizing
            </button>
          </div>

          <!-- Men Table -->
          <div id="sizeguide-table-men" class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-[#F7F5F0] text-[#111] border-b border-[#E8E4DC]">
                  <th class="p-2.5 font-semibold">Size</th>
                  <th class="p-2.5 font-semibold">Chest (Inches)</th>
                  <th class="p-2.5 font-semibold">Waist (Inches)</th>
                  <th class="p-2.5 font-semibold">Hips (Inches)</th>
                  <th class="p-2.5 font-semibold">Length</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E8E4DC] text-[#444]">
                <tr><td class="p-2.5 font-bold text-black">XS</td><td class="p-2.5">34 - 36"</td><td class="p-2.5">28 - 29"</td><td class="p-2.5">35 - 36"</td><td class="p-2.5">27.0"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">S</td><td class="p-2.5">36 - 38"</td><td class="p-2.5">30 - 31"</td><td class="p-2.5">37 - 38"</td><td class="p-2.5">27.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">M</td><td class="p-2.5">38 - 40"</td><td class="p-2.5">32 - 33"</td><td class="p-2.5">39 - 40"</td><td class="p-2.5">28.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">L</td><td class="p-2.5">40 - 42"</td><td class="p-2.5">34 - 35"</td><td class="p-2.5">41 - 42"</td><td class="p-2.5">29.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">XL</td><td class="p-2.5">42 - 44"</td><td class="p-2.5">36 - 38"</td><td class="p-2.5">43 - 44"</td><td class="p-2.5">30.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">XXL</td><td class="p-2.5">44 - 46"</td><td class="p-2.5">39 - 41"</td><td class="p-2.5">45 - 46"</td><td class="p-2.5">31.0"</td></tr>
              </tbody>
            </table>
          </div>

          <!-- Women Table -->
          <div id="sizeguide-table-women" class="overflow-x-auto hidden">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-[#F7F5F0] text-[#111] border-b border-[#E8E4DC]">
                  <th class="p-2.5 font-semibold">Size</th>
                  <th class="p-2.5 font-semibold">Bust (Inches)</th>
                  <th class="p-2.5 font-semibold">Waist (Inches)</th>
                  <th class="p-2.5 font-semibold">Hips (Inches)</th>
                  <th class="p-2.5 font-semibold">UK / EU</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E8E4DC] text-[#444]">
                <tr><td class="p-2.5 font-bold text-black">XS</td><td class="p-2.5">31 - 32"</td><td class="p-2.5">24 - 25"</td><td class="p-2.5">34 - 35"</td><td class="p-2.5">UK 6 / EU 34</td></tr>
                <tr><td class="p-2.5 font-bold text-black">S</td><td class="p-2.5">33 - 34"</td><td class="p-2.5">26 - 27"</td><td class="p-2.5">36 - 37"</td><td class="p-2.5">UK 8 / EU 36</td></tr>
                <tr><td class="p-2.5 font-bold text-black">M</td><td class="p-2.5">35 - 36"</td><td class="p-2.5">28 - 29"</td><td class="p-2.5">38 - 39"</td><td class="p-2.5">UK 10 / EU 38</td></tr>
                <tr><td class="p-2.5 font-bold text-black">L</td><td class="p-2.5">37 - 39"</td><td class="p-2.5">30 - 32"</td><td class="p-2.5">40 - 42"</td><td class="p-2.5">UK 12 / EU 40</td></tr>
                <tr><td class="p-2.5 font-bold text-black">XL</td><td class="p-2.5">40 - 42"</td><td class="p-2.5">33 - 35"</td><td class="p-2.5">43 - 45"</td><td class="p-2.5">UK 14 / EU 42</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-4 p-4 bg-[#F7F5F0] text-xs text-[#555] space-y-1">
          <p><strong>Fit Tip:</strong> Our oversized t-shirts, sweatshirts, and hoodies are engineered with a relaxed drop-shoulder cut. Order your true size for intended relaxed silhouette, or size down for a standard regular fit.</p>
        </div>
      </div>
    </div>
  `;
}

export function bindSizeGuideEvents() {
  const backdrop = document.getElementById('sizeguide-modal-backdrop');
  if (!backdrop) return;

  const closeBtn = document.getElementById('close-sizeguide-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.closeSizeGuide());
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.closeSizeGuide();
    }
  });

  const tabBtns = backdrop.querySelectorAll('.sizeguide-tab-btn');
  const menTable = document.getElementById('sizeguide-table-men');
  const womenTable = document.getElementById('sizeguide-table-women');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('border-b-2', 'border-black', 'text-black');
        b.classList.add('text-[#737373]');
      });
      btn.classList.add('border-b-2', 'border-black', 'text-black');
      btn.classList.remove('text-[#737373]');

      const tab = btn.getAttribute('data-tab');
      if (tab === 'men') {
        menTable.classList.remove('hidden');
        womenTable.classList.add('hidden');
      } else {
        menTable.classList.add('hidden');
        womenTable.classList.remove('hidden');
      }
    });
  });
}
