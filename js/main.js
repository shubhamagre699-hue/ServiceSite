
// =========================================
// BoostKart — Main JS (shared across pages)
// =========================================

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
}

// ===== MOBILE MENU =====
const ham = document.getElementById('ham');
const navMob = document.getElementById('navMob');
if (ham && navMob) {
    ham.addEventListener('click', () => navMob.classList.toggle('open'));
    document.addEventListener('click', (e) => {
        if (!ham.contains(e.target) && !navMob.contains(e.target)) navMob.classList.remove('open');
    });
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = `toast ${type}`;
    t.style.display = 'block';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.style.display = 'none', 3500);
}

// ===== COPY UPI =====
function copyUPI() {
    const upi = localStorage.getItem('bk_upi') || SITE_CONFIG.upiId;
    navigator.clipboard.writeText(upi)
        .then(() => showToast('✅ UPI ID copied!', 'success'))
        .catch(() => showToast('Could not copy. Please copy manually.', 'error'));
}

// ===== BUILD SERVICE CARD HTML =====
function buildServiceCard(s, compact = false) {
    const discount = s.originalPrice > s.price
        ? Math.round((1 - s.price / s.originalPrice) * 100) + '% OFF'
        : null;
    return `
    <div class="service-card ${s.popular ? 'popular-card' : ''}">
      ${s.popular ? '<div class="popular-ribbon">⭐ Popular</div>' : ''}
      <div class="sc-platform">
        <span class="sc-emoji">${s.emoji}</span>
        ${s.platform}
      </div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-desc">${s.description}</div>
      <div class="sc-delivery">⏰ Delivery: <span>${s.delivery}</span></div>
      <div class="sc-price-row">
        <div class="sc-price">${SITE_CONFIG.currency}${s.price}</div>
        ${s.originalPrice > s.price ? `<div class="sc-original">${SITE_CONFIG.currency}${s.originalPrice}</div>` : ''}
        ${discount ? `<div class="sc-discount">${discount}</div>` : ''}
      </div>
      <div class="sc-actions">
        <button class="sc-btn-tg" onclick="orderViaTelegram('${s.id}')">💬 Telegram</button>
        <button class="sc-btn-order" onclick="orderViaForm('${s.id}')">Order Now →</button>
      </div>
    </div>`;
}

// Attach card button events (for dynamically rendered cards)
function attachCardEvents() {
    // Intentionally empty — events are inline onclick
}

// ===== ORDER ROUTING =====
function orderViaTelegram(serviceId) {
    const s = getServiceById(serviceId);
    if (!s) return;
    const uname = prompt(`Enter your ${s.platform} username or link (you can edit in Telegram):`);
    window.open(buildTelegramMessage(s, uname || ''), '_blank');
}

function orderViaForm(serviceId) {
    window.location.href = `order.html?service=${serviceId}`;
}

// ===== LANDING: Services preview =====
function renderServicesPreview() {
    const grid = document.getElementById('servicesPreview');
    if (!grid) return;
    // Show 6 popular/first services
    const svcs = SERVICES.filter(s => s.active).slice(0, 6);
    grid.innerHTML = svcs.map(s => buildServiceCard(s)).join('');
}

// ===== SCROLL ANIMATIONS =====
function initScrollReveal() {
    const els = document.querySelectorAll('.service-card, .step-card, .why-card, .contact-card, .stat');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        obs.observe(el);
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Sync settings from localStorage
    const savedUpi = localStorage.getItem('bk_upi');
    if (savedUpi) SITE_CONFIG.upiId = savedUpi;
    const savedTg = localStorage.getItem('bk_tg');
    if (savedTg) { SITE_CONFIG.telegramUsername = savedTg; SITE_CONFIG.telegramLink = 'https://t.me/' + savedTg; }

    renderServicesPreview();
    initScrollReveal();
});
