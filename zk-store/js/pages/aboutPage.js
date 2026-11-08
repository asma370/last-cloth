// ZK STORE — Editorial About the House Page

export function renderAboutPage() {
  return `
    <div class="space-y-24 sm:space-y-32 pb-24">
      
      <!-- Editorial Hero Header -->
      <section class="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=2200&q=85" 
            alt="ZK STORE Atelier History" 
            class="w-full h-full object-cover object-center brightness-70"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5]">
            HAUTE ATELIER MANIFESTO
          </span>
          <h1 class="font-serif text-3xl sm:text-6xl md:text-7xl font-normal tracking-[0.08em] uppercase leading-tight text-[#F7F5F0]">
            MORE THAN FASHION. <br />IT'S YOUR IDENTITY.
          </h1>
          <p class="font-sans text-xs sm:text-base text-[#DDD] max-w-xl mx-auto font-light leading-relaxed">
            The story of an international fashion house founded on uncompromising textile weight, architectural proportion, and effortless elegance.
          </p>
        </div>
      </section>

      <!-- The Atelier Narrative -->
      <section class="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div class="lg:col-span-6 space-y-6">
            <span class="text-xs font-semibold tracking-[0.25em] uppercase text-[#737373] block">
              ORIGINS & VISION
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111] font-medium leading-[1.15]">
              Redefining Modern Luxury from Pakistan to the World.
            </h2>
            <div class="space-y-4 text-xs sm:text-sm text-[#555] leading-relaxed font-sans">
              <p>
                ZK STORE was born from an acute realization: the contemporary fashion market was saturated with ephemeral synthetic trends, cheap polyester blends, and loud, disposable logos. The world had forgotten the quiet nobility of substantial, heavyweight textiles.
              </p>
              <p>
                We established ZK STORE to counter this disposability. Every piece in our 50-garment permanent archive is engineered with an obsession for longevity: 280GSM to 500GSM custom-milled combed organic cotton, French terry knitwear, Normandy flax linen, and Italian poplin shirting.
              </p>
              <p>
                We design for those whose presence needs no introduction. Silence speaks louder than volume when the silhouette is cut with razor-sharp intent.
              </p>
            </div>
          </div>

          <div class="lg:col-span-6 relative aspect-[4/5] bg-[#F7F5F0] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80" 
              alt="Craftsmanship in Action" 
              class="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <!-- Three Pillars of Craftsmanship -->
      <section id="craftsmanship" class="bg-[#F7F5F0] py-20 sm:py-28 border-y border-[#E8E4DC]">
        <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
          
          <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span class="text-xs font-semibold tracking-[0.25em] uppercase text-[#737373] block">
              ATELIER DISCIPLINES
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111] font-medium">
              The Three Pillars of ZK STORE
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="bg-white p-8 sm:p-10 border border-[#E8E4DC] space-y-4">
              <span class="font-serif text-3xl font-light text-[#D8C8B5]">01</span>
              <h3 class="font-serif text-2xl font-medium text-black">Textile Architecture</h3>
              <p class="text-xs text-[#555] leading-relaxed">
                We custom-mill our own fabrics. Rather than using commercial stock, we knit bespoke 280GSM and 500GSM loopback terries that drape with sculpted structural authority, never clinging or distorting over time.
              </p>
            </div>

            <div class="bg-white p-8 sm:p-10 border border-[#E8E4DC] space-y-4">
              <span class="font-serif text-3xl font-light text-[#D8C8B5]">02</span>
              <h3 class="font-serif text-2xl font-medium text-black">Sartorial Precision</h3>
              <p class="text-xs text-[#555] leading-relaxed">
                From hand-basted French seams and double reverse trouser pleats to antique brass hardware and mother-of-pearl buttons, our atelier craftsmen bring bespoke Savile Row standards to modern streetwear.
              </p>
            </div>

            <div class="bg-white p-8 sm:p-10 border border-[#E8E4DC] space-y-4">
              <span class="font-serif text-3xl font-light text-[#D8C8B5]">03</span>
              <h3 class="font-serif text-2xl font-medium text-black">Conscious Permanence</h3>
              <p class="text-xs text-[#555] leading-relaxed">
                We reject seasonal waste. Every silhouette is crafted to be worn through multiple decades. 100% GOTS-certified organic cotton, chemical-free garment dye vats, and ethical fair-wage ateliers in Pakistan.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- Boutiques & Concierge CTA -->
      <section class="max-w-[1200px] mx-auto px-6 sm:px-12 text-center space-y-6">
        <h2 class="font-serif text-3xl sm:text-4xl text-black font-medium">
          Experience the Atelier in Person
        </h2>
        <p class="text-xs sm:text-sm text-[#737373] max-w-md mx-auto leading-relaxed">
          Visit our flagship boutiques in DHA Karachi and Gulberg Lahore, or consult with our private concierge for bespoke styling appointments.
        </p>
        <div class="pt-4 flex justify-center gap-4">
          <a href="#/contact" class="btn-primary text-xs py-3.5 px-8">Contact Concierge</a>
          <a href="#/categories" class="btn-outline text-xs py-3.5 px-8">Discover Catalog</a>
        </div>
      </section>

    </div>
  `;
}

export function bindAboutPageEvents() {}
