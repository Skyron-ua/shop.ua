// script.js
// config.js вже підключений в HTML, тому CONFIG доступний глобально

/* Helpers */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const encode = s => encodeURIComponent(s);

/* Cart */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* Стилі для модалки */
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

.actions { gap: 20px !important; }

@media (max-width: 768px) {
#cartItems { padding: 0 15px; }
.cart-item { padding: 15px 0; }
.modal-content {
padding: 15px;
max-width: 300px;
}
.modal-content h3 {
font-size: 1.1em;
}
.modal-buttons button {
padding: 8px 16px;
font-size: 0.85em;
}
}
`;
document.head.appendChild(style);

/* Модалка додавання в кошик */
const addToCartModal = document.createElement('div');
addToCartModal.id = 'addToCartModal';
addToCartModal.innerHTML = `
<div class="modal-content">
<h3>Товар додано до кошика</h3>
<div class="modal-buttons">
<button class="continue">Продовжити</button>
<button class="go-cart">До кошика</button>
</div>
</div>
`;
document.body.appendChild(addToCartModal);

function showAddToCartModal() {
addToCartModal.classList.add('active');
}

addToCartModal.addEventListener('click', (e) => {
if (e.target === addToCartModal || e.target.classList.contains('continue')) {
addToCartModal.classList.remove('active');
}
});
addToCartModal.querySelector('.go-cart').addEventListener('click', () => {
addToCartModal.classList.remove('active');
window.location.href = 'cart.html';
});

/* ──────────────── ФУНКЦІЇ ──────────────── (визначені ВИЩЕ виклику) */

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

function setupForm() {
  const form = $("#orderForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = gatherForm();
    if (!data) return;

    const text = `🚀 НОВЕ ЗАМОВЛЕННЯ (ФОРМА):\nТовар: ${data.productName}\nКолір: ${data.colorName}\nЗріст: ${data.height} см\nВага: ${data.weight} кг\nКількість: ${data.qty}\n----\nКлієнт: ${data.fullName}\nТел: ${data.phone}\nМісто: ${data.city}\nВідділення: ${data.postOffice}`;

    await sendToTelegram(text);
    alert("Дякуємо! Менеджер звʼяжеться з вами.");
    form.reset();
    updateOrderSummary();
  });

  ["#height", "#weight", "#qty", "#colorSelect", "#productSelect", "#fullName", "#phone", "#city", "#postOffice"].forEach(sel => {
    const el = $(sel);
    if (el) el.addEventListener("input", updateOrderSummary);
  });
}

function gatherForm() {
  const fields = {
    height: $("#height")?.value,
    weight: $("#weight")?.value,
    qty: Number($("#qty")?.value) || 1,
    fullName: $("#fullName")?.value,
    phone: $("#phone")?.value,
    city: $("#city")?.value,
    postOffice: $("#postOffice")?.value,
    productId: $("#productSelect")?.value,
    colorId: $("#colorSelect")?.value
  };

  if (Object.values(fields).some(v => !v)) {
    alert("Заповніть усі поля.");
    return null;
  }

  const product = CONFIG.PRODUCTS.find(p => p.id === fields.productId);
  const color = product?.colors.find(c => c.id === fields.colorId);
  return { ...fields, productName: product.name, colorName: color.name, price: product.price };
}

async function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CONFIG.CHAT_ID, text: message })
    });
  } catch (error) {
    console.error("Telegram Error:", error);
  }
}

function addToCart(item) {
  item.uniqueId = Date.now();
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
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
    const count = cart.length;
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

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  $$('#year').forEach(el => el.textContent = new Date().getFullYear());

  $$('.btn-telegram').forEach(btn => {
    if (btn) btn.addEventListener("click", () => window.open(`https://t.me/${CONFIG.CONTACT.TG_USERNAME}`, "_blank"));
  });
  $$('.btn-viber').forEach(btn => {
    if (btn) btn.addEventListener("click", () => window.open(CONFIG.CONTACT.VIBER_INVITE, "_blank"));
  });

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html') {
    if (typeof initHome === 'function') initHome();
  }
  else if (page === 'catalog.html') {
    if (typeof initCatalog === 'function') initCatalog();
  }
  else if (page === 'product.html') {
    if (typeof initProduct === 'function') initProduct();
  }
  else if (page === 'cart.html') {
    if (typeof initCart === 'function') initCart();
  }

  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    });
  }

  updateCartBadge();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  $$(".fade-in").forEach(el => observer.observe(el));

  // ЯКОРНА КНОПКА — скрол на #size-selection або #order
  $$(".anchor-btn").forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = $("#size-selection") || $("#order");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  });

  // ЛИПКА КНОПКА — тільки на product.html
  const stickyBtn = $("#stickyAddToCart");
  if (stickyBtn) {
    const stickyButton = stickyBtn.querySelector("button");
    if (stickyButton) {
      stickyButton.addEventListener("click", () => {
        const target = $("#size-selection") || $("#order");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }
});

/* Home */
function initHome() {
  buildCatalog(CONFIG.PRODUCTS.slice(0, 3), $("#featuredGrid"), true);
  const productSelect = $("#productSelect");
  productSelect.innerHTML = '<option value="">Оберіть товар</option>';
  CONFIG.PRODUCTS.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    productSelect.appendChild(opt);
  });
  productSelect.addEventListener("change", updateColorSelect);
  updateColorSelect();
  selectProduct(CONFIG.PRODUCTS[0].id); // hero image
  setupForm();
  updateOrderSummary();
}

/* Catalog */
function initCatalog() {
  buildCatalog(CONFIG.PRODUCTS, $("#catalogGrid"));
}

function buildCatalog(products, grid) {
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

/* Product */
function initProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = CONFIG.PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  $("#productTitle").textContent = product.name;
  $("#productDescription").textContent = product.description;
  $("#productPrice").innerHTML = `${product.old_price ? `<span class="old-price">${product.old_price} грн</span>` : ''} <span class="new-price">${product.price} грн</span>`;

  const featuresList = $("#productFeatures");
  featuresList.innerHTML = '';
  product.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featuresList.appendChild(li);
  });

  const hatIds = ['balaklava', 'shapka-baf'];
  const isHat = hatIds.includes(productId);
  if (isHat) {
    const formRow = document.querySelector('.form-row');
    if (formRow) formRow.style.display = 'none';
  }

  const sellingBlock = document.getElementById("sellingBlock");
  const sizeTable = document.getElementById("sizeTable");
  const anchorBlock = document.getElementById("anchorBlock");

  if (sellingBlock) sellingBlock.style.display = "none";
  if (sizeTable) sizeTable.style.display = "none";
  if (anchorBlock) anchorBlock.style.display = "block";

  if (productId === "plush") {
    if (sellingBlock) {
      sellingBlock.innerHTML = `
        <h3>Чому обирають Royal Prime?</h3>
        <ul>
          <li>🔥 Щільний фліс преміум-класу — зберігає тепло</li>
          <li>💎 Не кошлатиться після прання</li>
          <li>🎨 Колір не вицвітає з часом</li>
          <li>🚀 Швидка доставка + гарантія повернення</li>
          <li>🏆 Понад 500 задоволених клієнтів — хіт сезону</li>
        </ul>
        <div class="urgency-badge">🔥 Акція: −34% • Кількість обмежена</div>
      `;
      sellingBlock.style.display = "block";
    }

    if (sizeTable) {
      sizeTable.innerHTML = `
        <h3>Таблиця розмірів</h3>
        <table>
          <tr><th>Розмір</th><th>Груди (см)</th><th>Довжина спини (см)</th><th>Довжина штанів (см)</th><th>Стегна (см)</th></tr>
          <tr><td>S</td><td>107</td><td>71</td><td>100</td><td>100</td></tr>
          <tr><td>M</td><td>112</td><td>71</td><td>102</td><td>104</td></tr>
          <tr><td>L</td><td>117</td><td>73</td><td>104</td><td>108</td></tr>
          <tr><td>XL</td><td>122</td><td>74</td><td>106</td><td>112</td></tr>
          <tr><td>XXL</td><td>130</td><td>76</td><td>108</td><td>118</td></tr>
          <tr><td>3XL</td><td>138</td><td>78</td><td>110</td><td>124</td></tr>
        </table>
        <p style="margin-top:16px; font-size:0.95em;">📏 Не знаєте, який розмір обрати?<br>Вкажіть зріст і вагу — ми підберемо ідеальну посадку саме для вас</p>
      `;
      sizeTable.style.display = "block";
    }
  } 
  else if (productId === "zamsh-na-zmiyci") {
    if (sellingBlock) {
      sellingBlock.innerHTML = `
        <h3>Чому обирають Velvet?</h3>
        <ul>
          <li>💎 Сучасний замшевий текстиль з гарною текстурою</li>
          <li>🧺 Легкий у догляді, зберігає форму</li>
          <li>❤️ Комфортний при тривалому носінні</li>
          <li>🚀 Швидка доставка + гарантія повернення</li>
          <li>🏆 Понад 500 задоволених клієнтів — хіт сезону</li>
        </ul>
        <div class="urgency-badge">🔥 Акція: −33% • Кількість обмежена</div>
      `;
      sellingBlock.style.display = "block";
    }
    if (sizeTable) {
      sizeTable.innerHTML = `
        <h3>Таблиця розмірів</h3>
        <p style="font-weight:500; margin:8px 0 16px 0;">Костюм «Velvet»</p>
        <table>
          <tr><th>Розмір</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>2XL</th></tr>
          <tr><td>Довжина кофти</td><td>65</td><td>66</td><td>67</td><td>68</td><td>69</td></tr>
          <tr><td>Довжина рукава</td><td>64</td><td>65</td><td>66</td><td>67</td><td>68</td></tr>
          <tr><td>Обхват грудей</td><td>112</td><td>116</td><td>120</td><td>124</td><td>128</td></tr>
          <tr><td>Ширина пояса</td><td>70</td><td>72</td><td>74</td><td>76</td><td>78</td></tr>
          <tr><td>Довжина брюк</td><td>100</td><td>102</td><td>104</td><td>106</td><td>108</td></tr>
        </table>
      `;
      sizeTable.style.display = "block";
    }
  }

  selectProduct(product.id);

  const addBtn = $("#addToCartBtn");
  if (addBtn) {
    addBtn.textContent = "Підібрати розмір";
    addBtn.addEventListener("click", () => {
      const colorId = $(".swatch.active")?.dataset.id;
      const height = $("#height")?.value;
      const weight = $("#weight")?.value;

      if (colorId && (isHat || (height && weight))) {
        addToCart({ productId, colorId, height: isHat ? 'N/A' : height, weight: isHat ? 'N/A' : weight });
        showAddToCartModal();
        flyToCartEffect($("#mainImage"), $(".cart-link"));
        updateCartBadge();
      } else {
        alert("Вкажіть, будь ласка, зріст та вагу 🙏");
        $("#size-selection")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
}

/* Color & Carousel */
let activeProduct, activeImages = [], currentIndex = 0;

function selectProduct(id) {
  activeProduct = CONFIG.PRODUCTS.find(p => p.id === id);
  if (!activeProduct) return;

  const swatches = $("#swatches");
  if (swatches) {
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
  }

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

function selectColor(id) {
  const color = activeProduct.colors.find(c => c.id === id);
  if (!color) return;

  $$(".swatch").forEach(s => s.classList.toggle("active", s.dataset.id === id));
  activeImages = color.images || ["images/placeholder.jpg"];
  currentIndex = 0;

  activeImages.forEach(src => { const img = new Image(); img.src = src; });
  updateMainImage();

  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  if (prevBtn && nextBtn) {
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

function updateMainImage() {
  const main = $("#mainImage");
  if (!main || activeImages.length === 0) return;

  main.style.opacity = "0.5";
  const img = new Image();
  img.src = activeImages[currentIndex];
  img.onload = () => {
    main.src = img.src;
    main.style.opacity = "1";
  };
}

/* Form на головній */
function setupForm() {
  const form = $("#orderForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = gatherForm();
    if (!data) return;

    const text = `🚀 НОВЕ ЗАМОВЛЕННЯ (ФОРМА):\nТовар: ${data.productName}\nКолір: ${data.colorName}\nЗріст: ${data.height} см\nВага: ${data.weight} кг\nКількість: ${data.qty}\n----\nКлієнт: ${data.fullName}\nТел: ${data.phone}\nМісто: ${data.city}\nВідділення: ${data.postOffice}`;

    await sendToTelegram(text);
    alert("Дякуємо! Менеджер звʼяжеться з вами.");
    form.reset();
    updateOrderSummary();
  });

  ["#height", "#weight", "#qty", "#colorSelect", "#productSelect", "#fullName", "#phone", "#city", "#postOffice"].forEach(sel => {
    const el = $(sel);
    if (el) el.addEventListener("input", updateOrderSummary);
  });
}

function gatherForm() {
  const fields = {
    height: $("#height")?.value,
    weight: $("#weight")?.value,
    qty: Number($("#qty")?.value) || 1,
    fullName: $("#fullName")?.value,
    phone: $("#phone")?.value,
    city: $("#city")?.value,
    postOffice: $("#postOffice")?.value,
    productId: $("#productSelect")?.value,
    colorId: $("#colorSelect")?.value
  };

  if (Object.values(fields).some(v => !v)) {
    alert("Заповніть усі поля.");
    return null;
  }

  const product = CONFIG.PRODUCTS.find(p => p.id === fields.productId);
  const color = product?.colors.find(c => c.id === fields.colorId);
  return { ...fields, productName: product.name, colorName: color.name, price: product.price };
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

/* Cart Logic */
function addToCart(item) {
  item.uniqueId = Date.now();
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function removeFromCart(uniqueId) {
  cart = cart.filter(i => i.uniqueId !== parseInt(uniqueId));
  localStorage.setItem('cart', JSON.stringify(cart));
  initCart();
  updateCartBadge();
}

function initCart() {
  const cartItems = $("#cartItems");
  if (!cartItems) return;

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const product = CONFIG.PRODUCTS.find(p => p.id === item.productId);
    const color = product?.colors.find(c => c.id === item.colorId);

    if (product && color) {
      total += product.price;
      cartItems.innerHTML += `
        <div class="cart-item" style="border-bottom:1px solid #eee; padding:10px 0; margin-bottom:10px;">
          <div style="font-weight:600;">${product.name}</div>
          <div style="font-size:0.9em; color:#666;">Колір: ${color.name} | Розмір: ${item.height}/${item.weight}</div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
            <span class="new-price">${product.price} грн</span>
            <button class="remove-btn" onclick="removeFromCart(${item.uniqueId})" style="color:red; background:none; border:none; cursor:pointer;">Видалити</button>
          </div>
        </div>
      `;
    }
  });

  const totalEl = $("#cartTotal");
  if (totalEl) totalEl.textContent = `${total} грн`;

  const checkoutForm = $("#checkoutForm");
  if (checkoutForm && cart.length > 0) {
    checkoutForm.onsubmit = async (e) => {
      e.preventDefault();
      const fullName = $("#fullName").value;
      const phone = $("#phone").value;
      const city = $("#city").value;
      const postOffice = $("#postOffice").value;

      if (!fullName || !phone) return alert("Заповніть контактні дані");

      const itemsText = cart.map(i => {
        const p = CONFIG.PRODUCTS.find(pr => pr.id === i.productId);
        return `- ${p.name} (${i.height}см, ${i.weight}кг)`;
      }).join("\n");

      const message = `🛒 ЗАМОВЛЕННЯ З КОШИКА:\nКлієнт: ${fullName}\nТел: ${phone}\nМісто: ${city}\nПошта: ${postOffice}\n\nТовари:\n${itemsText}\n\nРазом: ${total} грн`;

      await sendToTelegram(message);
      alert("Замовлення прийнято!");
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      window.location.href = "index.html";
    };
  }
}

function updateCartBadge() {
  const badge = $("#cartBadge") || $(".cart-count");
  if (badge) {
    const count = cart.length;
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

async function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CONFIG.CHAT_ID, text: message })
    });
  } catch (error) {
    console.error("Telegram Error:", error);
  }
}

/* Swipe & Events */
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
function selectColor(id) {
  const color = activeProduct.colors.find(c => c.id === id);
  if (!color) return;

  // Снимаем active со всех, ставим на выбранный
  $$(".swatch").forEach(s => s.classList.toggle("active", s.dataset.id === id));

  // Меняем картинки
  activeImages = color.images || ["images/placeholder.jpg"];
  currentIndex = 0;
  activeImages.forEach(src => { const img = new Image(); img.src = src; });
  updateMainImage();

  // Обновляем название цвета под палитрой
  const nameEl = document.getElementById("selectedColorName");
  if (nameEl) {
    nameEl.textContent = `Обраний колір: ${color.name}`;
  }

  // Обновляем кнопки навигации (если они есть)
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  if (prevBtn && nextBtn) {
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
// ────────────────────────────────────────────────
// Таймер акции — до 00:00 следующего дня
// Показывается каждые 3 посещения (1-е, 4-е, 7-е, 10-е и т.д.)
// ────────────────────────────────────────────────

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
  // Считаем количество посещений
  let visitCount = parseInt(localStorage.getItem('timerVisitCount') || '0', 10);
  visitCount += 1;
  localStorage.setItem('timerVisitCount', visitCount);

  // Показываем только если (visitCount - 1) делится на 3 без остатка
  // То есть: 1, 4, 7, 10, 13...
  if ((visitCount - 1) % 3 !== 0) return;

  // На product.html не показываем, если корзина не пустая
  const isProductPage = window.location.pathname.includes('product.html');
  if (isProductPage && cart.length > 0) return;

  // Создаём баннер
  const banner = document.createElement('div');
  banner.id = 'timer-banner';
  banner.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(135deg, #ff3b30, #ff6b6b);
      color: white;
      padding: 12px 16px;
      font-size: 15px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    ">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span>🔥 Обмежена кількість • Без передоплати • Акція діє до кінця доби • Залишилось:</span>
        <strong id="timer-display" style="font-size:17px; background:rgba(0,0,0,0.25); padding:6px 12px; border-radius:8px;">
          00:00:00
        </strong>
      </div>

      <div style="display: flex; align-items: center; gap: 12px;">
        <button id="action-timer-btn" style="
          background: white;
          color: #ff3b30;
          border: none;
          padding: 8px 16px;
          border-radius: 24px;
          font-weight: bold;
          cursor: pointer;
          font-size: 14px;
        ">Знайти мій розмір</button>

        <button id="close-timer-btn" style="
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 6px 12px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
        ">× Закрити</button>
      </div>
    </div>
  `;

  document.body.prepend(banner);

  // Кнопка действия — скролл к форме
  document.getElementById('action-timer-btn').onclick = () => {
    const target = document.getElementById('size-selection') || document.querySelector('#order') || document.querySelector('#orderForm');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    banner.remove();
  };

  // Кнопка закрытия
  document.getElementById('close-timer-btn').onclick = () => {
    banner.remove();
  };

  // Обратный отсчёт
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

// Запускаем через 4 секунды после загрузки страницы
setTimeout(() => {
  createTimerBanner();
}, 4000);
