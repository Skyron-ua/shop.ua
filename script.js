/* CONFIG */
const CONFIG = {
CONTACT: {
TG_USERNAME: "Skyron_ua",
VIBER_INVITE: "https://invite.viber.com/?g2=AQBeex4BIEUJJlW4bdj1yeAO7w846m1dQ6AzkdYO2N%2Bt6FAv7rl5TWDkjrKKKt7t",
SUPPORT_PHONE: "+380733337278"
},
  PRODUCTS: [
    {
      id: "polar",
      name: "PolarFleece — флісовий костюм",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Плотний фліс — тепло до −10°C", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 999,
      colors: [
        { id: "black", name: "Чорний", hex: "#0b0b0b", images: ["images/fleece/1.png","images/fleece/2.png"] },
        { id: "anthracite", name: "Антрацит", hex: "#616267", images: ["images/fleece/10.png","images/fleece/11.png"] },
        { id: "beige", name: "Беж", hex: "#d6c7b1", images: ["images/fleece/20.png","images/fleece/21.png"] },
        { id: "emerald", name: "Смарагд", hex: "#00a86b", images: ["images/fleece/50.png"] }
      ]
    },
    {
      id: "sweater",
      name: "Светр Oslo Spirit",
      description: "Преміальний крій — підходить для вечірок,свят, та для повсякденного носіння.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1049,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img/3.png","images/img/4.png"], price: 1049 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img/1.png","images/img/2.png"], price: 1049 },
        { id: "beige", name: "Беж", hex: "#d6c7b1", images: ["images/img/5.png","images/img/6.png"], price: 1049 },
        { id: "gray", name: "Сірий", hex: "#a5aaa1dc", images: ["images/img/7.png","images/img/8.png"], price: 1049 }
      ]
    },
    {
      id: "gudzik",
      name: "Теплий флісовий костюм Urban Winter",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1349,
      colors: [
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.gudzik/4.png","images/img.gudzik/3.png","images/img.gudzik/2.png","images/img.gudzik/1.png"], price: 1349 },
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.gudzik/5.png","images/img.gudzik/6.png","images/img.gudzik/7.png","images/img.gudzik/8.png","images/img.gudzik/9.png"], price: 1349 },
]
    },
        {
      id: "plush",
      name: "Теплий флісовий костюм Loft Spirit",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1249,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.plush/1.png","images/img.plush/2.png","images/img.plush/3.png"], price: 1249 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.plush/6.png","images/img.plush/5.png","images/img.plush/4.png"], price: 1249 },
        { id: "white", name: "Білий", hex: "#f6f6f8ff", images: ["images/img.plush/7.png","images/img.plush/8.png","images/img.plush/9.png"], price: 1249 },
        { id: "khaki", name: "Хакі", hex: "#78866b", images: ["images/img.plush/10.png","images/img.plush/11.png","images/img.plush/12.png"], price: 1249 },
        { id: "grey", name: "Сірий", hex: "#bbbbbb", images: ["images/img.plush/13.png","images/img.plush/14.png","images/img.plush/15.png"], price: 1249 },
        { id: "beige", name: "Беж", hex: "#d6c7b1", images: ["images/img.plush/16.png","images/img.plush/17.png","images/img.plush/18.png"], price: 1249 },
        { id: "burgundy", name: "Бордо", hex: "#790604", images: ["images/img.plush/19.png","images/img.plush/20.png","images/img.plush/21.png"], price: 1249 },
        { id: "brown", name: "Коричневий", hex: "#654321", images: ["images/img.plush/22.png","images/img.plush/23.png","images/img.plush/24.png"], price: 1249 },
        { id: "emerald", name: "Смарагд", hex: "#00a86b", images: ["images/img.plush/25.png","images/img.plush/26.png","images/img.plush/27.png"], price: 1249 },
        { id: "blue", name: "Синій", hex: "#000080", images: ["images/img.plush/28.png","images/img.plush/29.png","images/img.plush/30.png"], price: 1249 },  
]
    },
    {
      id: "bayer",
      name: "Теплий зимовий костюм Nordic",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1149,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.bayer/1.png","images/img.bayer/2.png","images/img.bayer/3.png","images/img.bayer/4.png","images/img.bayer/5.png","images/img.bayer/6.png"], price: 1149 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.bayer/7.png","images/img.bayer/8.png","images/img.bayer/9.png"], price: 1149 },
        { id: "biege", name: "Беж", hex: "#d6c7b1", images: ["images/img.bayer/10.png","images/img.bayer/11.png","images/img.bayer/12.png"], price: 1149 },
]
    },
    {
      id: "zefir",
      name: "Зимовий костюм Shift",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1349,
      colors: [
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.zefir/1.png","images/img.zefir/2.png","images/img.zefir/3.png","images/img.zefir/4.png","images/img.zefir/5.png"], price: 1349 },
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.zefir/6.png","images/img.zefir/7.png","images/img.zefir/8.png","images/img.zefir/9.png","images/img.zefir/10.png"], price: 1349 },
        { id: "emerald", name: "Смарагд", hex: "#00a86b", images: ["images/img.zefir/11.png","images/img.zefir/12.png","images/img.zefir/13.png","images/img.zefir/14.png","images/img.zefir/15.png"], price: 1349 },
]
    },
    {
      id: "plashovka",
      name: "Костюм Nowind",
      description: "Не продуває, преміальний крій — підходить для носіння в непогоду.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1249,
      colors: [
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.plashovka/1.png","images/img.plashovka/2.png","images/img.plashovka/3.png","images/img.plashovka/4.png","images/img.plashovka/5.png","images/img.plashovka/6.png"], price: 1249 },
        { id: "khaki", name: "Хакі", hex: "#78866b", images: ["images/img.plashovka/7.png","images/img.plashovka/8.png","images/img.plashovka/9.png","images/img.plashovka/10.png","images/img.plashovka/11.png","images/img.plashovka/12.png"], price: 1249 },
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.plashovka/13.png","images/img.plashovka/14.png","images/img.plashovka/15.png","images/img.plashovka/16.png"], price: 1249 },
        { id: "grey", name: "Сірий", hex: "#bbbbbb", images: ["images/img.plashovka/17.png","images/img.plashovka/18.png"], price: 1249 },
]
    },
    {
      id: "zamsh-na-zmiyci",
      name: "Костюм Velvet",
      description: "Преміальний крій — підходить для вечірок,свят, та для повсякденного носіння.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1549,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.zamsh/3.png","images/img.zamsh/4.png","images/img.zamsh/5.png"], price: 1549 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.zamsh/1.png","images/img.zamsh/9.png","images/img.zamsh/2.png"], price: 1549 },
        { id: "blue", name: "Синій", hex: "#000080", images: ["images/img.zamsh/6.png","images/img.zamsh/7.png","images/img.zamsh/8.png"], price: 1549 },
]
    },
    {
      id: "chelsi",
      name: "Теплий костюм Apex",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1529,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.chelsi/6.png","images/img.chelsi/7.png","images/img.chelsi/8.png","images/img.chelsi/9.png","images/img.chelsi/10.png"], price: 1529 },
        { id: "biege", name: "Беж", hex: "#d6c7b1", images: ["images/img.chelsi/11.png","images/img.chelsi/12.png","images/img.chelsi/13.png","images/img.chelsi/14.png","images/img.chelsi/15.png"], price: 1529 },
        { id: "pistachio", name: "Фісташковий", hex: "#84B067", images: ["images/img.chelsi/1.png","images/img.chelsi/2.png","images/img.chelsi/3.png","images/img.chelsi/4.png","images/img.chelsi/5.png"], price: 1529 },
        { id: "khaki", name: "Хакі", hex: "#78866b", images: ["images/img.chelsi/16.png","images/img.chelsi/17.png","images/img.chelsi/18.png","images/img.chelsi/19.png","images/img.chelsi/20.png"], price: 1529 },
]
    },
    {
      id: "polar-premium",
      name: "Теплий костюм Fortress",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1729,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.polarpremium/7.png","images/img.polarpremium/5.png","images/img.polarpremium/6.png","images/img.polarpremium/4.png"], price: 1729 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.polarpremium/2.png","images/img.polarpremium/1.png","images/img.polarpremium/3.png"], price: 1729 },
]
    },
    {
      id: "puhovik",
      name: "Зимовий пуховик Puff",
      description: "Теплий, легкий та універсальний.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1849,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.puhovik/9.png","images/img.puhovik/11.png","images/img.puhovik/12.png","images/img.puhovik/7.png","images/img.puhovik/8.png","images/img.puhovik/16.png","images/img.puhovik/14.png","images/img.puhovik/15.png","images/img.puhovik/10.png","images/img.puhovik/13.png"], price: 1849 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.puhovik/1.png","images/img.puhovik/3.png","images/img.puhovik/4.png","images/img.puhovik/2.png","images/img.puhovik/5.png","images/img.puhovik/6.png"], price: 1849 },
        { id: "blue", name: "Синій", hex: "#000080", images: ["images/img.puhovik/17.png","images/img.puhovik/18.png","images/img.puhovik/19.png","images/img.puhovik/20.png","images/img.puhovik/21.png","images/img.puhovik/22.png","images/img.puhovik/23.png","images/img.puhovik/24.png","images/img.puhovik/25.png","images/img.puhovik/26.png","images/img.puhovik/27.png"], price: 1849 },
        { id: "emerald", name: "Смарагд", hex: "#00a86b", images: ["images/img.puhovik/28.png","images/img.puhovik/29.png","images/img.puhovik/30.png","images/img.puhovik/31.png","images/img.puhovik/32.png","images/img.puhovik/33.png"], price: 1849 },
]
    },
    {
      id: "balaklava",
      name: "Зимова шапка Ghost",
      description: "Легка, тепла та універсальна.",
      features: ["Якісний матеріал", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 549,
      colors: [
        { id: "khaki", name: "Хакі", hex: "#4B5320", images: ["images/img.balaklava/4.png","images/img.balaklava/3.png"], price: 549 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.balaklava/1.png","images/img.balaklava/2.png"], price: 549 },
        { id: "camouflage", name: "Камуфляж", hex: "#78866b", images: ["images/img.balaklava/7.png","images/img.balaklava/8.png","images/img.balaklava/5.png","images/img.balaklava/6.png"], price: 549 },
        { id: "biege", name: "Беж", hex: "#d6c7b1", images: ["images/img.balaklava/11.png","images/img.balaklava/12.png","images/img.balaklava/10.png"], price: 549 },
        { id: "camouflage biege", name: "Камуфляж Беж", hex: "#e4e3beff", images: ["images/img.balaklava/13.png","images/img.balaklava/14.png","images/img.balaklava/15.png","images/img.balaklava/16.png"], price: 549 },
]
    },
    {
      id: "shapka-baf",
      name: "Зимова шапка+баф Duo",
      description: "Зимовий комлект.",
      features: ["Якісний матеріал", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 499,
      colors: [
        { id: "biege", name: "Беж", hex: "#d6c7b1", images: ["images/img.baf/4.png","images/img.baf/3.png","images/img.baf/5.png"], price: 499 },
        { id: "khaki", name: "Хакі", hex: "#4B5320", images: ["images/img.baf/10.png","images/img.baf/9.png","images/img.baf/12.png"], price: 499 },
]
    },
     {
      id: "plush-kapyshon",
      name: "Зимовий костюм Titan",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1349,
      colors: [
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.plush.kapyshon/10.png","images/img.plush.kapyshon/11.png","images/img.plush.kapyshon/12.png","images/img.plush.kapyshon/9.png","images/img.plush.kapyshon/8.png","images/img.plush.kapyshon/7.png"], price: 1349 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.plush.kapyshon/1.png","images/img.plush.kapyshon/2.png","images/img.plush.kapyshon/3.png","images/img.plush.kapyshon/4.png","images/img.plush.kapyshon/5.png","images/img.plush.kapyshon/6.png"], price: 1349 },
        { id: "khaki", name: "Хакі", hex: "#4B5320", images: ["images/img.plush.kapyshon/19.png","images/img.plush.kapyshon/21.png","images/img.plush.kapyshon/20.png"], price: 1349 },
        { id: "biege", name: "Беж", hex: "#d6c7b1", images: ["images/img.plush.kapyshon/13.png","images/img.plush.kapyshon/14.png","images/img.plush.kapyshon/15.png","images/img.plush.kapyshon/16.png","images/img.plush.kapyshon/17.png","images/img.plush.kapyshon/18.png"], price: 1349 },
]
    },
    {
      id: "zmeyka",
      name: "Зимовий костюм Vortex",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1129,
      colors: [
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.zmeyka/1.png","images/img.zmeyka/2.png","images/img.zmeyka/3.png","images/img.zmeyka/4.png"], price: 1129 },
        { id: "khaki", name: "Хакі", hex: "#4B5320", images: ["images/img.zmeyka/9.png","images/img.zmeyka/10.png","images/img.zmeyka/11.png"], price: 1129 },
        { id: "graphite", name: "Графіт", hex: "#616267", images: ["images/img.zmeyka/5.png","images/img.zmeyka/7.png","images/img.zmeyka/6.png","images/img.zmeyka/8.png"], price: 1129 },
]
    },
    {
      id: "oversize-premium",
      name: "Теплий костюм OverSize Premium",
      description: "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      features: ["Якісний матеріал перевірений часом", "Анатомічна посадка — розміри S–XXL", "Швидка відправка Новою Поштою (1–3 дні)"],
      price: 1849,
      colors: [
        { id: "biege", name: "Беж", hex: "#d6c7b1", images: ["images/img.oversize/20.png","images/img.oversize/18.png","images/img.oversize/19.png","images/img.oversize/21.png"], price: 1849 },
        { id: "black", name: "Чорний", hex: "#111113ff", images: ["images/img.oversize/1.png","images/img.oversize/2.png","images/img.oversize/3.png","images/img.oversize/4.png","images/img.oversize/5.png","images/img.oversize/6.png"], price: 1849 },
        { id: "graphite", name: "Графіт", hex: "#5b7194", images: ["images/img.oversize/7.png","images/img.oversize/8.png","images/img.oversize/9.png","images/img.oversize/10.png","images/img.oversize/11.png","images/img.oversize/12.png","images/img.oversize/13.png"], price: 1849 },
        { id: "anyhracite", name: "Антрацит", hex: "#45464c", images: ["images/img.oversize/14.png","images/img.oversize/15.png","images/img.oversize/16.png","images/img.oversize/17.png"], price: 1849 },
        { id: "brown", name: "Коричневий", hex: "#654321", images: ["images/img.oversize/22.png","images/img.oversize/23.png","images/img.oversize/24.png","images/img.oversize/25.png","images/img.oversize/26.png"], price: 1849 },
]
    },
 // Додай більше товарів тут
],
};

/* Helpers */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const encode = s => encodeURIComponent(s);

/* Cart */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* Init */
document.addEventListener("DOMContentLoaded", () => {
// Footer year
$$('#year').forEach(el => el.textContent = new Date().getFullYear());

// Consultation buttons
$$('.btn-telegram').forEach(btn => btn.addEventListener("click", () => window.open(`https://t.me/${CONFIG.CONTACT.TG_USERNAME}`, "_blank")));
$$('.btn-viber').forEach(btn => btn.addEventListener("click", () => window.open(CONFIG.CONTACT.VIBER_INVITE, "_blank")));

// Mobile menu (if needed)
const menuToggle = $("#menuToggle");
const navMenu = $("#navMenu");
if (menuToggle && navMenu) {
menuToggle.addEventListener("click", () => navMenu.classList.toggle("active"));
}

const page = window.location.pathname.split('/').pop() || 'index.html';
if (page === 'index.html') initHome();
else if (page === 'catalog.html') initCatalog();
else if (page === 'product.html') initProduct();
else if (page === 'cart.html') initCart();

// Theme toggle
const themeToggle = $("#themeToggle");
if (themeToggle) {
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});
}

// Size modal
const sizeBtn = $("#sizeChartBtn");
const modal = $("#sizeModal");
const closeBtn = $("#closeModal");
if (sizeBtn && modal && closeBtn) {
sizeBtn.addEventListener("click", () => modal.classList.add("active"));
closeBtn.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("active"); });
}

// Cart badge
updateCartBadge();

// Fade-in animations
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add("visible");
});
});
$$(".fade-in").forEach(el => observer.observe(el));
});

/* Home */
function initHome() {
buildCatalog(CONFIG.PRODUCTS.slice(0, 3), $("#featuredGrid"), true);
const productSelect = $("#productSelect");
CONFIG.PRODUCTS.forEach(p => {
const opt = document.createElement("option");
opt.value = p.id;
opt.textContent = p.name;
productSelect.appendChild(opt);
});
productSelect.addEventListener("change", updateColorSelect);
selectProduct(CONFIG.PRODUCTS[0].id);
setupForm();
updateOrderSummary();
}

/* Catalog */
function initCatalog() {
buildCatalog(CONFIG.PRODUCTS, $("#catalogGrid"));
}

function buildCatalog(products, grid, isFeatured = false) {
products.forEach(p => {
const firstColor = p.colors[0] || { name: "Стандарт", images: ["images/placeholder.jpg"] };
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
<img src="${firstColor.images[0]}" alt="${p.name}">
<div class="meta">
<div class="name">${p.name}</div>
<div class="price">${p.price} грн</div>
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
$("#productPrice").textContent = `${product.price} грн`;
const featuresList = $("#productFeatures");
product.features.forEach(f => {
const li = document.createElement("li");
li.textContent = f;
featuresList.appendChild(li);
});
selectProduct(product.id);
$("#addToCartBtn").addEventListener("click", () => {
const colorId = $(".swatch.active")?.dataset.id;
const height = $("#height").value;
const weight = $("#weight").value;
if (colorId && height && weight) {
addToCart({ productId, colorId, height, weight });
alert("Додано до корзини!");
updateCartBadge();
updateOrderSummary();
} else alert("Оберіть колір, зріст та вагу!");
});
}

/* Color & Carousel */
let activeProduct, activeImages = [], currentIndex = 0;
function selectProduct(id) {
activeProduct = CONFIG.PRODUCTS.find(p => p.id === id);
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
selectColor(activeProduct.colors[0].id);
if ($("#heroPrice")) $("#heroPrice").textContent = `${activeProduct.price} грн`;
}

function selectColor(id) {
const color = activeProduct.colors.find(c => c.id === id);
$$(".swatch").forEach(s => s.classList.toggle("active", s.dataset.id === id));
activeImages = color.images || ["images/placeholder.jpg"];
currentIndex = 0;
// preload images
activeImages.forEach(src => {
  const img = new Image();
  img.src = src;
});
updateMainImage();
const prevBtn = $("#prevBtn");
const nextBtn = $("#nextBtn");
if (prevBtn && nextBtn) {
prevBtn.addEventListener("click", () => {
currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
updateMainImage();
});
nextBtn.addEventListener("click", () => {
currentIndex = (currentIndex + 1) % activeImages.length;
updateMainImage();
});
}
}
function updateMainImage() {
  const main = $("#mainImage");
  if (!main) return;

  main.style.opacity = "0";

  const img = new Image();
  img.src = activeImages[currentIndex];

  img.onload = () => {
    main.src = img.src;
    requestAnimationFrame(() => {
      main.style.opacity = "1";
    });
  };
}

/* Form */
function setupForm() {
const form = $("#orderForm");
form.addEventListener("submit", (e) => {
e.preventDefault();
const data = gatherForm();
if (!data) return;
const text = encode(`Замовлення: ${data.productName} (${data.colorName}), Зріст: ${data.height} см, Вага: ${data.weight} кг, Кількість: ${data.qty}`);
window.open(`https://t.me/${CONFIG.CONTACT.TG_USERNAME}?text=${text}`, "_blank");
});
$("#productSelect").addEventListener("change", updateColorSelect);
["#height", "#weight", "#qty", "#colorSelect"].forEach(sel => $(sel)?.addEventListener("input", updateSummary));
}

function updateColorSelect() {
const productId = $("#productSelect").value;
const product = CONFIG.PRODUCTS.find(p => p.id === productId);
const colorSelect = $("#colorSelect");
colorSelect.innerHTML = '<option value="">Оберіть колір</option>';
colorSelect.disabled = !product;
if (product) product.colors.forEach(c => colorSelect.appendChild(Object.assign(document.createElement("option"), {value: c.id, textContent: c.name})));
updateSummary();
}

function gatherForm() {
const height = $("#height").value;
const weight = $("#weight").value;
const qty = Number($("#qty").value) || 1;
const productId = $("#productSelect").value;
const colorId = $("#colorSelect").value;
if (!height || !weight || !productId || !colorId) {
alert("Заповніть усі поля.");
return null;
}
const product = CONFIG.PRODUCTS.find(p => p.id === productId);
const color = product.colors.find(c => c.id === colorId);
return { height, weight, qty, productName: product.name, colorName: color.name, price: product.price };
}

function updateSummary() {
const qty = Number($("#qty").value) || 1;
const height = $("#height").value || "—";
const weight = $("#weight").value || "—";
const productName = $("#productSelect").options[$("#productSelect").selectedIndex]?.text || "—";
const colorName = $("#colorSelect").options[$("#colorSelect").selectedIndex]?.text || "—";
const product = CONFIG.PRODUCTS.find(p => p.id === $("#productSelect").value);
$("#summaryProduct").textContent = `${productName} — ${colorName}`;
$("#summaryHeight").textContent = height;
$("#summaryWeight").textContent = weight;
$("#summaryTotal").textContent = `${(product ? product.price : 0) * qty} грн`;
}

/* Order Summary */
function updateOrderSummary() {
if (cart.length === 0) {
$("#summaryProduct").textContent = "Корзина порожня";
$("#summaryHeight").textContent = "—";
$("#summaryWeight").textContent = "—";
$("#summaryTotal").textContent = "0 грн";
return;
}
let total = 0;
const grouped = cart.reduce((acc, item) => {
const key = `${item.productId}-${item.colorId}`;
if (!acc[key]) acc[key] = { ...item, qty: 0 };
acc[key].qty++;
return acc;
}, {});
const items = Object.values(grouped);
let displayText = "";
items.forEach((i, idx) => {
const product = CONFIG.PRODUCTS.find(p => p.id === i.productId);
const color = product?.colors.find(c => c.id === i.colorId);
if (product && color) {
total += product.price * i.qty;
displayText += `${product.name} (${color.name}) x${i.qty}`;
if (idx < items.length - 1) displayText += ", ";
}
});
$("#summaryProduct").textContent = displayText || "—";
$("#summaryHeight").textContent = items[0]?.height || "—";
$("#summaryWeight").textContent = items[0]?.weight || "—";
$("#summaryTotal").textContent = `${total} грн`;
}

/* Cart Functions */
function addToCart(item) {
cart.push(item);
localStorage.setItem('cart', JSON.stringify(cart));
updateCartBadge();
updateOrderSummary();
}

function removeFromCart(key) {
cart = cart.filter(i => `${i.productId}-${i.colorId}-${i.height}-${i.weight}` !== key);
localStorage.setItem('cart', JSON.stringify(cart));
initCart();
updateCartBadge();
updateOrderSummary();
}

function initCart() {
const cartItems = $("#cartItems");
let total = 0;
cart = cart.filter(item => CONFIG.PRODUCTS.find(p => p.id === item.productId)?.colors.find(c => c.id === item.colorId));
localStorage.setItem('cart', JSON.stringify(cart));
const grouped = cart.reduce((acc, item) => {
const key = `${item.productId}-${item.colorId}-${item.height}-${item.weight}`;
if (!acc[key]) acc[key] = { ...item, qty: 0 };
acc[key].qty++;
return acc;
}, {});
cartItems.innerHTML = "";
for (let key in grouped) {
const i = grouped[key];
const product = CONFIG.PRODUCTS.find(p => p.id === i.productId);
const color = product?.colors.find(c => c.id === i.colorId);
if (product && color) {
const subtotal = product.price * i.qty;
total += subtotal;
cartItems.innerHTML += `
<div class="cart-item" data-key="${key}">
<p>${product.name} (${color.name}, Зріст: ${i.height} см, Вага: ${i.weight} кг) x ${i.qty}</p>
<p>${subtotal} грн</p>
<button class="btn btn-danger remove-btn">Видалити</button>
</div>
`;
}
}
$("#cartTotal").textContent = `${total} грн`;
$$(".remove-btn").forEach(btn => btn.addEventListener("click", () => removeFromCart(btn.parentElement.dataset.key)));
const checkoutForm = $("#checkoutForm");
checkoutForm?.addEventListener("submit", (e) => {
e.preventDefault();
const name = $("#name").value;
const phone = $("#phone").value;
const address = $("#address").value;
if (!name || !phone) return alert("Заповніть ім'я та телефон");
const lines = cart.map(i => {
const p = CONFIG.PRODUCTS.find(pr => pr.id === i.productId);
const c = p?.colors.find(cl => cl.id === i.colorId);
return p && c ? `${p.name} (${c.name}, Зріст: ${i.height} см, Вага: ${i.weight} кг)` : '';
}).filter(line => line).join("\n");
const text = encode(`Замовлення від ${name} (${phone})\nАдреса: ${address || "Не вказано"}\nТовари:\n${lines}\n${CONFIG.DELIVERY_TEXT}`);
window.open(`https://t.me/${CONFIG.CONTACT.TG_USERNAME}?text=${text}`, "_blank");
alert("Замовлення надіслано!");
cart = [];
localStorage.setItem('cart', JSON.stringify(cart));
initCart();
updateCartBadge();
updateOrderSummary();
});
}

function updateCartBadge() {
const badge = $("#cartBadge");
if (badge) {
const count = cart.length;
badge.textContent = count;
badge.style.display = count > 0 ? "inline-flex" : "none";
}
}
/* Swipe for product images (mobile) */
(function enableSwipe() {
  const img = document.getElementById("mainImage");
  if (!img) return;

  let startX = 0;
  let endX = 0;

  img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  img.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = startX - endX;
    if (Math.abs(diff) < 50) return; // минимальный свайп

    if (diff > 0) {
      // свайп влево — следующее фото
      currentIndex = (currentIndex + 1) % activeImages.length;
    } else {
      // свайп вправо — предыдущее фото
      currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
    }
    updateMainImage();
  }
})();