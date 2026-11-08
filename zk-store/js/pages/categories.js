// ZK STORE — All Clothing Categories Page
import { MEN_CATEGORIES, WOMEN_CATEGORIES } from '../data/categories.js';

export function renderCategoriesPage() {
  return `
    <div class="space-y-16 sm:space-y-24 pb-24">
      
      <!-- Editorial Header -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-12 border-b border-[#E8E4DC] pb-8">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373] block mb-2">
          ATELIER ARCHIVES &bull; ALL READY-TO-WEAR
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em] mb-3">
          Clothing Categories
        </h1>
        <p class="text-xs sm:text-sm text-[#555] max-w-xl leading-relaxed">
          Explore the complete structural catalog of ZK STORE. Curated by textile discipline, cut, and seasonal expression.
        </p>
      </section>

      <!-- Men's Categories Section -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E4DC]">
          <div>
            <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#737373] block">ATELIER HOMME</span>
            <h2 class="font-serif text-2xl sm:text-3xl text-[#111] font-medium">Men's Wardrobe Categories</h2>
          </div>
          <a href="#/men" class="text-xs font-semibold tracking-wider uppercase text-black hover:underline">
            View All Men's Clothing (25) &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${MEN_CATEGORIES.map(cat => `
            <a href="#/men?category=${cat.slug}" class="category-card group block aspect-[4/5] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-2xl font-medium tracking-wide leading-tight mb-1">${cat.name}</h3>
                <p class="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-3">${cat.description}</p>
                <span class="text-[11px] font-semibold tracking-widest uppercase underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Shop ${cat.name} &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Women's Categories Section -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E4DC]">
          <div>
            <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#737373] block">ATELIER FEMME</span>
            <h2 class="font-serif text-2xl sm:text-3xl text-[#111] font-medium">Women's Wardrobe Categories</h2>
          </div>
          <a href="#/women" class="text-xs font-semibold tracking-wider uppercase text-black hover:underline">
            View All Women's Clothing (25) &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${WOMEN_CATEGORIES.map(cat => `
            <a href="#/women?category=${cat.slug}" class="category-card group block aspect-[4/5] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-2xl font-medium tracking-wide leading-tight mb-1">${cat.name}</h3>
                <p class="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-3">${cat.description}</p>
                <span class="text-[11px] font-semibold tracking-widest uppercase underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Shop ${cat.name} &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

    </div>
  `;
}

export function bindCategoriesPageEvents() {}
