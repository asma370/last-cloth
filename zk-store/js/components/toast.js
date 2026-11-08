// ZK STORE — Toast Notification Component

export function initToast() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

export function showToast(message, type = 'info') {
  initToast();
  const container = document.getElementById('toast-container');

  const icons = {
    cart: '<i data-lucide="shopping-bag" class="w-4 h-4 text-[#D8C8B5]"></i>',
    wishlist: '<i data-lucide="heart" class="w-4 h-4 text-rose-400"></i>',
    success: '<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>',
    info: '<i data-lucide="info" class="w-4 h-4 text-[#D8C8B5]"></i>'
  };

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <div class="flex-shrink-0">${icons[type] || icons.info}</div>
    <div class="flex-1 font-sans text-xs tracking-wide leading-snug">${message}</div>
    <button class="text-white/40 hover:text-white transition-colors" onclick="this.parentElement.remove()">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `;

  container.appendChild(toast);
  if (window.lucide) {
    window.lucide.createIcons({ root: toast });
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}
