// script.js
// config.js уже подключен в HTML
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Модальне вікно "Додано в кошик"
const style = document.createElement('style');
style.textContent = `
#addToCartModal {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
#addToCartModal.active {
  display: flex;
}
.modal-content {
  background: var(--bg, #fff);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.modal-content h3 {
  margin: 0 0 15px 0;
  font-size: 1.2em;
}
.modal-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}
.modal-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 0.9em;
  cursor: pointer;
}
.modal-buttons .continue {
  background: #e0e0e0;
  color: #333;
}
.modal-buttons .go-cart {
  background: var(--accent, #007bff);
  color: white;
}
@media (max-width: 768px) {
  #cartItems { padding: 0 15px; }
  .cart-item { padding: 15px 0; }
  .modal-content { padding: 15px; max-width: 300px; }
  .modal-content h3 { font-size: 1.1em; }
  .modal-buttons button { padding: 8px 16px; font-size: 0.85em; }
}
`;
document.head.appendChild(style);
const addToCartModal = document.createElement('div');
addToCartModal.id = 'addToCartModal';
addToCartModal.innerHTML = `
<div class="modal-content">
  <h3>Товар додано до кошика!</h3>
  <div class="modal-buttons">
    <button class="continue">Продовжити покупки</button>
    <button class="go-cart">До кошика</button>
  </div>
</div>
`;
document.body.appendChild(addToCartModal);
function showAddToCartModal() {
  addToCartModal.classList.remove('active');
  void addToCartModal.offsetWidth;
  addToCartModal.classList.add('active');
}
addToCartModal.addEventListener('click', (e) => {
  if (e.target === addToCartModal || e.target.classList.contains('continue')) {
    addToCartModal.classList.remove('active');
  }
});
addToCartModal.querySelector('.go-cart').addEventListener('click', () => {
  addToCartModal.classList.remove('active');
  window.location.href = 'cart.html#checkoutForm';
});
// Функції кошика (без змін)
function updateColorSelect() {
  const productId = $("#productSelect")?.value;
  const colorSelect = $("#colorSelect");
  if (!colorSelect) return;
  colorSelect.innerHTML = '<option value="">Оберіть колір</option>';
  colorSelect.disabled = !productId;
  if (productId) {
    const product = CONFIG.PRODUCTS.find(p => p.id === productId);
    product?.colors.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.name;
      colorSelect.appendChild(opt);
    });
  }
  updateOrderSummary();
}
function updateOrderSummary() {
  const qty = Number($("#qty")?.value) || 1;
  const productId = $("#productSelect")?.value;
  const product = CONFIG.PRODUCTS.find(p => p.id === productId);
  if ($("#summaryTotal")) {
    const total = (product ? product.price : 0) * qty;
    $("#summaryTotal").textContent = `${total} грн`;
  }
}
function addToCart(newItem) {
  const existing = cart.find(i =>
    i.productId === newItem.productId &&
    i.colorId === newItem.colorId &&
    i.height === newItem.height &&
    i.weight === newItem.weight
  );
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    newItem.quantity = 1;
    newItem.uniqueId = Date.now();
    cart.push(newItem);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  if (window.ttq) {
    const product = CONFIG.PRODUCTS.find(p => p.id === newItem.productId);
    ttq.track('AddToCart', {
      content_id: newItem.productId,
      content_name: product ? product.name : 'Товар',
      content_type: 'product',
      quantity: 1,
      value: product ? Number(product.price) : 0,
      currency: 'UAH'
    });
  }
}
function removeFromCart(uniqueId) {
  cart = cart.filter(i => i.uniqueId !== parseInt(uniqueId));
  localStorage.setItem('cart', JSON.stringify(cart));
  initCart();
  updateCartBadge();
}
function updateCartBadge() {
  const badge = $("#cartBadge");
  if (badge) {
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
}
function flyToCartEffect(imgElement, cartIcon) {
  if (!imgElement || !cartIcon) return;
  const flyingImg = imgElement.cloneNode();
  const rect = imgElement.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();
  Object.assign(flyingImg.style, {
    position: 'fixed',
    left: rect.left + 'px',
    top: rect.top + 'px',
    width: rect.width + 'px',
    height: rect.height + 'px',
    zIndex: '2000',
    transition: 'all 0.8s ease-in-out',
    borderRadius: '50%',
    opacity: '0.8'
  });
  document.body.appendChild(flyingImg);
  requestAnimationFrame(() => {
    Object.assign(flyingImg.style, {
      left: cartRect.left + 'px',
      top: cartRect.top + 'px',
      width: '20px',
      height: '20px',
      opacity: '0'
    });
  });
  setTimeout(() => flyingImg.remove(), 800);
}
function initCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const emptyMsg = document.getElementById('emptyCartMessage');
  const summary = document.getElementById('cartSummary');
  if (!container || !totalEl) return;
  container.innerHTML = '';
  let total = 0;
  if (cart.length === 0) {
    container.style.display = 'none';
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (summary) summary.style.display = 'none';
    if (totalEl) totalEl.textContent = '0 грн';
    return;
  }
  container.style.display = 'grid';
  if (emptyMsg) emptyMsg.style.display = 'none';
  if (summary) summary.style.display = 'block';
  cart.forEach(item => {
    const product = CONFIG.PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;
    const color = product.colors.find(c => c.id === item.colorId) || { name: '—' };
    const qty = item.quantity || 1;
    const itemTotal = product.price * qty;
    total += itemTotal;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
    <img src="${item.image || product.colors[0]?.images[0] || 'images/placeholder.jpg'}" alt="${product.name} (${color.name})">
      <div class="cart-item-info">
        <h3>${product.name} (${color.name})</h3>
        <p>Зріст: ${item.height || '—'} см • Вага: ${item.weight || '—'} кг</p>
        <p class="cart-item-price">${qty} шт × ${product.price} грн = ${itemTotal} грн</p>
      </div>
      <button class="cart-item-remove" data-unique="${item.uniqueId}">Видалити</button>
    `;
    container.appendChild(div);
  });
  totalEl.textContent = `${total} грн`;
  $$('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const uniqueId = btn.dataset.unique;
      const itemEl = btn.closest('.cart-item');
      if (itemEl) {
        itemEl.style.transition = 'all 0.4s ease';
        itemEl.style.opacity = '0';
        itemEl.style.transform = 'translateY(20px)';
        setTimeout(() => {
          removeFromCart(uniqueId);
        }, 400);
      }
    });
  });
}
// DOMContentLoaded — без orderForm
document.addEventListener("DOMContentLoaded", () => {
  // Збереження зріст/вага для product.html
  const heightInput = document.getElementById("product-height");
  const weightInput = document.getElementById("product-weight");
  if (heightInput && weightInput) {
    const savedHeight = localStorage.getItem("userHeight");
    const savedWeight = localStorage.getItem("userWeight");
    if (savedHeight) heightInput.value = savedHeight;
    if (savedWeight) weightInput.value = savedWeight;
    heightInput.addEventListener("input", () => localStorage.setItem("userHeight", heightInput.value));
    weightInput.addEventListener("input", () => localStorage.setItem("userWeight", weightInput.value));
  }
  $$('#year').forEach(el => el.textContent = new Date().getFullYear());
  $$('.btn-telegram').forEach(btn => {
    btn.addEventListener("click", () => window.open(`https://t.me/${CONFIG.CONTACT.TG_USERNAME}`, "_blank"));
  });
  $$('.btn-viber').forEach(btn => {
    btn.addEventListener("click", () => window.open(CONFIG.CONTACT.VIBER_INVITE, "_blank"));
  });
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html') {
    const featuredGrid = $("#featuredGrid");
    if (featuredGrid) buildCatalog(CONFIG.PRODUCTS.slice(0, 3), featuredGrid, true);
    const productSelect = $("#productSelect");
    if (productSelect) {
      productSelect.innerHTML = '<option value="">Оберіть товар</option>';
      CONFIG.PRODUCTS.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.name;
        productSelect.appendChild(opt);
      });
      productSelect.addEventListener("change", updateColorSelect);
      updateColorSelect();
      selectProduct(CONFIG.PRODUCTS[0].id);
      updateOrderSummary();
    }
  } else if (page === 'catalog.html') {
    const catalogGrid = $("#catalogGrid");
    if (catalogGrid) buildCatalog(CONFIG.PRODUCTS, catalogGrid);
  } else if (page === 'product.html') {
    initProduct();
  } else if (page === 'cart.html') {
    initCart();
  }
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    // === RESTORE HEIGHT & WEIGHT (GLOBAL) ===
const savedHeight = localStorage.getItem("userHeight");
const savedWeight = localStorage.getItem("userWeight");
if (savedHeight && document.getElementById("height")) {
  document.getElementById("height").value = savedHeight;
}
if (savedWeight && document.getElementById("weight")) {
  document.getElementById("weight").value = savedWeight;
}
    });
  }
  updateCartBadge();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  $$(".fade-in").forEach(el => observer.observe(el));
  $$(".anchor-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = $("#size-selection") || $("#order");
    const offset = window.innerWidth < 768 ? 90 : 140;
const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
window.scrollTo({
  top: y,
  behavior: "smooth"
});
    });
  });

  setTimeout(() => createTimerBanner(), 4000);
});
// buildCatalog (с защитой от null)
function buildCatalog(products, grid, isFeatured = false) {
  if (!grid) return; // ← главное исправление
  products.forEach(p => {
    const firstColor = p.colors[0] || { name: "Стандарт", images: ["images/placeholder.jpg"] };
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
<img src="${firstColor.images[0]}" alt="${p.name}">
<div class="meta">
<div class="name">${p.name}</div>
<div class="price">
${p.old_price ? `<span class="old-price">${p.old_price} грн</span>` : ''}
<span class="new-price">${p.price} грн</span>
</div>
</div>
`;
    grid.appendChild(card);
    card.addEventListener("click", () => window.location.href = `product.html?id=${p.id}`);
  });
}
// initProduct — фінальна акуратна версія
function initProduct() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  if (!productId) return;
  const product = CONFIG.PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  /* =========================
    Основна інформація
  ========================= */
  const titleEl = document.getElementById("productTitle");
  const descEl = document.getElementById("productDescription");
  const priceEl = document.getElementById("productPrice");
  if (titleEl) titleEl.textContent = product.name;
  if (descEl) descEl.textContent = product.description;
  if (priceEl) {
priceEl.innerHTML = `
  ${product.old_price ? `<span class="old-price">${product.old_price}</span>` : ""}
  <span class="new-price">${product.price}</span>
`;
  }
  /* =========================
    Переваги товару
  ========================= */
const featuresList = document.getElementById("productFeatures");
if (featuresList) {
  featuresList.innerHTML = "";
  featuresList.className = "advantages-card";
  // Додаємо виділену строчку "Опис"
  const descTitle = document.createElement("div");
  descTitle.className = "features-title";
  descTitle.textContent = "Опис";
  featuresList.appendChild(descTitle);
  // Потім додаємо список переваг
  (product.features || []).forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    featuresList.appendChild(li);
  });
}
  /* =========================
    Ховаємо зріст / вагу для шапок
  ========================= */
  const noSizeProducts = ["balaklava", "shapka-baf"];
  if (noSizeProducts.includes(productId)) {
    const formRow = document.querySelector(".form-row");
    if (formRow) formRow.style.display = "none";
  }
  /* =========================
    Selling block + таблиця
  ========================= */
  const sellingBlock = document.getElementById("sellingBlock");
  const sizeTable = document.getElementById("sizeTable");
  if (sellingBlock) {
    sellingBlock.style.display = "none";
    sellingBlock.innerHTML = "";
  }
  if (sizeTable) {
    sizeTable.style.display = "none";
    sizeTable.innerHTML = "";
  }
/* =========================
  PLUSH — Royal Prime
========================= */
if (productId === "plush") {
  // sellingBlock повністю закоментовано / видалено
  /*
  if (sellingBlock) {
    sellingBlock.innerHTML = `...весь попередній великий блок...`;
    sellingBlock.style.display = "block";
    sellingBlock.style.marginBottom = "80px";
  }
  */
  // Залишаємо ТІЛЬКИ таблицю розмірів
  if (sizeTable) {
    sizeTable.innerHTML = `
      <h3 style="text-align:center; margin-bottom:16px;">Таблиця розмірів Royal Prime</h3>
      <table style="margin: 0 auto;">
        <tr>
          <th>Розмір</th>
          <th>Груди (см)</th>
          <th>Довжина спини (см)</th>
          <th>Довжина штанів (см)</th>
          <th>Стегна (см)</th>
        </tr>
        <tr><td>S</td><td>107</td><td>71</td><td>100</td><td>100</td></tr>
        <tr><td>M</td><td>112</td><td>71</td><td>102</td><td>104</td></tr>
        <tr><td>L</td><td>117</td><td>73</td><td>104</td><td>108</td></tr>
        <tr><td>XL</td><td>122</td><td>74</td><td>106</td><td>112</td></tr>
        <tr><td>XXL</td><td>130</td><td>76</td><td>108</td><td>118</td></tr>
        <tr><td>3XL</td><td>138</td><td>78</td><td>110</td><td>124</td></tr>
      </table>
      <p style="margin-top:16px; font-size:0.95em; text-align:center; color:#555;">
        Не впевнені в розмірі? Вкажіть зріст і вагу — менеджер підбере ідеальний варіант за 5 хвилин
      </p>
    `;
    sizeTable.style.display = "block";
  }
}
  /* =========================
    ZAMSH
  ========================= */
  if (productId === "zamsh-na-zmiyci") {
    if (sellingBlock) {
      sellingBlock.innerHTML = `
        <h3>Чому обирають Velvet?</h3>
        <ul class="advantages-card">
          <li>💎 Сучасний замшевий текстиль</li>
          <li>🧺 Легкий у догляді, не втрачає форму</li>
          <li>❤️ Комфортний при щоденному носінні</li>
          <li>🚀 Швидка доставка + гарантія повернення</li>
          <li>🏆 Перевірено сотнями клієнтів</li>
        </ul>
        <div class="urgency-badge">🔥 Акція: −33% • Обмежена кількість</div>
      `;
      sellingBlock.style.display = "block";
      sellingBlock.style.marginBottom = "120px";
    }
    if (sizeTable) {
      sizeTable.innerHTML = `
        <h3>Таблиця розмірів</h3>
        <table>
          <tr><th>Розмір</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>2XL</th></tr>
          <tr><td>Довжина кофти</td><td>65</td><td>66</td><td>67</td><td>68</td><td>69</td></tr>
          <tr><td>Довжина рукава</td><td>64</td><td>65</td><td>66</td><td>67</td><td>68</td></tr>
          <tr><td>Груди</td><td>112</td><td>116</td><td>120</td><td>124</td><td>128</td></tr>
          <tr><td>Пояс</td><td>70</td><td>72</td><td>74</td><td>76</td><td>78</td></tr>
          <tr><td>Брюки</td><td>100</td><td>102</td><td>104</td><td>106</td><td>108</td></tr>
        </table>
      `;
      sizeTable.style.display = "block";
    }
  }
  /* =========================
    Кольори та фото
  ========================= */
  selectProduct(productId);
// ───────────────────────────────────────────────────────────────
// Фото від клієнтів — карусель (на основі твого робочого коду)
// ───────────────────────────────────────────────────────────────
const photosBlock = document.getElementById('clientPhotosBlock');
if (photosBlock) {
    photosBlock.innerHTML = ''; // завжди очищаємо спочатку

    if (product && CLIENT_PHOTOS && product.id in CLIENT_PHOTOS) {
        const photos = CLIENT_PHOTOS[product.id];

        if (photos && photos.length > 0) {
            // Створюємо слайди
            let slidesHTML = photos.map(src => `
                <div class="carousel-slide">
                    <img src="${src}" alt="Фото клієнта" loading="lazy">
                </div>
            `).join('');

            // Точки (індикатори)
            let dotsHTML = photos.map((_, i) => `
                <span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
            `).join('');

            photosBlock.innerHTML = `
                <div class="client-photos-block">
                    <h3>Дякуємо за ваші відгуки!</h3>
                    <div class="photos-carousel">
                        <div class="photos-carousel-inner">
                            ${slidesHTML}
                        </div>
                        <button class="reviews-prev"><i class="fas fa-chevron-left"></i></button>
                        <button class="reviews-next"><i class="fas fa-chevron-right"></i></button>
                        <div class="carousel-dots">
                            ${dotsHTML}
                        </div>
                    </div>
                </div>
            `;

            // Управління каруселлю
            const inner = photosBlock.querySelector('.photos-carousel-inner');
            const prevBtn = photosBlock.querySelector('.reviews-prev');
            const nextBtn = photosBlock.querySelector('.reviews-next');
            const dots = photosBlock.querySelectorAll('.carousel-dot');

            let currentIndex = 0;

            function showSlide(index) {
                inner.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
                currentIndex = index;
            }

            prevBtn.addEventListener('click', () => {
                let idx = currentIndex - 1;
                if (idx < 0) idx = photos.length - 1;
                showSlide(idx);
            });

            nextBtn.addEventListener('click', () => {
                let idx = currentIndex + 1;
                if (idx >= photos.length) idx = 0;
                showSlide(idx);
            });

            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => showSlide(i));
            });
        }
    }
}
}
// selectProduct & selectColor (единственная версия)
let activeProduct, activeImages = [], currentIndex = 0;
function selectProduct(id) {
  activeProduct = CONFIG.PRODUCTS.find(p => p.id === id);
  if (!activeProduct) return;
  const swatches = $("#swatches");
  if (!swatches) return;
  swatches.innerHTML = "";
  activeProduct.colors.forEach((c, i) => {
    const sw = document.createElement("button");
    sw.className = "swatch";
    sw.style.background = c.hex;
    sw.dataset.id = c.id;
    if (i === 0) sw.classList.add("active");
    swatches.appendChild(sw);
    sw.addEventListener("click", () => selectColor(c.id));
  });
  if (activeProduct.colors.length > 0) {
    selectColor(activeProduct.colors[0].id);
  }
  if ($("#heroPrice")) {
    $("#heroPrice").innerHTML = `
      ${activeProduct.old_price ? `<span class="old-price">${activeProduct.old_price} грн</span>` : ''}
      <span class="new-price">${activeProduct.price} грн</span>
    `;
  }
}
// Оновлення обраного кольору + фото + кнопки prev/next
function selectColor(id) {
  const color = activeProduct.colors.find(c => c.id === id);
  if (!color) return;
  // Активний свотч
  $$(".swatch").forEach(s => s.classList.toggle("active", s.dataset.id === id));
  // Зберігаємо масив зображень кольору
  activeImages = color.images || ["images/placeholder.jpg"];
  currentIndex = 0;
  // Попереднє завантаження зображень (оптимізація)
  activeImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  updateMainImage();
  // Оновлюємо блок "Обраний колір" (гарний вигляд з кружечком)
  let displayEl = document.querySelector(".selected-color-display");
  if (!displayEl) {
    // Якщо блоку ще немає — створюємо його один раз
    displayEl = document.createElement("div");
    displayEl.className = "selected-color-display";
    const preview = document.createElement("div");
    preview.className = "color-preview";
    preview.id = "colorPreview";
    const nameSpan = document.createElement("span");
    nameSpan.id = "selectedColorName";
    displayEl.appendChild(preview);
    displayEl.appendChild(nameSpan);
    // Вставляємо після swatches
    const swatchesParent = $("#swatches")?.parentNode;
    if (swatchesParent) swatchesParent.appendChild(displayEl);
  }
  // Оновлюємо текст і колір кружечка
  const nameEl = document.getElementById("selectedColorName");
  const previewEl = document.getElementById("colorPreview");
  if (nameEl) {
    nameEl.textContent = `Обраний колір: ${color.name}`;
  }
  if (previewEl && color.hex) {
    previewEl.style.backgroundColor = color.hex;
  }
  // Прив'язуємо кнопки prev/next (якщо є)
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  if (prevBtn && nextBtn) {
    // Знімаємо старі обробники, щоб не дублювалися
    prevBtn.onclick = null;
    nextBtn.onclick = null;
    prevBtn.onclick = () => {
      currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
      updateMainImage();
    };
    nextBtn.onclick = () => {
      currentIndex = (currentIndex + 1) % activeImages.length;
      updateMainImage();
    };
  }
}
// Оновлення головного зображення з плавним переходом
function updateMainImage() {
  const main = $("#mainImage");
  if (!main || activeImages.length === 0) return;
  main.style.opacity = "0.4"; // трохи сильніше затемнення для ефекту
  const img = new Image();
  img.src = activeImages[currentIndex];
  img.onload = () => {
    main.src = img.src;
    main.style.opacity = "1";
  };
  // Якщо зображення вже завантажене — швидке оновлення
  if (img.complete) {
    main.src = img.src;
    main.style.opacity = "1";
  }
}
// Swipe for images
document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("mainImage");
  if (mainImg) {
    let startX = 0;
    mainImg.addEventListener("touchstart", (e) => startX = e.touches[0].clientX, { passive: true });
    mainImg.addEventListener("touchend", (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        currentIndex = diff > 0 ? (currentIndex + 1) % activeImages.length : (currentIndex - 1 + activeImages.length) % activeImages.length;
        updateMainImage();
      }
    }, { passive: true });
  }
});
// Timer banner
function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  let diff = midnight - now;
  if (diff < 0) diff = 0;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds, totalMs: diff };
}
function formatTimer({ hours, minutes, seconds }) {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function createTimerBanner() {
  // 1. Перевірка кошика — якщо щось є, банер НЕ показуємо
  if (cart.length > 0) return;
  // 2. Лічильник візитів (кожна 3-тя)
  let visitCount = parseInt(localStorage.getItem('timerVisitCount') || '0', 10);
  visitCount += 1;
  localStorage.setItem('timerVisitCount', visitCount);
  if ((visitCount - 1) % 3 !== 0) return; // не кожна 3-тя — виходимо
  // 3. Визначаємо, куди скролити
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  let targetId = 'orderForm'; // за замовчуванням — форма на головній
  let scrollText = 'Знайти розмір'; // текст кнопки
if (currentPage === 'product.html') {
  targetId = 'product-size-selection'; // ← новий правильний id
  scrollText = 'Підібрати розмір';
}
  // Якщо цільового блоку немає на сторінці — банер не показуємо
  if (!document.getElementById(targetId)) return;
  // 4. Створюємо банер
  const banner = document.createElement('div');
  banner.id = 'timer-banner';
  banner.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; right: 0; background: linear-gradient(135deg, #ff3b30, #ff6b6b); color: white; padding: 12px 16px; font-size: 15px; font-weight: 600; z-index: 9999; box-shadow: 0 4px 16px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span>Обмежена кількість • Акція до кінця доби • Залишилось:</span>
        <strong id="timer-display" style="font-size:17px; background:rgba(0,0,0,0.25); padding:6px 12px; border-radius:8px;">00:00:00</strong>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <button id="action-timer-btn" style="background: white; color: #ff3b30; border: none; padding: 8px 16px; border-radius: 24px; font-weight: bold; cursor: pointer; font-size: 14px;">${scrollText}</button>
        <button id="close-timer-btn" style="background: transparent; color: white; border: 1px solid white; padding: 6px 12px; border-radius: 20px; cursor: pointer; font-size: 14px;">×</button>
      </div>
    </div>
  `;
  document.body.prepend(banner);
  // 5. Обробник кнопки "Знайти/Підібрати"
  document.getElementById('action-timer-btn').onclick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    // динамічний відступ (враховуємо хедер + запас)
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
    const extra = window.innerWidth < 768 ? 30 : 60; // мобілка / десктоп
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - extra;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    // прибираємо банер після кліку
    banner.remove();
  };
  // 6. Закриття банера
  document.getElementById('close-timer-btn').onclick = () => banner.remove();
  // 7. Таймер до півночі
  const timerDisplay = document.getElementById('timer-display');
  const interval = setInterval(() => {
    const time = getTimeUntilMidnight();
    timerDisplay.textContent = formatTimer(time);
    if (time.totalMs <= 0) {
      clearInterval(interval);
      banner.remove();
    }
  }, 1000);
}
// ───────────────────────────────────────────────────────────────
// QUICK ORDER (product.html) — швидке замовлення
// ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const quickBtn = document.getElementById("quickOrderBtn");
  const codBtn = document.getElementById("codOrderBtn");
  const quickModal = document.getElementById("quickOrderModal");
  if (!quickBtn || !quickModal) return;
  const closeBtn = document.getElementById("closeQuickModal");
  const sendBtn = document.getElementById("sendQuickOrder");
  const phoneInput = document.getElementById("quickPhone");
  quickBtn.addEventListener("click", () => {
    phoneInput.value = "";
    quickModal.classList.add("active");
  });
  closeBtn.addEventListener("click", () => quickModal.classList.remove("active"));
  sendBtn.addEventListener("click", async () => {
    const phone = phoneInput.value.trim();
    if (!phone) {
      alert("Введіть номер телефону");
      return;
    }
    const productName = document.getElementById("productTitle")?.textContent?.trim() || "Товар";
    const colorName = document.getElementById("selectedColorName")?.textContent?.replace("Обраний колір: ", "")?.trim() || "—";
    const payload = {
      type: "quick",
      phone,
      product: productName,
      color: colorName
    };

  });
  // Кнопка "Замовити накладеним платежем" → перехід на головну з параметром
  if (codBtn) {
    codBtn.addEventListener("click", () => {
      const productName = document.getElementById("productTitle")?.textContent?.trim() || "Товар";
      const colorName = document.getElementById("selectedColorName")?.textContent?.replace("Обраний колір: ", "")?.trim() || "—";
      localStorage.setItem("orderProduct", productName);
      localStorage.setItem("orderColor", colorName);
      window.location.href = "index.html?scroll=order#order-form";
    });
  }
});
// ───────────────────────────────────────────────────────────────
// CHECKOUT FORM (cart.html) — готовий блок з ✅ і 😊
// ───────────────────────────────────────────────────────────────
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 1. Отримуємо всі дані з форми
        const formData = new FormData(checkoutForm);
        const rawData = Object.fromEntries(formData.entries());

        // 2. Деталі кошика (без змін)
        let cartDetails = 'Кошик порожній';
        if (Array.isArray(cart) && cart.length > 0) {
            cartDetails = cart.map(item => {
                const product = CONFIG.PRODUCTS.find(p => p.id === item.productId);
                const name = product?.name || 'Товар';
                const color = product?.colors.find(c => c.id === item.colorId)?.name || '—';
                return `
Товар: ${name}
Колір: ${color}
Зріст: ${item.height || '—'} см
Вага: ${item.weight || '—'} кг
Кількість: ${item.quantity || 1} шт
────────────────────
                `.trim();
            }).join('\n\n');
        }

        // 3. Коментар і галочка — повертаємо оригінальні ✅ і 😊
        const commentText = (rawData.comment || '').trim();
        const noContact = formData.get('noContact') === 'on';

        let finalComment = '';

        // Якщо галочка стоїть — додаємо ✅ на початку
        if (noContact) {
            finalComment += '✅ ';
        }

        // Якщо є текст коментаря — додаємо 😊 перед ним
        if (commentText) {
            finalComment += '😊 ' + commentText;
        }

        // Якщо нічого не було — залишаємо порожнім (або можеш додати дефолт)
        // finalComment = finalComment.trim() || '';

        // 4. Формуємо payload — ВСІ поля + наші доповнення
        const payload = {
            ...rawData,                     // усі поля форми (name, phone, city, postOffice, comment тощо)
            noContact: noContact,           // галочка як true/false (для Worker)
            comment: finalComment,          // готовий коментар з ✅ 😊
            cart_details: cartDetails,
            source: 'Кошик (cart.html)',
            timestamp: new Date().toISOString()
        };

        // ЛОГ — ОБОВ'ЯЗКОВО подивись у консолі браузера (F12)
        console.log('Відправляємо з кошика:', JSON.stringify(payload, null, 2));

        try {
            const res = await fetch('https://pleasework.skyron-ua.workers.dev', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Worker error:', errorText);
                throw new Error(`HTTP ${res.status}: ${errorText}`);
            }

            alert('Дякуємо за замовлення! Ми незабаром з вами звʼяжемось😊');

            // Очищення кошика
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
            initCart();
            checkoutForm.reset();

        } catch (err) {
            console.error('Помилка відправки кошика:', err);
            alert('Не вдалося відправити.\nПеревірте інтернет або напишіть в Telegram.');
        }
    });
}
// МОДАЛКИ: Швидке замовлення + Вибір після бронювання розміру (оновлено 2025)
document.addEventListener("DOMContentLoaded", () => {
  const quickBtn       = document.getElementById("quickOrderBtn");
  const reserveBtn     = document.getElementById("reserveBtn");
  const quickModal     = document.getElementById("quickOrderModal");
  const choiceModal    = document.getElementById("choiceModal");
  const heightInput    = document.getElementById("product-height");
  const weightInput    = document.getElementById("product-weight");
  const phoneInput     = document.getElementById("quickPhone");

  if (!quickBtn || !reserveBtn || !quickModal || !choiceModal) return;

  // Збереження / відновлення зріст + вага
  if (heightInput && weightInput) {
      heightInput.value = localStorage.getItem("userHeight") || "";
      weightInput.value = localStorage.getItem("userWeight") || "";

      const saveSize = () => {
          localStorage.setItem("userHeight", heightInput.value.trim());
          localStorage.setItem("userWeight", weightInput.value.trim());
      };

      heightInput.addEventListener("input", saveSize);
      weightInput.addEventListener("input", saveSize);
  }

  // Функція заповнення прев’ю в модалках
  function fillPreview(modalType = "choice") {
      const prefix = modalType === "quick" ? "" : "Choice";

      const imgEl   = document.getElementById(`previewImage${prefix}`);
      const titleEl = document.getElementById(`previewTitle${prefix}`);
      const priceEl = document.getElementById(`previewPrice${prefix}`);

      if (!imgEl || !titleEl || !priceEl) return;

      const mainImgSrc = document.getElementById("mainImage")?.src 
          || "https://placehold.co/80x120?text=Product";

      const titleText = document.getElementById("productTitle")?.textContent?.trim() 
          || "Товар";

      let priceText = "0 грн";
      const priceBlock = document.getElementById("productPrice");
      if (priceBlock) {
          const newPrice = priceBlock.querySelector(".new-price");
          priceText = newPrice 
              ? newPrice.textContent.trim() + " грн"
              : priceBlock.textContent.trim().replace(/\s+/g, " ");
      }

      imgEl.src = mainImgSrc;
      titleEl.textContent = titleText;
      priceEl.textContent = priceText;
  }

  // Маска телефону +38 (___) ___-__-__
  if (phoneInput) {
      phoneInput.addEventListener("input", (e) => {
          let value = e.target.value.replace(/\D/g, "");

          if (value.startsWith("38")) value = value.substring(2);
          value = value.substring(0, 10);

          let formatted = "+38";

          if (value.length > 0) formatted += " (" + value.substring(0, 3);
          if (value.length > 3) formatted += ") " + value.substring(3, 6);
          if (value.length > 6) formatted += "-" + value.substring(6, 8);
          if (value.length > 8) formatted += "-" + value.substring(8, 10);

          e.target.value = formatted;

          const len = formatted.length;
          e.target.setSelectionRange(len, len);
      });

      phoneInput.addEventListener("focus", (e) => {
          if (!e.target.value.trim() || e.target.value === "+38") {
              e.target.value = "+38 ";
              e.target.setSelectionRange(5, 5);
          }
      });

      phoneInput.addEventListener("blur", (e) => {
          if (e.target.value === "+38 " || e.target.value === "+38") {
              e.target.value = "";
          }
      });
  }

  // Швидке замовлення
  quickBtn.addEventListener("click", () => {
      fillPreview("quick");
      if (phoneInput) phoneInput.value = phoneInput.value || "";
      quickModal.style.display = "flex";
      if (phoneInput) phoneInput.focus();
  });

  document.getElementById("closeQuickModal")?.addEventListener("click", () => {
      quickModal.style.display = "none";
  });
  quickModal.addEventListener("click", e => {
      if (e.target === quickModal) quickModal.style.display = "none";
  });

  // Забронювати розмір
  reserveBtn.addEventListener("click", () => {
      const h = parseInt(heightInput?.value?.trim() || "0", 10);
      const w = parseInt(weightInput?.value?.trim() || "0", 10);

      if (isNaN(h) || isNaN(w) || h < 140 || h > 220 || w < 35 || w > 150) {
          alert("Будь ласка, введіть коректний зріст (140–220 см) та вагу (35–150 кг)");
          document.getElementById("product-size-selection")?.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
      }

      fillPreview("choice");
      addToCartFromProductPage({ source: "reserve-btn" });
      choiceModal.style.display = "flex";
  });

  document.getElementById("choiceClose")?.addEventListener("click", () => {
      choiceModal.style.display = "none";
  });
  choiceModal.addEventListener("click", e => {
      if (e.target === choiceModal) choiceModal.style.display = "none";
  });

  document.getElementById("choiceQuickBtn")?.addEventListener("click", () => {
      choiceModal.style.display = "none";
      fillPreview("quick");
      quickModal.style.display = "flex";
      if (phoneInput) phoneInput.focus();
  });

  document.getElementById("choiceCartBtn")?.addEventListener("click", () => {
      choiceModal.style.display = "none";
      window.location.href = "cart.html#checkoutForm";
  });

  // Відправка швидкого замовлення
  document.getElementById("sendQuickOrder")?.addEventListener("click", async () => {
      const phoneRaw = phoneInput?.value?.replace(/\D/g, "") || "";
      if (phoneRaw.length < 10) {
          alert("Введіть повний номер телефону");
          phoneInput?.focus();
          return;
      }

      const payload = {
          type: "quick",
          phone: "+" + phoneRaw,
          product: document.getElementById("productTitle")?.textContent?.trim() || "Товар",
          color: document.getElementById("selectedColorName")?.textContent?.replace("Обраний колір: ", "").trim() || "—",
          height: heightInput?.value?.trim() || "—",
          weight: weightInput?.value?.trim() || "—",
          source: "product-quick"
      };

      try {
          const res = await fetch("https://pleasework.skyron-ua.workers.dev", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
          });

          if (res.ok) {
              alert("Дякуємо! Ми зв'яжемося з вами протягом 5 хвилин.");
              quickModal.style.display = "none";
              if (phoneInput) phoneInput.value = "";
          } else {
              alert("Помилка. Спробуйте ще раз або напишіть у Telegram.");
          }
      } catch (err) {
          alert("Не вдалося відправити. Перевірте інтернет.");
          console.error(err);
      }
  });
});

// Функція додавання в кошик (без змін, але з захистом)
function addToCartFromProductPage({ source } = {}) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) {
    console.log("Товар не знайдено. Оновіть сторінку.");
    return;
  }

  const height = document.getElementById("product-height")?.value.trim();
  const weight = document.getElementById("product-weight")?.value.trim();
  const qty = Number(document.getElementById("qty")?.value) || 1;
  const activeSwatch = document.querySelector(".swatch.active");
  const colorId = activeSwatch?.dataset.id || "";

  if (!colorId) {
    if (source !== "sticky") alert("Будь ласка, оберіть колір товару");
    const swatches = document.getElementById("swatches");
    if (swatches) swatches.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

// Беремо поточне фото з головної картинки (саме те, яке зараз видно користувачу)
const selectedImage = document.getElementById("mainImage")?.src 
    || "https://placehold.co/600x800?text=No+Image";

// Додаємо товар разом із цим фото
addToCart({
    productId,
    colorId,
    height,
    weight,
    quantity: qty,
    image: selectedImage   // ← це найголовніше!
});

  // Показуємо модалку "Додано в кошик" ТІЛЬКИ якщо НЕ бронювання
  if (source !== "reserve-btn") {
    showAddToCartModal();
  }

  // Ефект польоту + тост + оновлення бейджа
  const mainImg = document.getElementById("mainImage");
  const cartLink = document.querySelector(".cart-link");
  if (mainImg && cartLink) flyToCartEffect(mainImg, cartLink);
  updateCartBadge();
  showToast("Товар додано в кошик!");

  // Очищення полів
  const heightField = document.getElementById("product-height");
  const weightField = document.getElementById("product-weight");
  const qtyField = document.getElementById("qty");
  if (heightField) heightField.value = "";
  if (weightField) weightField.value = "";
  if (qtyField) qtyField.value = "1";
  localStorage.removeItem("userHeight");
  localStorage.removeItem("userWeight");
}
// ───────────────────────────────────────────────────────────────
// TOAST-СПОВІЩЕННЯ
// ───────────────────────────────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById("toastNotification");
  if (toast) {
    toast.classList.remove("show");
    toast.style.opacity = "0";
    void toast.offsetWidth; // force reflow
    clearTimeout(toast.timeoutId);
  } else {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.classList.add("show");
  }, 10);
  toast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
    toast.style.opacity = "0";
  }, 3500);
}
// ───────────────────────────────────────────────────────────────
// ФІКС СКРОЛУ ПІСЛЯ ПЕРЕХОДУ З product.html → index.html
// ───────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const needScroll = urlParams.has('scroll') ||
                    window.location.hash === '#order-form' ||
                    window.location.hash === '#orderForm';
  if (needScroll) {
    setTimeout(() => {
      const target = document.getElementById('orderForm');
      if (!target) return;
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
      const extraPadding = 120;
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraPadding;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }, 450);
  }
});
// ───────────────────────────────────────────────────────────────
// ЗБЕРЕЖЕННЯ ЗРІСТ / ВАГА ПРИ ВВОДІ (для всіх сторінок)
// ───────────────────────────────────────────────────────────────
document.addEventListener("input", function (e) {
  const target = e.target;
  if (target.id === "product-height" || target.id === "height") {
    localStorage.setItem("userHeight", target.value.trim());
  }
  if (target.id === "product-weight" || target.id === "weight") {
    localStorage.setItem("userWeight", target.value.trim());
  }
});
window.addEventListener('load', () => {
  if (window.location.hash === '#checkoutForm') {
    setTimeout(() => {
      const target = document.getElementById('checkoutForm');
      if (target) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 40;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
  }
});
// Приклад: де ти зараз встановлюєш ціну
function updateHeroPrice(price) {
  const priceStr = price + " грн";
 
  const el1 = document.getElementById("heroPrice");
  const el2 = document.getElementById("heroPriceMobile");
 
  if (el1) el1.textContent = priceStr;
  if (el2) el2.textContent = priceStr;
}
// Викликати, наприклад:
updateHeroPrice(1690); 
