// ZK STORE — Luxury Fashion Homepage
import { store } from '../store/state.js';
import { renderProductCard, bindProductCardActions } from '../components/productCard.js';
import { MEN_CATEGORIES, WOMEN_CATEGORIES, STYLE_COLLECTIONS } from '../data/categories.js';

export function renderHomePage() {
  const newArrivals = store.getNewArrivals(8);
  const bestSellers = store.getBestSellers(8);

  return `
    <div class="space-y-24 sm:space-y-32">
      
      <!-- C. Hero Section: Full-Width Cinematic Campaign -->
      <section class="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <!-- Hero Background Image with Subtle Parallax / Zoom -->
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=85" 
            alt="ZK STORE New Season Haute Collection" 
            class="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50"></div>
        </div>

        <!-- Hero Content Overlay -->
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6 pt-12">
          
          <div class="inline-block">
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5] bg-black/40 backdrop-blur-md px-4 py-1.5 border border-[#D8C8B5]/40">
              AUTUMN / WINTER ATELIER '26
            </span>
          </div>

          <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.08em] uppercase leading-[1.05] text-[#F7F5F0]">
            STYLE IS A STATEMENT.
          </h1>

          <p class="font-sans text-sm sm:text-base md:text-lg text-[#E0DDD5] max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Discover the art of effortless dressing with ZK STORE. Uncompromising quality, heavyweight custom textiles, and timeless modern silhouettes.
          </p>

          <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#/men" class="btn-primary w-full sm:w-auto px-10 py-4 bg-white text-[#111111] hover:bg-[#D8C8B5] hover:text-black border-none text-xs font-bold tracking-[0.2em] uppercase shadow-2xl">
              SHOP MEN
            </a>
            <a href="#/women" class="btn-outline-white w-full sm:w-auto px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase shadow-2xl">
              SHOP WOMEN
            </a>
          </div>

        </div>

        <!-- Bottom Hero Badges -->
        <div class="absolute bottom-6 left-0 right-0 z-10 hidden sm:flex justify-between items-center max-w-[1600px] mx-auto px-10 text-[11px] text-[#D8C8B5] tracking-widest uppercase">
          <span>&bull; Bespoke Pakistani & Global Silhouettes</span>
          <span>&bull; Complimentary Express TCS Delivery Over Rs. 5,000</span>
          <span>&bull; Handcrafted Finishing</span>
        </div>
      </section>

      <!-- D. Featured Categories: Men & Women Tabbed Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8E4DC] pb-6 gap-4">
          <div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
              CURATED WARDROBE
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide">
              Featured Categories
            </h2>
          </div>

          <!-- Category Gender Toggle Pills -->
          <div class="flex items-center gap-3">
            <button id="category-tab-men" class="px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors">
              Men's Categories (9)
            </button>
            <button id="category-tab-women" class="px-6 py-2.5 bg-transparent text-[#111111] hover:bg-gray-100 border border-[#E8E4DC] text-xs font-semibold uppercase tracking-[0.16em] transition-colors">
              Women's Categories (10)
            </button>
          </div>
        </div>

        <!-- Men Categories Grid -->
        <div id="men-categories-showcase" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          ${MEN_CATEGORIES.map(cat => `
            <a href="#/men?category=${cat.slug}" class="category-card group block aspect-[3/4] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-xl sm:text-2xl font-medium tracking-wide leading-tight">${cat.name}</h3>
                <p class="text-[11px] text-white/80 line-clamp-1 mt-1 font-light">${cat.description}</p>
                <div class="pt-3">
                  <span class="text-[10px] uppercase font-semibold tracking-widest underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Shop ${cat.name} &rarr;
                  </span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>

        <!-- Women Categories Grid (Hidden by default, toggled via tab) -->
        <div id="women-categories-showcase" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 hidden">
          ${WOMEN_CATEGORIES.map(cat => `
            <a href="#/women?category=${cat.slug}" class="category-card group block aspect-[3/4] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-xl sm:text-2xl font-medium tracking-wide leading-tight">${cat.name}</h3>
                <p class="text-[11px] text-white/80 line-clamp-1 mt-1 font-light">${cat.description}</p>
                <div class="pt-3">
                  <span class="text-[10px] uppercase font-semibold tracking-widest underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Shop ${cat.name} &rarr;
                  </span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- E. New Arrivals Section (Minimum 8 Products) -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E8E4DC] gap-4">
          <div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
              LATEST ATELIER RELEASES
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide">
              New Arrivals
            </h2>
          </div>
          <a href="#/new-arrivals" class="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] hover:underline flex items-center gap-2">
            View All New Arrivals &rarr;
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${newArrivals.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

      <!-- G. Seasonal Collection: Editorial Campaign Section -->
      <section class="relative bg-[#111111] text-white py-24 sm:py-36 overflow-hidden">
        <div class="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=80" 
            alt="The Art of Everyday Luxury" 
            class="w-full h-full object-cover object-center filter grayscale"
          />
        </div>
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5] block">
            SEASONAL EDITORIAL
          </span>
          <h2 class="font-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.12em] font-normal text-[#F7F5F0]">
            THE ART OF EVERYDAY LUXURY
          </h2>
          <p class="font-sans text-xs sm:text-sm md:text-base text-[#D0CCC2] max-w-xl mx-auto leading-relaxed font-light">
            Crafted with unwavering dedication to textile weight, precision tailoring, and pure monochromatic palette. Every garment is an intentional dialogue between structure and drape.
          </p>
          <div class="pt-6 flex justify-center gap-4">
            <a href="#/categories" class="btn-primary bg-[#D8C8B5] hover:bg-white text-black border-none px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase">
              EXPLORE THE EDIT
            </a>
          </div>
        </div>
      </section>

      <!-- F. Best Sellers Section (Minimum 8 Products) -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E8E4DC] gap-4">
          <div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
              CLIENT FAVORITES
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide">
              Best Sellers
            </h2>
          </div>
          <a href="#/best-sellers" class="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] hover:underline flex items-center gap-2">
            View All Best Sellers &rarr;
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${bestSellers.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

      <!-- H. Shop by Style: Rich Visual Collection Blocks -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
            AESTHETIC DIRECTIONS
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide mb-3">
            Shop by Style
          </h2>
          <p class="text-xs text-[#737373] leading-relaxed">
            Choose your mood. From relaxed minimalism to sharp structured outerwear.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${STYLE_COLLECTIONS.map(style => `
            <a href="#/categories" class="group block relative overflow-hidden aspect-[4/5] bg-[#F7F5F0]">
              <img src="${style.image}" alt="${style.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D8C8B5] mb-2">${style.tag}</span>
                <h3 class="font-serif text-2xl font-medium tracking-wide mb-2">${style.title}</h3>
                <p class="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-4">${style.subtitle}</p>
                <span class="text-[11px] font-semibold tracking-wider uppercase underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Collection &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- I. Brand Story: Luxury Editorial Section -->
      <section class="bg-[#F7F5F0] py-20 sm:py-28 border-y border-[#E8E4DC]">
        <div class="max-w-[1400px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 relative aspect-[4/5] overflow-hidden bg-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" 
              alt="ZK STORE Atelier Craftsmanship" 
              class="w-full h-full object-cover"
            />
          </div>

          <div class="lg:col-span-6 space-y-6">
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block">
              THE MANIFESTO
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal leading-[1.15]">
              MORE THAN FASHION. <br />IT'S YOUR IDENTITY.
            </h2>
            <div class="space-y-4 text-xs sm:text-sm text-[#555] leading-relaxed font-sans">
              <p>
                ZK STORE was founded on a singular conviction: true luxury does not shout with overt branding. It whispers through the weight of 280GSM organic combed cotton, the crisp roll of an unlined Oxford collar, and the natural fluidity of bias-cut silk.
              </p>
              <p>
                Operating between our design atelier in Karachi and select European textile mills, we merge centuries of Eastern textile heritage with rigorous contemporary Western silhouette design.
              </p>
              <p>
                Every stitch, double-reverse pleat, and bespoke metal zipper is calibrated for enduring longevity. We design clothes to be worn, lived in, and passed forward.
              </p>
            </div>
            <div class="pt-4">
              <a href="#/about" class="btn-primary text-xs tracking-[0.18em] uppercase py-3.5 px-8">
                READ THE ATELIER STORY &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- J. Newsletter Section: "GET ON THE LIST" -->
      <section class="max-w-[1200px] mx-auto px-6 sm:px-12 pb-12">
        <div class="bg-[#111111] text-white p-8 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <div class="relative z-10 max-w-xl mx-auto space-y-4">
            <span class="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#D8C8B5]">
              VIP PRIVILEGE
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.14em] font-normal">
              GET ON THE LIST
            </h2>
            <p class="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
              Subscribe to unlock private drops, early access to seasonal archives, and receive an instant Rs. 500 privilege voucher.
            </p>
            <form id="home-newsletter-form" class="flex flex-col sm:flex-row gap-3 pt-4">
              <input 
                type="email" 
                id="home-newsletter-email" 
                placeholder="Enter your VIP email address..." 
                required 
                class="flex-1 bg-black/60 border border-[#3A3A3A] px-4 py-3.5 text-xs text-white placeholder:text-[#666] focus:outline-none focus:border-[#D8C8B5] tracking-wider"
              />
              <button type="submit" class="bg-[#D8C8B5] hover:bg-white text-[#111111] px-8 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-colors">
                JOIN NOW
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function bindHomePageEvents() {
  bindProductCardActions();

  // Category Tab Toggles
  const tabMen = document.getElementById('category-tab-men');
  const tabWomen = document.getElementById('category-tab-women');
  const showcaseMen = document.getElementById('men-categories-showcase');
  const showcaseWomen = document.getElementById('women-categories-showcase');

  if (tabMen && tabWomen && showcaseMen && showcaseWomen) {
    tabMen.addEventListener('click', () => {
      tabMen.className = 'px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      tabWomen.className = 'px-6 py-2.5 bg-transparent text-[#111111] hover:bg-gray-100 border border-[#E8E4DC] text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      showcaseMen.classList.remove('hidden');
      showcaseWomen.classList.add('hidden');
    });

    tabWomen.addEventListener('click', () => {
      tabWomen.className = 'px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      tabMen.className = 'px-6 py-2.5 bg-transparent text-[#111111] hover:bg-gray-100 border border-[#E8E4DC] text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      showcaseWomen.classList.remove('hidden');
      showcaseMen.classList.add('hidden');
    });
  }

  // Home newsletter
  const newsletterForm = document.getElementById('home-newsletter-form');
  const newsletterEmail = document.getElementById('home-newsletter-email');
  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (email) {
        store.showToast(`Welcome to the Private Circle: ${email}. Use voucher WELCOMEZK for Rs. 500 off.`, 'success');
        newsletterEmail.value = '';
      }
    });
  }
}
