// ZK STORE — My Account, Orders & Authentication Page
import { store } from '../store/state.js';

export function renderAccountPage() {
  const user = store.user;
  const orders = store.orders;

  if (!user || !user.isLoggedIn) {
    return `
      <div class="max-w-md mx-auto px-6 py-20">
        <div class="text-center mb-8">
          <span class="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
            ATELIER PATRON PORTAL
          </span>
          <h1 class="font-serif text-3xl font-medium text-[#111] uppercase tracking-[0.08em]">
            Sign In / Register
          </h1>
          <p class="text-xs text-[#737373] mt-2">Access your bespoke orders, saved measurements, and VIP privileges.</p>
        </div>

        <!-- Auth Tabs -->
        <div class="bg-white border border-[#E8E4DC] p-6 sm:p-8 shadow-sm">
          <div class="flex border-b border-[#E8E4DC] mb-6">
            <button id="auth-tab-login" class="flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 border-black text-black">
              Sign In
            </button>
            <button id="auth-tab-register" class="flex-1 pb-3 text-xs font-bold uppercase tracking-wider text-[#737373] hover:text-black">
              Create Account
            </button>
          </div>

          <!-- Login Form -->
          <form id="auth-login-form" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Email Address</label>
              <input type="email" id="login-email" required value="daniyal.ahmed@example.com" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Password</label>
              <input type="password" id="login-password" required value="password123" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <button type="submit" class="btn-primary w-full py-3 text-xs font-bold uppercase tracking-widest mt-2">
              Sign In to Atelier &rarr;
            </button>
            <p class="text-[11px] text-center text-[#737373] pt-2">Demo credentials pre-filled for instant testing.</p>
          </form>

          <!-- Register Form (Hidden) -->
          <form id="auth-register-form" class="space-y-4 hidden">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Full Name</label>
              <input type="text" id="reg-name" required placeholder="Daniyal Ahmed" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Email Address</label>
              <input type="email" id="reg-email" required placeholder="daniyal@example.com" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Create Password</label>
              <input type="password" id="reg-password" required placeholder="••••••••" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <button type="submit" class="btn-primary w-full py-3 text-xs font-bold uppercase tracking-widest mt-2">
              Create Patron Account &rarr;
            </button>
          </form>
        </div>
      </div>
    `;
  }

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Welcome Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8E4DC] pb-6 gap-4">
        <div>
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
            VIP ATELIER PATRON
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl font-medium text-[#111111] uppercase tracking-[0.08em]">
            Welcome, ${user.name}
          </h1>
          <p class="text-xs text-[#737373] mt-1">${user.email} &bull; Patron Since 2026</p>
        </div>
        <button id="account-signout-btn" class="btn-outline text-xs py-2 px-5 text-rose-700 hover:bg-rose-700 hover:text-white border-rose-200">
          Sign Out
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Patron Overview & Default Address (4 Cols) -->
        <div class="lg:col-span-4 space-y-6">
          <div class="bg-[#F7F5F0] p-6 border border-[#E8E4DC] space-y-4">
            <h3 class="font-serif text-xl font-medium text-[#111] border-b border-[#E8E4DC] pb-3">
              Patron Profile
            </h3>
            <div class="text-xs space-y-2 text-[#444]">
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Atelier Status:</strong> <span class="bg-black text-white text-[10px] px-2 py-0.5 uppercase tracking-widest font-semibold">Tier One VIP</span></p>
            </div>
          </div>

          <div class="bg-[#F7F5F0] p-6 border border-[#E8E4DC] space-y-4">
            <h3 class="font-serif text-xl font-medium text-[#111] border-b border-[#E8E4DC] pb-3">
              Saved Delivery Address
            </h3>
            <div class="text-xs text-[#444] space-y-1">
              <p class="font-semibold text-black">${user.name}</p>
              <p>${user.address}</p>
              <p>${user.city}, ${user.postalCode}</p>
              <p>Pakistan</p>
              <p class="pt-2 text-[#737373]">${user.phone}</p>
            </div>
          </div>

          <div class="p-6 border border-[#E8E4DC] bg-white space-y-3">
            <h4 class="font-semibold text-xs uppercase tracking-wider text-black">Private Concierge</h4>
            <p class="text-xs text-[#737373] leading-relaxed">
              Need personalized sizing advice, bespoke tailoring, or priority rush delivery? Contact our VIP Concierge directly.
            </p>
            <a href="https://wa.me/923001234567" target="_blank" class="btn-outline w-full py-2.5 text-xs text-center block">
              WhatsApp Concierge
            </a>
          </div>
        </div>

        <!-- Right: Order History & Tracking (8 Cols) -->
        <div class="lg:col-span-8 space-y-6">
          <div class="border-b border-[#E8E4DC] pb-3 flex justify-between items-center">
            <h3 class="font-serif text-2xl font-medium text-[#111]">
              Order History (${orders.length})
            </h3>
            <a href="#/order-tracking" class="text-xs font-semibold uppercase tracking-wider text-black hover:underline">
              Track Any Order ID &rarr;
            </a>
          </div>

          ${orders.length === 0 ? `
            <div class="p-8 text-center bg-[#F7F5F0] border border-[#E8E4DC] text-xs text-[#737373]">
              No previous orders found.
            </div>
          ` : `
            <div class="space-y-6">
              ${orders.map(order => `
                <div class="bg-white border border-[#E8E4DC] p-6 space-y-4 shadow-sm">
                  <!-- Order Header -->
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8E4DC] gap-2">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-serif text-lg font-bold text-black">${order.id}</span>
                        <span class="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                          ${order.status}
                        </span>
                      </div>
                      <p class="text-[11px] text-[#737373]">Placed on ${order.date} &bull; ${order.carrier}</p>
                    </div>

                    <div class="flex items-center gap-3">
                      <span class="text-sm font-bold text-black">Rs. ${order.total.toLocaleString('en-PK')}</span>
                      <a href="#/order-tracking?orderId=${order.id}" class="btn-outline text-[11px] py-1.5 px-3">
                        Track Live &rarr;
                      </a>
                    </div>
                  </div>

                  <!-- Order Items -->
                  <div class="divide-y divide-[#E8E4DC]">
                    ${order.items.map(item => `
                      <div class="py-3 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-3">
                          <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover bg-[#F7F5F0] border border-[#E8E4DC]">
                          <div>
                            <h4 class="font-semibold text-black">${item.name}</h4>
                            <p class="text-[11px] text-[#737373]">${item.color} &bull; Size ${item.size} &bull; Qty ${item.quantity}</p>
                          </div>
                        </div>
                        <span class="font-medium text-black">Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

export function bindAccountPageEvents() {
  const signoutBtn = document.getElementById('account-signout-btn');
  if (signoutBtn) {
    signoutBtn.addEventListener('click', () => {
      store.logout();
      window.location.hash = '#/account';
    });
  }

  // Auth Tabs
  const tabLogin = document.getElementById('auth-tab-login');
  const tabRegister = document.getElementById('auth-tab-register');
  const formLogin = document.getElementById('auth-login-form');
  const formRegister = document.getElementById('auth-register-form');

  if (tabLogin && tabRegister && formLogin && formRegister) {
    tabLogin.addEventListener('click', () => {
      tabLogin.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 border-black text-black';
      tabRegister.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider text-[#737373] hover:text-black';
      formLogin.classList.remove('hidden');
      formRegister.classList.add('hidden');
    });

    tabRegister.addEventListener('click', () => {
      tabRegister.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 border-black text-black';
      tabLogin.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider text-[#737373] hover:text-black';
      formRegister.classList.remove('hidden');
      formLogin.classList.add('hidden');
    });

    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      store.login({ email, name: 'Daniyal Ahmed' });
      window.location.hash = '#/account';
    });

    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      store.login({ email, name });
      window.location.hash = '#/account';
    });
  }
}
