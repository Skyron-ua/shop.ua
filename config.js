/* CONFIG */
const CONFIG = {
  // === API Нової Пошти ===
  NOVA_POSHTA_API_KEY: "881fe4619feabce7a31a5acee8e4d63e",
  CONTACT: {
    TG_USERNAME: "Skyron_ua",
    VIBER_INVITE: "https://invite.viber.com/?g2=AQBeex4BIEUJJlW4bdj1yeAO7w846m1dQ6AzkdYO2N%2Bt6FAv7rl5TWDkjrKKKt7t",
    SUPPORT_PHONE: "+380733337278"
  },
  PRODUCTS: [
    {
  "id": "Flow",
  "name": "Лляний комплект Flow",
  "sku": "BR Q0068",
  "description": "Натуральний дихаючий льон преміум-якості",
  "features": [
    "🔥 В тренді цього сезону",
    "😎 Стильно • Легко • Комфортно",
    "✔️ Розміри: S M L XL XXL 3XL",
    "✔️ Матеріал: льон",
    "✔️ Висока якість пошиву, не просвічується",
    "✔️ Стильний мінімалізм, який завжди актуальний",
    "📦 Відправка новою поштою накладеним платежем"
  ],
  "price": 1590,
  "old_price": 2900,
  "relatedIds": ["Linen Cloud", "Base", "LinenSet"],
  "colors": [
    {
      "id": "graphite",
      "name": "Графіт",
      "hex": "#616267",
      "images": [
        "images/img.lyon2/1.webp",
        "images/img.lyon2/3.webp",
        "images/img.lyon2/2.webp"
      ]
    },
    {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
          "images/img.lyon2/22.webp",
          "images/img.lyon2/23.webp",
          "images/img.lyon2/24.webp"
          ]
    },
    {
      "id": "white",
      "name": "Білий",
      "hex": "#ffffff",
      "images": [
        "images/img.lyon2/10.webp",
        "images/img.lyon2/11.webp",
        "images/img.lyon2/12.webp"
      ]
    },
    {
      "id": "blue",
      "name": "Блакитний",
      "hex": "#B9C6F2",
      "images": [
        "images/img.lyon2//19.webp",
        "images/img.lyon2//20.webp",
        "images/img.lyon2//21.webp"
      ]
    },
    {
      "id": "black",
      "name": "Чорний",
      "hex": "#111113ff",
      "images": [
        "images/img.lyon2/9.webp",
        "images/img.lyon2/8.webp",
        "images/img.lyon2/7.webp"
      ]
    },
    {
      "id": "haki",
      "name": "Хакі",
      "hex": "#78866b",
      "images": [
        "images/img.lyon2//18.webp",
        "images/img.lyon2//17.webp",
        "images/img.lyon2//16.webp"
      ]
    },
    {
      "id": "dark-blue",
      "name": "Темно-синій",
      "hex": "#000080",
      "images": [
        "images/img.lyon2/13.webp",
        "images/img.lyon2/14.webp",
        "images/img.lyon2/15.webp"
      ]
    },
    {
      "id": "beige",
      "name": "Беж",
      "hex": "#d6c7b1",
      "images": [
        "images/img.lyon2/4.webp",
        "images/img.lyon2/5.webp"
      ]
    }
  ]
},
    {
  id: "look-velvet-jeans",
  name: "Стильний образ: Замшевий бомбер Velvet Jet + Джинси + Футболка",
  "sku": "BR A0165, j0032, L0056",
  type: "bundle",
  description: "Готовий стильний образ — замшевий бомбер, джинси та базова футболка",
  price: 3180,
  "relatedIds": ["Velvet Jet", "Jeans", "Base"],
  old_price: 5250,
  features: [
    "🔥 Готовий образ на кожен день",
    "🔝 Замшевий бомбер - бомба сезону",
    "👖 Джинси з якісного деніму - сучасні, міцні та зносостійкі",
    "👕 Базова футболка преміум якості з щільної бавовни",
    "🎨 Можна зібрати свій варіант і замовити повністю або окремо",
    "📦 Відправка новою поштою накладеним платежем"
  ],

  // Потрібно для каталогу
  colors: [
    {
      id: "default",
      name: "Образ",
      hex: "#111111",
      images: ["images/img.bomber.jeans/1.webp"]
    }
  ],

  buyOptions: [
    { id: "full",        label: "Замовити весь комплект",   price: 3180, items: ["bomber", "jeans", "tshirt"] },
    { id: "bomberJeans", label: "Замовити бомбер + джинси", price: 2690, items: ["bomber", "jeans"] },
    { id: "bomber",      label: "Замовити тільки бомбер",   price: 1290, items: ["bomber"] },
    { id: "jeans",       label: "Замовити тільки джинси",   price: 1590, items: ["jeans"] }
  ],

  items: {
    bomber: {
      name: "Бомбер Velvet Jet",
      productId: "Velvet Jet",
      colors: [
        { id: "black",    name: "Чорний", hex: "#111113" },
        { id: "graphite", name: "Графіт", hex: "#616267" },
        { id: "blue",     name: "Синій",  hex: "#000080" }
      ]
    },
    jeans: {
      name: "Чоловічі Джинси",
      productId: "Jeans",
      colors: [
        { id: "jeans",      name: "Джинс",          hex: "#173D65" },
        { id: "black",      name: "Чорний",         hex: "#111113" },
        { id: "light-blue", name: "Блакитно-синій", hex: "#274F78" },
        { id: "dark-blue",  name: "Темно-синій",    hex: "#192032" },
        { id: "graphite",   name: "Графіт",         hex: "#616267" },
        { id: "blue",       name: "Блакитний",      hex: "#7795AD" }
      ]
    },
    tshirt: {
      name: "Футболка Base",
      productId: "Base",
      colors: [
        { id: "white", name: "Білий",  hex: "#ffffff" },
        { id: "black", name: "Чорний", hex: "#111113" }
      ]
    }
  },

  // Порядок кольорів (дуже важливо!)
  colorOrder: {
    bomber: ["black", "graphite", "blue"],
    jeans:  ["jeans", "black", "light-blue", "dark-blue", "graphite", "blue"],
    tshirt: ["white", "black"]
  },

  defaultCombination: {
    bomber: "black",
    jeans: "jeans",
    tshirt: "white"
  }
},
        {
      "id": "Linen Cloud",
      "name": "Комплект трійка з льону",
      "sku": "BR AQ0071",
      "relatedIds": ["Flow", "Base", "LinenSet"],
      "features": [
        "🔥 Лляний комплект трійка — сорочка + штани + шорти",
        "‼️ РОЗПРОДАЖ ОСТАННІХ РОЗМІРІВ",
        "😎 Стильно • Легко • Комфортно",
        "🌿 Льон — легкий, дихаючий та приємний до тіла",
        "👌 Стильний мінімалізм, який легко поєднувати з базовими речами",
        "✔️ Висока якість пошиву",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1790,
      "colors": [
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
            "images/img.lyon3/1.webp",
            "images/img.lyon3/2.webp",
            "images/img.lyon3/3.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.lyon3/4.webp",
            "images/img.lyon3/5.webp",
            "images/img.lyon3/6.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.lyon3/7.webp",
            "images/img.lyon3/8.webp",
            "images/img.lyon3/9.webp"
          ]
        }
      ],
      "old_price": 3000
    },
    {
      "id": "Basic Premium",
      "name": "Костюм Basic Premium",
      "sku": "BR A0114",
      "relatedIds": ["zamsh-na-zmiyci","TNF", "Base"],
      "description": "Стильний та зручний костюм на кожен день",
      "features": [
        "✨ Стильний та зручний костюм на кожен день",
        "📌 Матеріал: петля, компакт-пеньє",
        "✔ Якісна та щільна рібана — добре тримає форму",
        "🔒 Не кашлатиться навіть після багаторазового прання",
        "💪 Довговічна тканина — служитиме не один сезон",
        "⭐ Якість гарантуємо",
        "🔥 Ідеальний варіант для щоденного носіння — комфорт + стиль в одному комплекті",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1390,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.major/1.webp",
            "images/img.major/2.webp",
            "images/img.major/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.major/4.webp",
            "images/img.major/5.webp",
            "images/img.major/6.webp"
          ]
        }
      ],
      "old_price": 2780
    },
    {
      "id": "zamsh-na-zmiyci",
      "name": "Замшевий костюм Velvet",
      "sku": "BR A0125",
      "relatedIds": ["Basic Premium", "TNF", "Base"],
      "description": "Преміальний крій та м'який замшевий матеріал — ідеально для подій, вечірок, та повсякденних образів.",
      "features": [
        "⭐️ Замшевий матеріал преміум-класу — виглядає дорого",
        "👌 Мʼякий та приємний до тіла",
        "✂️ Анатомічний крій — гарно сідає по фігурі",
        "👕 Універсальний стиль — для свят та повсякдення",
        "📦 Швидка відправка Новою Поштою"
      ],
      "price": 1690,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.zamsh/1.webp",
            "images/img.zamsh/2.webp",
            "images/img.zamsh/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.zamsh/4.webp",
            "images/img.zamsh/5.webp",
            "images/img.zamsh/6.webp"
          ]
        }
      ],
      "old_price": 2600
    },
    {
      "id": "sweater",
      "name": "Светр Oslo Spirit",
      "sku": "BR C0043",
      "relatedIds": ["Jeans", "Mono", "Base"],
      "description": "Преміальний крій — підходить для вечірок,свят, та для повсякденного носіння.",
      "features": [
        "Якісний матеріал: перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1090,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img/3.png",
            "images/img/4.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img/1.png",
            "images/img/2.png"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img/5.png",
            "images/img/6.png"
          ]
        },
        {
          "id": "gray",
          "name": "Сірий",
          "hex": "#a5aaa1dc",
          "images": [
            "images/img/7.png",
            "images/img/8.png"
          ]
        }
      ],
      "old_price": 1349
    },
    {
      "id": "Jeans",
      "name": "Чоловічі Джинси",
      "sku": "BR j0032",
      "relatedIds": ["Base", "Velvet Jet", "Mono"],
      "features": [
        "🔥 Стиль та комфорт на кожен день",
        "👖 Сучасний та універсальний крій",
        "💪 Якісний денім — міцний та зносостійкий",
        "🔝 Стильно виглядають як у базових, так і в більш трендових образах",
        "👌 Дорогий вигляд за адекватні гроші",
        "🧵 Акуратне пошиття та якісна фурнітура",
        "🎯 Легко комбінуються з будь-яким гардеробом",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1590,
      "colors": [
        {
          "id": "jeans",
          "name": "Джинс",
          "hex": "#173D65",
          "images": [
            "images/img.jeans/1.webp",
            "images/img.jeans/2.webp",
            "images/img.jeans/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.jeans/4.webp",
            "images/img.jeans/5.webp",
            "images/img.jeans/6.webp"
          ]
        },
        {
          "id": "light-blue",
          "name": "Блакитно-синій",
          "hex": "#274F78",
          "images": [
            "images/img.jeans/7.webp",
            "images/img.jeans/8.webp",
            "images/img.jeans/9.webp"
          ]
        },
        {
          "id": "dark-blue",
          "name": "Темно-синій",
          "hex": "#192032",
          "images": [
            "images/img.jeans/10.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.jeans/11.webp",
            "images/img.jeans/12.webp",
            "images/img.jeans/13.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Блакитний",
          "hex": "#7795AD",
          "images": [
            "images/img.jeans/14.webp",
            "images/img.jeans/15.webp"
          ]
        }
      ],
      "old_price": 2800
    },
     {
      "id": "sale",
      "name": "Теплий флісовий костюм TNF",
      "sku": "BR A0090",
      "features": [
        "‼️ Фінальний розпродаж! Останні розміри зі знижкою -50%",
        "🔥 Теплий та комфортний — ідеальний для прохолодної погоди",
        "☁️ Мʼякий преміальний фліс — приємний до тіла, не колеться",
        "📐 Анатомічний крій — не сковує рухи, зручно цілий день",
        "✔️ Ідеальна посадка — підбираємо розмір по зросту і вазі",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1590,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.north/gr1.webp",
            "images/img.north/gr2.webp",
            "images/img.north/gr3.webp",
            "images/img.north/gr4.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.north/ch1.webp",
            "images/img.north/ch2.webp",
            "images/img.north/ch3.webp",
            "images/img.north/ch4.webp",
            "images/img.north/ch5.webp"
          ]
        }
      ],
      "old_price": 3180
    },
    {
      "id": "plush",
      "name": "Плюшевий костюм Royal Prime",
      "sku": "BR A0068",
      "features": [
        "‼️ Фінальний розпродаж! Останні розміри зі знижкою -50%",
        "🔥 Теплий та комфортний — ідеальний для прохолодної погоди",
        "☁️ Мʼякий преміальний фліс — приємний до тіла, не колеться",
        "📐 Анатомічний крій — не сковує рухи, зручно цілий день",
        "✔️ Ідеальна посадка — підбираємо розмір по зросту і вазі",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1249,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.plush/4.webp",
            "images/img.plush/6.webp",
            "images/img.plush/5.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.plush/1.webp",
            "images/img.plush/2.webp",
            "images/img.plush/3.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.plush/28.webp"
          ]
        },
        /*{
          "id": "white",
          "name": "Білий",
          "hex": "#f6f6f8ff",
          "images": [
            "images/img.plush/7.png",
            "images/img.plush/8.png",
            "images/img.plush/9.png"
          ]
        },*/
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#78866b",
          "images": [
            "images/img.plush/10.webp",
            "images/img.plush/11.webp"
          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#bbbbbb",
          "images": [
            "images/img.plush/13.webp",
            "images/img.plush/14.webp",
            "images/img.plush/15.webp"
          ]
        },
        /*{
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.plush/16.png",
            "images/img.plush/17.png",
            "images/img.plush/18.png"
          ]
        },*/
        {
          "id": "burgundy",
          "name": "Бордо",
          "hex": "#790604",
          "images": [
            "images/img.plush/19.webp",
            "images/img.plush/21.webp"
          ]
        },
        /*{
          "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "images": [
            "images/img.plush/22.png",
            "images/img.plush/23.png",
            "images/img.plush/24.png"
          ]
        },*/
        {
          "id": "green",
          "name": "Зелений",
          "hex": "#00a86b",
          "images": [
            "images/img.plush/25.webp",
            "images/img.plush/26.webp"
          ]
        }
      ],
      "old_price": 2498
    },    
    {
      "id": "Rayford",
      "name": "Утеплена замшева куртка Rayford",
      "relatedIds": ["Aero", "Velvet Jet", "Forge"],
      "features": [
        "🔥 Топова якість та стильний дизайн",
        "🍂 Сезон: весна–осінь",
        "🔝 Преміальна фурнітура",
        "🧸 Тепла підкладка з хутра — для додаткового комфорту в прохолодну погоду",
        "🔒 3 місткі передні кишені на блискавці + 1 внутрішня кишеня",
        "👌 Манжети на поясі та рукавах забезпечують комфортну посадку та допомагають куртці гарно сидіти на різній статурі",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1690,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "sku": "RAM 1723535621",
          "images": [
            "images/img.rayford/5.webp",
            "images/img.rayford/7.webp",
            "images/img.rayford/4.webp",
            "images/img.rayford/6.webp"
          ]
        },
        {
         "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "sku": "RAM 1757422799",
          "images": [
            "images/img.rayford/2.webp",
            "images/img.rayford/1.webp",
            "images/img.rayford/3.webp"
          ]
        }
      ],
      "old_price": 3250
    },
    {
      "id": "Velvet Jet",
      "name": "Бомбер Velvet Jet",
      "sku": "BR A0165, F0004",
      "relatedIds": ["Forge", "Base", "Aero"],
      "features": [
        "‼️ Розпродаж останніх розмірів ",
        "🔥 Замшевий бомбер - бомба сезону",
        "🧵 Якісне пошиття та акуратні шви",
        "🚀 Приталений крій — виглядаєш струнко й круто",
        "👌 Дорогий вигляд за адекватні гроші",
        "✨ Легко комбінується з іншим одягом",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1290,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.bomber-zamsh/1.webp",
            "images/img.bomber-zamsh/2.webp",
            "images/img.bomber-zamsh/3.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.bomber-zamsh/4.webp",
            "images/img.bomber-zamsh/5.webp",
            "images/img.bomber-zamsh/6.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.bomber-zamsh/7.webp",
            "images/img.bomber-zamsh/8.webp",
            "images/img.bomber-zamsh/9.webp"
          ]
        },
        {
          "id": "haki",
          "name": "Хакі",
          "hex": "#78866b",
          "images": [
            "images/img.bomber-zamsh/10.webp",
            "images/img.bomber-zamsh/11.webp",
            "images/img.bomber-zamsh/12.webp",
            "images/img.bomber-zamsh/13.webp",
            "images/img.bomber-zamsh/14.webp",
            "images/img.bomber-zamsh/15.webp",
            "images/img.bomber-zamsh/16.webp"
          ]
        },
        {
          "id": "burgundy",
          "name": "Бордо",
          "hex": "#790604",
          "images": [
            "images/img.bomber-zamsh/17.webp",
            "images/img.bomber-zamsh/18.webp",
            "images/img.bomber-zamsh/19.webp",
            "images/img.bomber-zamsh/20.webp"
          ]
        }
      ],
      "old_price": 2700
    },
    {
      "id": "TNF",
      "name": "Костюм TNF",
      "sku": "BR A0150",
      "relatedIds": ["Basic Premium", "Base", "zamsh-na-zmiyci"],
      "features": [
        "🔥 Стильний костюм: вітровка + штани — ідеальний варіант на кожен день 💣",
        "✔️ Преміум матеріал  — не продувається та відштовхує воду 💧🌬",
        "✔️ Підкладка з нейлону — комфорт навіть при активному русі 🏃‍♂️",
        "✔️ Логотип спереду та ззаду — виглядає дорого та помітно 🔥",
        "✔️ Фіксатори знизу та біля капюшона — підлаштовуєш під себе 🎯",
        "✔️ Штани на резинці + шнурок — ідеальна посадка 👌",
        "✔️ Розміри: S / M / L / XL / XXL",
        "💯 Підійде як для міста, так і для активного відпочинку",
        "⚡ Легкий, зручний та тримає форму",
        "🔝 Кількість обмежена — розбирають дуже швидко",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.TNFvesna/1.webp",
            "images/img.TNFvesna//2.webp",
            "images/img.TNFvesna//3.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.TNFvesna/4.webp",
            "images/img.TNFvesna/5.webp",
            "images/img.TNFvesna/6.webp"
          ]
        }
      ],
      "old_price": 2700
    },
    {
      "id": "Base",
      "name": "Футболка Base",
      "sku": "BR L0056, A0170",
      "relatedIds": ["Mono", "Jeans", "Velvet Jet"],
      "features": [
        "👕 Базова футболка преміум якості",
        "• Щільна преміальна бавовна виробництва Туреччини",
        "• Об'ємний (Oversize) крій для комфортної посадки",
        "• ТОП-якість пошиття та акуратні шви",
        "• Матеріал не кошлатиться та добре тримає форму",
        "• Приємна до тіла, дихаюча тканина",
        "• Ідеально підходить для щоденного носіння",
        "📏 Розміри: S, M, L, XL, 2XL,3XL,4XL",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 580,
      "colors": [
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.base/1.webp",
            "images/img.base/2.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.base/3.webp"
          ]
        }
      ],
      "old_price": 950
    },
        {
      "id": "Air",
      "name": "Куртка Air",
      "relatedIds": ["TNF", "Snake", "Forge"],
      "features": [
        "✨ Стильна демісезонна куртка для щоденного комфорту, яка поєднує практичність, комфорт та стильний мінімалістичний дизайн. Ідеально підходить для прохолодної погоди та легко доповнює будь-який повсякденний образ",
        "🔹 Легка та водночас тепла — комфорт у прохолодні дні",
        "💧 Стійка до вологи — матеріал не боїться дощу та сирої погоди",
        "🧥 Стильна посадка — гарно виглядає на фігурі та не сковує рухів",
        "👌 4 практичні кишені — для телефону, ключів та інших дрібниць",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "sku": "RAM 1643632472",
          "images": [
            "images/img.air/1.png",
            "images/img.air/2.png"
          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#bbbbbb",
          "sku": "RAM 1723456619",
          "images": [
            "images/img.air/3.png",
            "images/img.air/4.png"
          ]
        },
        {
          "id": "emerald",
          "name": "Зелений",
          "hex": "#175a43",
          "sku": "RAM 1692285964",
          "images": [
            "images/img.air/5.png",
            "images/img.air/6.png"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "sku": "RAM 1692286333",
          "images": [
            "images/img.air/7.png",
            "images/img.air/8.png"
          ]
        }
      ],
      "old_price": 2750
    },
    {
      "id": "Mono",
      "name": "Лонггслів Mono",
      "sku": "BR A0142",
      "relatedIds": ["Base", "Jeans", "Forge"],
      "features": [
        "☁️ Якісний трикотаж — м’яка та еластична тканина, що приємна до тіла та дозволяє шкірі дихати",
        "📐 Анатомічний крій — ідеально підкреслює плечі та руки, не сковуючи рухів. Комфорт на весь день",
        "✨ Зносостійкість — матеріал не кошлатиться і зберігає форму та насичений колір навіть після багатьох прань",
        "✔️ Ідеальна посадка — забудь про сумніви з розміром. Підбираємо розмір індивідуально за твоїм зростом та вагою",
        "👌 Легко комбінується з іншим одягом",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 590,
      "colors": [
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.longsliv/1.png",
            "images/img.longsliv/2.png",
            "images/img.longsliv/3.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.longsliv/4.png",
            "images/img.longsliv/5.png",
            "images/img.longsliv/6.png"
          ]
        }
      ],
      "old_price": 950
    },
    {
      "id": "Forge",
      "name": "Бомбер Forge",
      "sku": "BR F0029",
      "relatedIds": ["Prestige", "Velvet Jet", "Base"],
      "features": [
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре зберігає форму",
        "😎 Глибокий матовий чорний — виглядає дорого і статусно",
        "👌 Ідеальний крій бомбера — сидить акуратно на будь-якій фігурі",
        "🛋️ Зручні кишені + манжети на резинці — комфорт щодня",
        "🌧️ Практичний у догляді — легко очищується та стійкий до вологи",
        "🧵 Якісна екошкіра — зносостійка, не тріщить та довго зберігає охайний вигляд",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1390,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.bomber/1.webp",
            "images/img.bomber/2.webp",
            "images/img.bomber/3.webp"
          ]
        }
      ],
      "old_price": 2600
    },
        {
      "id": "Snake",
      "name": "Бомбер Snake",
      "relatedIds": ["Forge", "Prestige", "Velvet Jet"],
      "features": [
        "‼️ Розпродаж останніх розмірів",
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре зберігає форму",
        "😎 Стильний дизайн — виглядає дорого і статусно",
        "👌 Ідеальний крій бомбера — сидить акуратно на будь-якій фігурі",
        "🛋️ Зручні кишені + манжети на резинці — комфорт щодня",
        "🧵 Якісна екошкіра — зносостійка та довго зберігає охайний вигляд",
        "🌧️ Легко чиститься, не боїться дощу",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "sku": "RAM 1714376372",
          "images": [
            "images/img.bomber-snake/1.webp",
            "images/img.bomber-snake/3.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "sku": "RAM 1774860319",
          "images": [
            "images/img.bomber-snake/4.webp",
            "images/img.bomber-snake/5.webp",
            "images/img.bomber-snake/6.webp"
          ]
        }
      ],
      "old_price": 2800
    },
        {
      "id": "Prestige",
      "name": "Преміальна куртка Prestige",
      "sku": "BR D0005",
      "relatedIds": ["Forge", "Velvet Jet", "Base"],
      "features": [
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре тримає форму",
        "😎 Глибокий матовий чорний — виглядає дорого і статусно",
        "❄️ Утеплювач 150 г силікону — тепло без зайвого об’єму",
        "👌 Сучасний крій — чудово сідає по фігурі",
        "✋ Регульовані манжети на рукавах",
        "🎒 2 бічні кишені + внутрішня на грудях",
        "🧵 Якісна екошкіра - щільна, зносостійка, не тріщить",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1790,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.kozhanka/1.webp",
            "images/img.kozhanka/2.webp",
            "images/img.kozhanka/3.webp"
          ]
        }
      ],
      "old_price": 4200
    },
        {
      "id": "Aero",
      "name": "Замшева куртка Aero",
      "sku": "RAM 1745045936",
      "relatedIds": ["Velvet Jet", "Forge", "Air"],
      "features": [
        "✨ Якісна та приємна на дотик тканина",
        "🧥 Підходить на весну / осінь",
        "😎 Стильний сучасний крій — виглядає дорого",
        "🔥 Трендовий дизайн, який легко поєднати з будь-яким образом",
        "✂️ Розміри: S M L XL",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.aero/1.png",
            "images/img.aero/2.png",
            "images/img.aero/3.png"
          ]
        }
      ],
      "old_price": 2900
    },
    {
      "id": "Imperial",
      "name": "Куртка Imperial",
      "sku": "RA 2504",
      "relatedIds": ["Pulse", "Prestige", "Forge"],
      "features": [
       "‼️ Розпродаж останніх розмірів",
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре зберігає форму",
        "😎 Дорогий та статусний вигляд — легко доповнює сучасні образи",
        "🧥 М’яка підкладка — комфорт на кожен день",
        "🔒 Стильні кишені на грудях із застібками",
        "✔️ Дві зручні бокові кишені",
        "📱 Внутрішня кишеня для найважливішого",
        "🧵 Якісна екошкіра — зносостійка та довго зберігає охайний вигляд",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1799,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.chorn1699/1.webp",
            "images/img.chorn1699/2.webp",
            "images/img.chorn1699/3.webp"
          ]
        }
      ],
      "old_price": 3250
    },
    {
      "id": "Pulse",
      "name": "Куртка Pulse",
      "relatedIds": ["Imperial", "Prestige", "Forge"],
      "features": [
        "‼️ Розпродаж останніх розмірів",
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре зберігає форму",
        "😎 Дорогий та статусний вигляд — легко доповнює сучасні образи",
        "🧥 М’яка підкладка — комфорт на кожен день",
        "🔒 Стильні кишені на грудях із застібками",
        "✔️ Дві зручні бокові кишені",
        "📱 Внутрішня кишеня для найважливішого",
        "🧵 Якісна екошкіра — зносостійка та довго зберігає охайний вигляд",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1799,
      "colors": [
        {
         "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "sku": "RA 2508",
          "images": [
            "images/img.korich1699/1.webp",
            "images/img.korich1699/2.webp",
            "images/img.korich1699/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "sku": "RA 2504",
          "images": [
            "images/img.chorn1699/1.webp",
            "images/img.chorn1699/2.webp",
            "images/img.chorn1699/3.webp"
          ]
        }
      ],
      "old_price": 3250
    },
    {
      "id": "Blade",
      "name": "Куртка Blade",
      "features": [
        "‼️ Розпродаж останніх розмірів",
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре зберігає форму",
        "😎 Дорогий та статусний вигляд — легко доповнює сучасні образи",
        "🧥 М’яка підкладка — комфорт на кожен день",
        "🔒 Стильні кишені на грудях із застібками",
        "✔️ Дві зручні бокові кишені",
        "📱 Внутрішня кишеня для найважливішого",
        "🧵 Якісна екошкіра — зносостійка та довго зберігає охайний вигляд",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1890,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.chorn1799/1.webp",
            "images/img.chorn1799/2.webp",
            "images/img.chorn1799/3.webp",
            "images/img.chorn1799/4.webp",
            "images/img.chorn1799/5.webp",
            "images/img.chorn1799/6.webp",
            "images/img.chorn1799/7.webp",
            "images/img.chorn1799/8.webp",
            "images/img.chorn1799/9.webp",
            "images/img.chorn1799/10.webp",
            "images/img.chorn1799/11.webp",
            "images/img.chorn1799/12.webp"
          ]
        }
      ],
      "old_price": 3400
     },
     {
      "id": "Griffin",
      "name": "Куртка Griffin",
      "features": [
        "🔥 Косуха, яка формує твій стиль",
        "😎 Преміум еко-шкіра — м’яка та приємна на дотик",
        "🧥 Комфортна підкладка на кожен день",
        "🔒 Кишені на застібках + 2 внутрішні",
        "✔️ Ідеальна посадка по фігурі",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1799,
      "colors": [
        {
         "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "images": [
            "images/img.kosuha/1.png",
            "images/img.kosuha/2.png",
            "images/img.kosuha/3.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.kosuha/4.png",
            "images/img.kosuha/5.png",
            "images/img.kosuha/6.png"
          ]
        }
      ],
      "old_price": 3400
    },
    {
      "id": "Falcon",
      "name": "Куртка Falcon",
      "features": [
        "‼️ Розпродаж останніх розмірів",
        "🔥 Преміальна фактура — м’яка, щільна та приємна на дотик, добре зберігає форму",
        "😎 Приталена модель, виглядає дорого і статусно",
        "🧥 М’яка підкладка — комфорт на кожен день",
        "🔒 Стильні кишені на грудях із застібками",
        "✔️ Дві зручні бокові кишені на застібках",
        "📱 Внутрішня кишеня для найважливішого",
        "🧵 Якісна екошкіра — зносостійка та довго зберігає охайний вигляд",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1790,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.chorn1749/1.webp",
            "images/img.chorn1749/2.webp",
            "images/img.chorn1749/3.webp",
            "images/img.chorn1749/4.webp"
          ]
        }
      ],
      "old_price": 3350
    },
     {
      "id": "Hunter",
      "name": "Бомбер Hunter",
      "features": [
        "💥 Чоловіча шкіряна куртка бомбер",
        "🌤 Ідеально підходить на теплу пору року",
        "🖤 Легко комбінується з будь-яким гардеробом",
        "🧥 Якісна еко-шкіра",
        "⚡️ Застібка на блискавку",
        "🎒 Функціональні кишені: на блискавках + 2 бічні + на рукаві",
        "🔒 1 внутрішня кишеня",
        "✨ Манжетна резинка на поясі та рукавах",
        "🪶 Легка тканинна з підкладкою",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1449,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.hunter/1.png",
            "images/img.hunter/2.png",
            "images/img.hunter/3.png",
            "images/img.hunter/4.png"
          ]
        }
      ],
      "old_price": 3150
    },
    {
      "id": "Matrix",
      "name": "Жилетка Matrix",
      "features": [
        "‼️ Розпродаж останніх розмірів",
        "🥼 Чоловіча жилетка — ідеальний вибір на кожен день",
        "✔️ Легка, але добре зберігає тепло (утеплювач: синтепон)",
        "✔️ Матеріал: 100% поліестер — м’яка та приємна на дотик",
        "✔️ Ідеально сідає по фігурі",
        "✔️ Кишені на застібках + 2 внутрішні",
        "✔️ Манжети та пояс на резинці — зручно та практично",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1090,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.matrix/1.png",
            "images/img.matrix/2.png",
            "images/img.matrix/3.png",
            "images/img.matrix/4.png",
            "images/img.matrix/5.png"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.matrix/6.png",
            "images/img.matrix/7.png",
            "images/img.matrix/8.png",
            "images/img.matrix/9.png",
            "images/img.matrix/10.png",
            "images/img.matrix/11.png",
            "images/img.matrix/12.png"
          ]
        },
        {
          "id": "haki",
          "name": "Хакі",
          "hex": "#78866b",
          "images": [
            "images/img.matrix/13.png",
            "images/img.matrix/14.png",
            "images/img.matrix/15.png",
            "images/img.matrix/16.png",
            "images/img.matrix/17.png"
          ]
        },
      ],
      "old_price": 2250
    },
    {
      "id": "Praga",
      "name": "Бомбер Praga",
      "sku": "BR D0041",
      "features": [
        "🍂 Ідеальний сезон осінь/весна — комфорт від 0° до +20°",
        "🧥 Нейлон преміум-якості — тримає форму та виглядає акуратно",
        "🔥 Силіконова підкладка 150 — легкий, але по-справжньому теплий",
        "👌 Є внутрішня кишеня + надійна чорна застібка — продумано до деталей",
        "🎨 Кольори: чорний, сірий та глибокий синій — універсальна база",
        "💭 Той варіант, який надягаєш і не думаєш — пасує завжди",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1290,
      "colors": [
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#bbbbbb",
          "images": [
            "images/img.bomber-praga/7.png",
            "images/img.bomber-praga/8.png",
            "images/img.bomber-praga/9.png"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.bomber-praga/4.png",
            "images/img.bomber-praga/5.png",
            "images/img.bomber-praga/6.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.bomber-praga/1.png",
            "images/img.bomber-praga/2.png",
            "images/img.bomber-praga/3.png"

          ]
        }
      ],
      "old_price": 2600
    },
    {
      "id": "LinenSet",
      "name": "Комплект LinenSet",
      "description": "Легкий літній комплект з льону",
      "features": [
        "🔥 Льняний комплект: сорочка + шорти",
        "☁️ Легкий, дихаючий льон — ідеально в спеку",
        "🚀 Сідає по фігурі",
        "✔️ Максимальний комфорт на кожен день",
        "✨ Шорти на шнурку + 2 кишені",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1390,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.linenset/19.webp",
            "images/img.linenset/18.webp",
            "images/img.linenset/17.webp"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.linenset/1.webp",
            "images/img.linenset/2.webp",
            "images/img.linenset/3.webp",
            "images/img.linenset/4.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.linenset/5.webp",
            "images/img.linenset/6.webp",
            "images/img.linenset/7.webp",
            "images/img.linenset/8.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.linenset/20.webp",
            "images/img.linenset/21.webp",
            "images/img.linenset/22.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.linenset/10.webp",
            "images/img.linenset/9.webp",
            "images/img.linenset/11.webp",
            "images/img.linenset/12.webp"
          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
            "images/img.linenset/14.webp",
            "images/img.linenset/13.webp",
            "images/img.linenset/16.webp"
          ]
        }
      ],
      "old_price": 2800
    },
    {
      "id": "Tenor",
      "name": "Лляний комплект Tenor",
      "description": "Легкий літній комплект з льону",
      "features": [
        "‼️ Фінальний розпродаж останніх розмірів",
        "🔥 Льняний комплект: сорочка + шорти",
        "☁️ Легкий, дихаючий льон — ідеально в спеку",
        "🚀 Сідає по фігурі",
        "✔️ Максимальний комфорт на кожен день",
        "✨ Шорти на шнурку + 2 кишені",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1190,
      "colors": [
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
            "images/img.tenor/1.webp",
            "images/img.tenor/2.webp",
            "images/img.tenor/3.webp"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.tenor/4.webp",
            "images/img.tenor/5.webp",
            "images/img.tenor/6.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.tenor/7.webp",
            "images/img.tenor/8.webp",
            "images/img.tenor/9.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.tenor/10.webp",
            "images/img.tenor/11.webp",
            "images/img.tenor/12.webp"
          ]
        }
      ],
      "old_price": 2600
    },
    {
      "id": "Benton",
      "name": "Лляний комплект Benton",
      "description": "Легкий літній комплект з льону",
      "features": [
        "‼️ Фінальний розпродаж останніх розмірів",
        "🔥 Льняний комплект: сорочка + шорти",
        "☁️ Легкий, дихаючий льон-жатка",
        "🚀 Сідає по фігурі",
        "✔️ Максимальний комфорт на кожен день",
        "✨ Шорти на шнурку + 2 кишені",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1090,
      "colors": [
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
            "images/img.benton/1.webp",
            "images/img.benton/2.webp",
            "images/img.benton/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.benton/4.webp",
            "images/img.benton/5.webp",
            "images/img.benton/6.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.benton/7.webp",
            "images/img.benton/8.webp",
            "images/img.benton/9.webp"
          ]
        }
      ],
      "old_price": 2500
    },
    {
      "id": "Stamix",
      "name": "Комплект Stamix",
      "description": "Легкий літній комплект з льону",
      "features": [
        "🔥 Льняний комплект: сорочка + шорти",
        "☁️ Легкий, дихаючий льон — ідеально в спеку",
        "🚀 Сідає по фігурі",
        "✔️ Максимальний комфорт на кожен день",
        "✨ Шорти на шнурку + 2 кишені",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
            "images/img.stamix/1.webp",
            "images/img.stamix/2.webp",
            "images/img.stamix/3.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.stamix/4.webp",
            "images/img.stamix/5.webp",
            "images/img.stamix/6.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.stamix/7.webp",
            "images/img.stamix/8.webp",
            "images/img.stamix/9.webp"
          ]
        }
      ],
      "old_price": 2800
    },
    {
      "id": "Divento",
      "name": "Комплект Divento",
      "description": "Легкий літній комплект преміальної якості",
      "features": [
        "🔝 Хіт літнього сезону",
        "✨ Преміальний матеріал мустанг у рубчик",
        "👌 Комфортна посадка на кожен день",
        "🧵 Якісне пошиття та акуратні шви",
        "💨 Приємна до тіла та дихаюча тканина",
        "🔄 Добре тримає форму після прання",
        "🎯 Легко поєднується з будь-яким взуттям",
        "🔥 Універсальний образ для міста та відпочинку",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1290,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.divento/1.webp",
            "images/img.divento/2.webp",
            "images/img.divento/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.divento/4.webp",
            "images/img.divento/5.webp",
            "images/img.divento/6.webp"
            
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.divento/7.webp",
            "images/img.divento/8.webp",
            "images/img.divento/9.webp"
          ]
        }
      ],
      "old_price": 2700
    },
    {
      "id": "Kayro",
      "name": "Комплект Kayro",
      "features": [
        "‼️ Фінальний розпродаж останніх розмірів",
        "🔥 Літній комплект: футболка + шорти ",
        "👌 Стильний готовий образ на кожен день",
        "✔️ Приємний до тіла матеріал — бавовна",
        "✔️ Добре тримає форму",
        "✔️ Комфортна посадка та сучасний крій",
        "✔️ Ідеально для міста, відпочинку та подорожей",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1190,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.kayro/1.webp",
            "images/img.kayro/2.webp",
            "images/img.kayro/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.kayro/4.webp",
            "images/img.kayro/5.webp",
            "images/img.kayro/6.webp"
          ]
        }
      ],
      "old_price": 2050
    },
    {
      "id": "Eterno",
      "name": "Комплект Eterno",
      "description": "Легкий літній комплект преміальної якості",
      "features": [
        "‼️ Фінальний розпродаж останніх розмірів",
        "🔝 Хіт літнього сезону",
        "✨ Преміальний матеріал мустанг у рубчик",
        "👌 Комфортна посадка на кожен день",
        "🧵 Якісне пошиття та акуратні шви",
        "💨 Приємна до тіла та дихаюча тканина",
        "🔄 Добре тримає форму після прання",
        "🎯 Легко поєднується з будь-яким взуттям",
        "🔥 Універсальний образ для міста та відпочинку",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1190,
      "colors": [
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.eterno/1.webp",
            "images/img.eterno/2.webp",
            "images/img.eterno/3.webp"
          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#BCC6CC",
          "images": [
            "images/img.eterno/4.webp",
            "images/img.eterno/5.webp",
            "images/img.eterno/6.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.eterno/7.webp",
            "images/img.eterno/8.webp",
            "images/img.eterno/9.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.eterno/10.webp",
            "images/img.eterno/11.webp",
            "images/img.eterno/12.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.eterno/13.webp",
            "images/img.eterno/14.webp",
            "images/img.eterno/15.webp"
            
          ]
        }
      ],
      "old_price": 2500
    },
    {
      "id": "Dune",
      "name": "Комплект Dune",
      "features": [
        "🔥 В тренді цього сезону: Лляний комплект сорочка та штани",
        "😎 Стильно • Легко • Комфортно",
        "✔️ Розміри: S M L XL XXL",
        "✔️ Матеріал: льон",
        "✔️ Висока якість пошиву, не просвічується",
        "✔️ Стильний мінімалізм, який завжди актуальний",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1690,
      "colors": [
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.dune/1.webp",
            "images/img.dune/2.webp",
            "images/img.dune/3.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.dune/4.webp",
            "images/img.dune/5.webp",
            "images/img.dune/6.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.dune/7.webp",
            "images/img.dune/8.webp",
            "images/img.dune/9.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.dune/10.webp",
            "images/img.dune/11.webp",
            "images/img.dune/12.webp"
          ]
        }
      ],
      "old_price": 2900
    },
    {
      "id": "Vibe",
      "name": "Комплект Vibe",
      "features": [
        "🔥 Льняний комплект: футболка + шорти",
        "☁️ 100% натуральний льон — легкий та дихаючий",
        "🌡 Ідеальний варіант на літо та спеку",
        "👌 Футболка з V-подібним вирізом",
        "✨ Шорти на резинці + шнурок для ідеальної посадки",
        "👜 2 зручні бічні кишені",
        "🚀 Комфортна посадка по фігурі",
        "✔️ Стильний мінімалістичний look на кожен день",
        "📏 Розміри: S, M, L, XL, XXL",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1390,
      "colors": [
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.vibe/1.webp",
            "images/img.vibe/2.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.vibe/3.webp",
            "images/img.vibe/4.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.vibe/5.webp",
            "images/img.vibe/6.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.vibe/7.webp",
            "images/img.vibe/8.webp"
          ]
        }
      ],
      "old_price": 2800
    },
    {
      "id": "Carvelo",
      "name": "Комплект Carvelo",
      "features": [
        "🔥 Льняний комплект: сорочка + шорти",
        "☁️ 100% натуральний льон — легкий та дихаючий",
        "🌡 Ідеальний варіант на літо та спеку",
        "👌 Стильна сорочка на ґудзиках",
        "✨ Шорти на резинці + шнурок для ідеальної посадки",
        "👜 2 зручні бічні кишені",
        "🚀 Комфортна посадка по фігурі",
        "✔️ Стильний мінімалістичний look на кожен день",
        "📏 Розміри: S, M, L, XL, XXL",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.carvelo/1.png",
            "images/img.carvelo/2.png"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.carvelo/3.png",
            "images/img.carvelo/4.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.carvelo/5.png",
            "images/img.carvelo/6.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.carvelo/7.png",
            "images/img.carvelo/8.png"
          ]
        }
      ],
      "old_price": 2900
    },
        {
      "id": "Nox",
      "name": "Комплект Nox",
      "features": [
        "🔥 Літній комплект: футболка + шорти ",
        "👌 Стильний готовий образ на кожен день",
        "✔️ Приємний до тіла матеріал — двунитка",
        "✔️ Добре тягнеться та тримає форму",
        "✔️ Комфортна посадка та сучасний крій",
        "✔️ Ідеально для міста, відпочинку та подорожей",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 990,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.nox/1.webp",
            "images/img.nox/2.webp",
            "images/img.nox/3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.nox/4.webp",
            "images/img.nox/5.webp",
            "images/img.nox/6.webp"
          ]
        },
        {
          "id": "emerald",
          "name": "Зелений",
          "hex": "#175a43",
          "images": [
            "images/img.nox/7.webp",
            "images/img.nox/8.webp",
            "images/img.nox/9.webp"
          ]
        }
      ],
      "old_price": 1650
    },
    {
      "id": "Aura",
      "name": "Комплект Aura",
      "features": [
        "🔝 Хіт літнього сезону",
        "🔥 Oversize комплект: сорочка + шорти",
        "👌 Виглядає дорого — без зайвих зусиль",
        "✔️ Фактурний матеріал (рубчик) — приємний до тіла, тримає форму",
        "✔️ Вільний крій — максимум комфорту в спеку",
        "✔️ Легкий, дихаючий — ідеально на кожен день",
        "✔️ Стиль, який привертає увагу з першого погляду",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1190,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.aura/1.png",
            "images/img.aura/2.png",
            "images/img.aura/3.png"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.aura/4.png",
            "images/img.aura/5.png",
            "images/img.aura/6.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.aura/7.png",
            "images/img.aura/8.png"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.aura/9.png",
            "images/img.aura/10.png"
          ]
        }
      ],
      "old_price": 2600
    },
    {
      "id": "Breeze",
      "name": "Комплект Breeze",
      "features": [
        "🔝 Хіт літнього сезону",
        "🔥 Oversize комплект: сорочка + шорти",
        "👌 Виглядає дорого — без зайвих зусиль",
        "✔️ Фактурний матеріал (рубчик) — приємний до тіла, тримає форму",
        "✔️ Вільний крій — максимум комфорту в спеку",
        "✔️ Легкий, дихаючий — ідеально на кожен день",
        "✔️ Стиль, який привертає увагу з першого погляду",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1390,
      "colors": [
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.breeze/10.webp",
            "images/img.breeze/11.webp",
            "images/img.breeze/12.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.breeze/1.webp",
            "images/img.breeze/2.webp",
            "images/img.breeze/3.webp"
          ]
        },
        {
          "id": "white",
          "name": "Білий",
          "hex": "#ffffff",
          "images": [
            "images/img.breeze/4.webp",
            "images/img.breeze/5.webp",
            "images/img.breeze/6.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.breeze/7.webp",
            "images/img.breeze/8.webp",
            "images/img.breeze/9.webp"
          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#bbbbbb",
          "images": [
            "images/img.breeze/13.webp",
            "images/img.breeze/14.webp",
            "images/img.breeze/15.webp"
          ]
        }
      ],
      "old_price": 2700
    },
    {
      "id": "Musair",
      "name": "Комплект Musair",
      "features": [
        "🔥 Мусліновий комплект: сорочка + шорти",
        "💯 100% котон — дихає і не парить",
        "☁️ Легкий та супер приємний до тіла",
        "✔️ Максимальний комфорт на кожен день",
        "👌 Сідає на будь-яку статуру ",
        "✨ Шорти на шнурку — комфорт на максимум",
        "🔝 1 нагрудна кишеня + 2 на шортах",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1349,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.musair/1.png",
            "images/img.musair/2.png",
            "images/img.musair/3.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.musair/4.png",
            "images/img.musair/5.png",
            "images/img.musair/6.png"
          ]
        },
        {
          "id": "mint",
          "name": "М'ятний",
          "hex": "#AAF0D1",
          "images": [
            "images/img.musair/7.png",
            "images/img.musair/8.png",
            "images/img.musair/9.png"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.musair/10.png",
            "images/img.musair/11.png",
            "images/img.musair/12.png"
          ]
        }
      ],
      "old_price": 2700
    },
    {
      "id": "Cordy",
      "name": "Комплект Cordy",
      "features": [
        "🔥 Літній комплект: сорочка + шорти ",
        "☁️ Вельвет — м’який, приємний до тіла",
        "🔝 Трендові рубчики виглядають дорого",
        "✔️ Ідеально сідає по фігурі",
        "✨ Шорти на шнурку — максимум зручності",
        "👌 1 кишеня на сорочці + 2 на шортах",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1390,
      "colors": [
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.cordy/1.webp",
            "images/img.cordy/2.webp",
            "images/img.cordy/3.webp"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.cordy/7.webp",
            "images/img.cordy/8.webp",
            "images/img.cordy/9.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.cordy/4.webp",
            "images/img.cordy/5.webp",
            "images/img.cordy/6.webp"
          ]
        }
      ],
      "old_price": 2750
    },
    {
      "id": "Onyx",
      "name": "Комплект Onyx",
      "features": [
        "🔥 Літній комплект: футболка + шорти ",
        "👌 Стильний готовий образ на кожен день",
        "✔️ Приємний до тіла матеріал — двунитка",
        "✔️ Добре тягнеться та тримає форму",
        "✔️ Комфортна посадка та сучасний крій",
        "✔️ Ідеально для міста, відпочинку та подорожей",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1190,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.onyx/1.webp",
            "images/img.onyx/2.webp",
            "images/img.onyx/3.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.onyx/4.webp",
            "images/img.onyx/5.webp",
            "images/img.onyx/6.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.onyx/7.webp",
            "images/img.onyx/8.webp",
            "images/img.onyx/9.webp"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.onyx/10.webp",
            "images/img.onyx/11.webp",
            "images/img.onyx/12.webp"
          ]
        }
      ],
      "old_price": 2250
    },
    {
      "id": "Classic Style",
      "name": "Комплект Classic Style",
      "features": [
        "🔥 Класична сорочка та брюки — ідеальний вибір для створення елегантного та стильного образу. Комплект виготовлений з якісної турецької тканини, що складається на 97% з бавовни та на 3% зі стрейчу. Такий склад забезпечує комфорт під час носіння, м’якість на дотик і легку еластичність, яка не сковує рухів.",
        "💎 Стриманий та універсальний дизайн",
        "🌿 Натуральна бавовняна основа — дихає та приємна до тіла",
        "🔄 Легка еластичність завдяки стрейчу",
        "🔝 Ідеально підходить для роботи, ділових зустрічей або щоденного використання",
        "👌 Акуратний крій, який підкреслює фігуру",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1749,
      "colors": [
        {
          "id": "Біла сорочка+чорні брюки",
          "name": "Біла сорочка+чорні брюки",
          "hex": "#f5f6fc",
          "images": [
            "images/img.classik-sorochka-bryuki/1.png",
            "images/img.classik-sorochka-bryuki/7.png",
            "images/img.classik-sorochka-bryuki/8.png"
          ]
        },
        {
          "id": "Чорна сорочка+чорні брюки",
          "name": "Чорна сорочка+чорні брюки",
          "hex": "#111113ff",
          "images": [
            "images/img.classik-sorochka-bryuki/2.png",
            "images/img.classik-sorochka-bryuki/9.png",
            "images/img.classik-sorochka-bryuki/10.png"
          ]
        },
        {
          "id": "Біла сорочка+графітові брюки",
          "name": "Біла сорочка+графітові брюки",
          "hex": "#616267",
          "images": [
            "images/img.classik-sorochka-bryuki/3.png",
            "images/img.classik-sorochka-bryuki/11.png",
            "images/img.classik-sorochka-bryuki/12.png"
          ]
        },
        {
          "id": "Чорна сорочка+графітові брюки",
          "name": "Чорна сорочка+графітові брюки",
          "hex": "#333232",
          "images": [
            "images/img.classik-sorochka-bryuki/4.png",
            "images/img.classik-sorochka-bryuki/13.png",
            "images/img.classik-sorochka-bryuki/14.png"
          ]
        },
        {
          "id": "Біла сорочка+сірі брюки",
          "name": "Біла сорочка+сірі брюки",
          "hex": "#aeb9b5",
          "images": [
            "images/img.classik-sorochka-bryuki/5.png",
            "images/img.classik-sorochka-bryuki/15.png",
            "images/img.classik-sorochka-bryuki/16.png"
          ]
        },
        {
          "id": "Чорна сорочка+сірі брюки",
          "name": "Чорна сорочка+сірі брюки",
          "hex": "#727473",
          "images": [
            "images/img.classik-sorochka-bryuki/6.png",
            "images/img.classik-sorochka-bryuki/17.png",
            "images/img.classik-sorochka-bryuki/18.png"
          ]
        }
      ],
      "old_price": 2400
    },
    {
      "id": "A",
      "name": "Костюм Casual Business",
      "features": [
        "🔥 Бездоганне поєднання класичного стилю та вуличної моди",
        "💎 Преміальна тканина що, не мнеться та зберігає ідеальний вигляд протягом усього дня",
        "🤸 Анатомічний крій — не сковує рухи, зручно цілий день",
        "✔️ Ідеальна посадка — підбираємо розмір по зросту і вазі",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1690,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.pidzhak-A/grey1.webp",
            "images/img.pidzhak-A/grey2.webp",
            "images/img.pidzhak-A/grey3.webp"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.pidzhak-A/black1.webp",
            "images/img.pidzhak-A/black2.webp",
            "images/img.pidzhak-A/black3.webp"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.pidzhak-A/blue1.webp",
            "images/img.pidzhak-A/blue2.webp",
            "images/img.pidzhak-A/blue3.webp"
          ]
        },
        {
          "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "images": [
            "images/img.pidzhak-A/brown1.webp",
            "images/img.pidzhak-A/brown2.webp"
          ]
        },
        {
          "id": "green",
          "name": "Зелений",
          "hex": "#175a43",
          "images": [
            "images/img.pidzhak-A/green1.webp",
            "images/img.pidzhak-A/green2.webp"
          ]
        }
      ],
      "old_price": 2900
    },
    {
      "id": "Twilline",
      "name": "Комплект Twilline",
      "features": [
        "🔥 Образ, який закриває питання «що вдягнути»",
        "✨ Комплект: сорочка + штани",
        "✔️ Матеріал: тіар — приємний до тіла, тримає форму і виглядає охайно",
        "✔️ Легкий і зручний на кожен день",
        "✔️ Ідеально сідає та не сковує рухів",
        "✔️ Можна носити разом або комбінувати окремо",
        "💣 Виглядає стильно без зайвих зусиль",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1490,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.twilline/1.png",
            "images/img.twilline/2.png",
            "images/img.twilline/3.png"

          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#bbbbbb",
          "images": [
            "images/img.twilline/4.png",
            "images/img.twilline/5.png",
            "images/img.twilline/6.png"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.twilline/7.png",
            "images/img.twilline/8.png",
            "images/img.twilline/9.png"
          ]
        }
      ],
      "old_price": 2900
    },
    /*{
      "id": "Patriot UA",
      "name": "Костюм Patriot UA",
      "sku": "BR A0062",
      "features": [
        "🍂 Сезон весна/осінь — ідеальний баланс комфорту та практичності",
        "🇺🇦 Тризуб — якісна вишивка, що додає характеру та стилю",
        "👌 Матеріал двунитка — щільний, тримає форму та не розтягується",
        "🌿 Бавовна + поліестер — приємний до тіла та зносостійкий",
        "🏃 Підійде для повсякденного носіння та занять спортом",
        "💪 Зручний крій — комфорт на кожен день",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1249,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.kostium-trisub/1.png",
            "images/img.kostium-trisub/2.png",
            "images/img.kostium-trisub/3.png",
            "images/img.kostium-trisub/4.png",
            "images/img.kostium-trisub/5.png",
            "images/img.kostium-trisub/6.png",
            "images/img.kostium-trisub/7.png"
          ]
        }
      ],
      "old_price": 2600
    },*/
    {
      "id": "Axis",
      "name": "Замшевий костюм Axis",
      "features": [
        "🔥 Базовий замшевий костюм — це стильне та комфортне рішення для повсякденного образу. М'яка замшева тканина приємна до тіла, має гарну посадку та виглядає елегантно. Ідеально підходить як для прогулянок, так і для неформальних зустрічей чи домашнього затишку",
        "✂️ Трендовий крій",
        "☁️ Приємна на дотик замшева тканина",
        "✔️ Підходить до будь-якої пори року",
        "👌 Легко комбінується з іншим одягом",
        "📦 Відправка новою поштою накладеним платежем"
      ],
      "price": 1590,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.zamsh-baza/1.png",
            "images/img.zamsh-baza/2.png",
            "images/img.zamsh-baza/3.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.zamsh-baza/4.png",
            "images/img.zamsh-baza/5.png",
            "images/img.zamsh-baza/6.png"
          ]
        },
        {
          "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "images": [
            "images/img.zamsh-baza/7.png",
            "images/img.zamsh-baza/8.png",
            "images/img.zamsh-baza/9.png"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.zamsh-baza/10.png",
            "images/img.zamsh-baza/11.png",
            "images/img.zamsh-baza/12.png"
          ]
        },
        {
          "id": "emerald",
          "name": "Зелений",
          "hex": "#175a43",
          "images": [
            "images/img.zamsh-baza/13.png",
            "images/img.zamsh-baza/14.png",
            "images/img.zamsh-baza/15.png"
          ]
        }
      ],
      "old_price": 2700
    },
    {
      "id": "polar",
      "name": "PolarFleece — тепллий флісовий костюм",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Плотний фліс — тепло до −10°C",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1099,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#0b0b0b",
          "images": [
            "images/fleece/1.png",
            "images/fleece/2.png"
          ]
        },
        {
          "id": "anthracite",
          "name": "Антрацит",
          "hex": "#616267",
          "images": [
            "images/fleece/10.png",
            "images/fleece/11.png"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/fleece/20.png",
            "images/fleece/21.png"
          ]
        },
        {
          "id": "emerald",
          "name": "Смарагд",
          "hex": "#00a86b",
          "images": [
            "images/fleece/50.png"
          ]
        }
      ],
      "old_price": 1799
    },
    {
      "id": "bayer",
      "name": "Теплий зимовий костюм Nordic",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1149,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.bayer/1.png",
            "images/img.bayer/2.png",
            "images/img.bayer/3.png",
            "images/img.bayer/4.png",
            "images/img.bayer/5.png",
            "images/img.bayer/6.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.bayer/7.png",
            "images/img.bayer/8.png",
            "images/img.bayer/9.png"
          ]
        },
        {
          "id": "biege",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.bayer/10.png",
            "images/img.bayer/11.png",
            "images/img.bayer/12.png"
          ]
        }
      ],
      "old_price": 1549
    },
    {
      "id": "gudzik",
      "name": "Теплий флісовий костюм Urban Winter",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1349,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.gudzik/4.png",
            "images/img.gudzik/3.png",
            "images/img.gudzik/2.png",
            "images/img.gudzik/1.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.gudzik/5.png",
            "images/img.gudzik/6.png",
            "images/img.gudzik/7.png",
            "images/img.gudzik/8.png",
            "images/img.gudzik/9.png"
          ]
        }
      ],
      "old_price": 1749
    },
    {
      "id": "zefir",
      "name": "Зимовий костюм Shift",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1349,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.zefir/1.png",
            "images/img.zefir/2.png",
            "images/img.zefir/3.png",
            "images/img.zefir/4.png",
            "images/img.zefir/5.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.zefir/6.png",
            "images/img.zefir/7.png",
            "images/img.zefir/8.png",
            "images/img.zefir/9.png",
            "images/img.zefir/10.png"
          ]
        },
        {
          "id": "emerald",
          "name": "Смарагд",
          "hex": "#00a86b",
          "images": [
            "images/img.zefir/11.png",
            "images/img.zefir/12.png",
            "images/img.zefir/13.png",
            "images/img.zefir/14.png",
            "images/img.zefir/15.png"
          ]
        }
      ],
      "old_price": 1749
    },
    {
      "id": "plashovka",
      "name": "Костюм Nowind",
      "description": "Не продуває, преміальний крій — підходить для носіння в непогоду.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1249,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.plashovka/1.png",
            "images/img.plashovka/2.png",
            "images/img.plashovka/3.png",
            "images/img.plashovka/4.png",
            "images/img.plashovka/5.png",
            "images/img.plashovka/6.png"
          ]
        },
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#78866b",
          "images": [
            "images/img.plashovka/7.png",
            "images/img.plashovka/8.png",
            "images/img.plashovka/9.png",
            "images/img.plashovka/10.png",
            "images/img.plashovka/11.png",
            "images/img.plashovka/12.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.plashovka/13.png",
            "images/img.plashovka/14.png",
            "images/img.plashovka/15.png",
            "images/img.plashovka/16.png"
          ]
        },
        {
          "id": "grey",
          "name": "Сірий",
          "hex": "#bbbbbb",
          "images": [
            "images/img.plashovka/17.png",
            "images/img.plashovka/18.png"
          ]
        }
      ],
      "old_price": 1599
    },
    {
      "id": "chelsi",
      "name": "Теплий костюм Apex",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1529,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.chelsi/6.png",
            "images/img.chelsi/7.png",
            "images/img.chelsi/8.png",
            "images/img.chelsi/9.png",
            "images/img.chelsi/10.png"
          ]
        },
        {
          "id": "biege",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.chelsi/11.png",
            "images/img.chelsi/12.png",
            "images/img.chelsi/13.png",
            "images/img.chelsi/14.png",
            "images/img.chelsi/15.png"
          ]
        },
        {
          "id": "pistachio",
          "name": "Фісташковий",
          "hex": "#84B067",
          "images": [
            "images/img.chelsi/1.png",
            "images/img.chelsi/2.png",
            "images/img.chelsi/3.png",
            "images/img.chelsi/4.png",
            "images/img.chelsi/5.png"
          ]
        },
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#78866b",
          "images": [
            "images/img.chelsi/16.png",
            "images/img.chelsi/17.png",
            "images/img.chelsi/18.png",
            "images/img.chelsi/19.png",
            "images/img.chelsi/20.png"
          ]
        }
      ],
      "old_price": 1829
    },
    {
      "id": "polar-premium",
      "name": "Теплий костюм Fortress",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1729,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.polarpremium/7.png",
            "images/img.polarpremium/5.png",
            "images/img.polarpremium/6.png",
            "images/img.polarpremium/4.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.polarpremium/2.png",
            "images/img.polarpremium/1.png",
            "images/img.polarpremium/3.png"
          ]
        }
      ],
      "old_price": 2129
    },
    {
      "id": "puhovik",
      "name": "Зимовий пуховик Puff",
      "description": "Теплий, легкий та універсальний.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1849,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.puhovik/9.png",
            "images/img.puhovik/11.png",
            "images/img.puhovik/12.png",
            "images/img.puhovik/7.png",
            "images/img.puhovik/8.png",
            "images/img.puhovik/16.png",
            "images/img.puhovik/14.png",
            "images/img.puhovik/15.png",
            "images/img.puhovik/10.png",
            "images/img.puhovik/13.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.puhovik/1.png",
            "images/img.puhovik/3.png",
            "images/img.puhovik/4.png",
            "images/img.puhovik/2.png",
            "images/img.puhovik/5.png",
            "images/img.puhovik/6.png"
          ]
        },
        {
          "id": "blue",
          "name": "Синій",
          "hex": "#000080",
          "images": [
            "images/img.puhovik/17.png",
            "images/img.puhovik/18.png",
            "images/img.puhovik/19.png",
            "images/img.puhovik/20.png",
            "images/img.puhovik/21.png",
            "images/img.puhovik/22.png",
            "images/img.puhovik/23.png",
            "images/img.puhovik/24.png",
            "images/img.puhovik/25.png",
            "images/img.puhovik/26.png",
            "images/img.puhovik/27.png"
          ]
        },
        {
          "id": "emerald",
          "name": "Смарагд",
          "hex": "#00a86b",
          "images": [
            "images/img.puhovik/28.png",
            "images/img.puhovik/29.png",
            "images/img.puhovik/30.png",
            "images/img.puhovik/31.png",
            "images/img.puhovik/32.png",
            "images/img.puhovik/33.png"
          ]
        }
      ],
      "old_price": 2199
    },
    {
      "id": "balaklava",
      "name": "Зимова шапка Ghost",
      "description": "Легка, тепла та універсальна.",
      "features": [
        "Якісний матеріал",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 549,
      "colors": [
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#4B5320",
          "images": [
            "images/img.balaklava/4.png",
            "images/img.balaklava/3.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.balaklava/1.png",
            "images/img.balaklava/2.png"
          ]
        },
        {
          "id": "camouflage",
          "name": "Камуфляж",
          "hex": "#78866b",
          "images": [
            "images/img.balaklava/7.png",
            "images/img.balaklava/8.png",
            "images/img.balaklava/5.png",
            "images/img.balaklava/6.png"
          ]
        },
        {
          "id": "camouflage biege",
          "name": "Камуфляж Беж",
          "hex": "#e4e3beff",
          "images": [
            "images/img.balaklava/13.png",
            "images/img.balaklava/14.png",
            "images/img.balaklava/15.png"
          ]
        }
      ],
      "old_price": 649
    },
    {
      "id": "shapka-baf",
      "name": "Зимова шапка+баф Duo",
      "description": "Зимовий комлект.",
      "features": [
        "Якісний матеріал",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 499,
      "colors": [
        {
          "id": "biege",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.baf/4.png",
            "images/img.baf/3.png",
            "images/img.baf/5.png"
          ]
        },
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#4B5320",
          "images": [
            "images/img.baf/10.png",
            "images/img.baf/9.png",
            "images/img.baf/12.png"
          ]
        }
      ],
      "old_price": 649
    },
    {
      "id": "plush-kapyshon",
      "name": "Зимовий костюм Titan",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1349,
      "colors": [
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.plush.kapyshon/10.png",
            "images/img.plush.kapyshon/11.png",
            "images/img.plush.kapyshon/12.png",
            "images/img.plush.kapyshon/9.png",
            "images/img.plush.kapyshon/8.png",
            "images/img.plush.kapyshon/7.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.plush.kapyshon/1.png",
            "images/img.plush.kapyshon/2.png",
            "images/img.plush.kapyshon/3.png",
            "images/img.plush.kapyshon/4.png",
            "images/img.plush.kapyshon/5.png",
            "images/img.plush.kapyshon/6.png"
          ]
        },
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#4B5320",
          "images": [
            "images/img.plush.kapyshon/19.png",
            "images/img.plush.kapyshon/21.png",
            "images/img.plush.kapyshon/20.png"
          ]
        },
        {
          "id": "beige",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.plush.kapyshon/13.png",
            "images/img.plush.kapyshon/14.png",
            "images/img.plush.kapyshon/15.png",
            "images/img.plush.kapyshon/16.png",
            "images/img.plush.kapyshon/17.png",
            "images/img.plush.kapyshon/18.png"
          ]
        }
      ],
      "old_price": 1699
    },
    {
      "id": "zmeyka",
      "name": "Зимовий костюм Vortex",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1129,
      "colors": [
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.zmeyka/1.png",
            "images/img.zmeyka/2.png",
            "images/img.zmeyka/3.png",
            "images/img.zmeyka/4.png"
          ]
        },
        {
          "id": "khaki",
          "name": "Хакі",
          "hex": "#4B5320",
          "images": [
            "images/img.zmeyka/9.png",
            "images/img.zmeyka/10.png",
            "images/img.zmeyka/11.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#616267",
          "images": [
            "images/img.zmeyka/5.png",
            "images/img.zmeyka/7.png",
            "images/img.zmeyka/6.png",
            "images/img.zmeyka/8.png"
          ]
        }
      ],
      "old_price": 1479
    },
    {
      "id": "oversize-premium",
      "name": "Теплий костюм OverSize Premium",
      "description": "Плотний фліс, преміальний крій — підходить і для вулиці, і для дому.",
      "features": [
        "Якісний матеріал перевірений часом",
        "Анатомічна посадка — розміри S–XXL",
        "Швидка відправка Новою Поштою (1–3 дні)"
      ],
      "price": 1849,
      "colors": [
        {
          "id": "biege",
          "name": "Беж",
          "hex": "#d6c7b1",
          "images": [
            "images/img.oversize/20.png",
            "images/img.oversize/18.png",
            "images/img.oversize/19.png",
            "images/img.oversize/21.png"
          ]
        },
        {
          "id": "black",
          "name": "Чорний",
          "hex": "#111113ff",
          "images": [
            "images/img.oversize/1.png",
            "images/img.oversize/2.png",
            "images/img.oversize/3.png",
            "images/img.oversize/4.png",
            "images/img.oversize/5.png",
            "images/img.oversize/6.png"
          ]
        },
        {
          "id": "graphite",
          "name": "Графіт",
          "hex": "#5b7194",
          "images": [
            "images/img.oversize/7.png",
            "images/img.oversize/8.png",
            "images/img.oversize/9.png",
            "images/img.oversize/10.png",
            "images/img.oversize/11.png",
            "images/img.oversize/12.png",
            "images/img.oversize/13.png"
          ]
        },
        {
          "id": "anyhracite",
          "name": "Антрацит",
          "hex": "#45464c",
          "images": [
            "images/img.oversize/14.png",
            "images/img.oversize/15.png",
            "images/img.oversize/16.png",
            "images/img.oversize/17.png"
          ]
        },
        {
          "id": "brown",
          "name": "Коричневий",
          "hex": "#654321",
          "images": [
            "images/img.oversize/22.png",
            "images/img.oversize/23.png",
            "images/img.oversize/24.png",
            "images/img.oversize/25.png",
            "images/img.oversize/26.png"
          ]
        }
      ],
      "old_price": 2149
    },
   ],

 /* CLIENT_PHOTOS: {
    "Forge": [
      "images/reviews.bomber/1.png",
      "images/reviews.bomber/2.png",
      "images/reviews.bomber/3.png",
      "images/reviews.bomber/4.png",
      "images/reviews.bomber/5.png"
    ]
  },*/

  SEASON_GROUPS: {
    "Літній гардероб": [
      "Flow",
      "Tenor",
      "Benton",
      "Stamix",
      "Eterno",
      "Kayro",
      "Nox",
      "Base",
      "Dune",
      "Twilline",
      "LinenSet",
      "Vibe",
      "Carvelo",
      "Divento",
      "Aura",
      "Breeze",
      "Musair",
      "Cordy",
      "Onyx",
      "Linen Cloud"
    ],
    "Весна/осінь": [
      "TNF",
      "Jeans",
      "Classic Style",
      "A",
      "Matrix",
      "Velvet Jet",
      "Rayford",
      "Imperial",
      "Pulse",
      "Blade",
      "Griffin",
      "Falcon",
      "Hunter",
      "Forge",
      "Praga",
      "Snake",
      "Aero",
      "Prestige",
      "Air",
      "Axis",
      "zamsh-na-zmiyci",
      "Patriot UA",
      "Basic Premium",
      "Mono",
      "sweater"
    ],
    "Зимова колекція": [
      "plush",
      "sale",
      "polar",
      "bayer",
      "gudzik",
      "zefir",
      "plashovka",
      "puhovik",
      "chelsi",
      "polar-premium",
      "plush-kapyshon",
      "zmeyka",
      "oversize-premium",
      "balaklava",
      "shapka-baf"
    ]
  },

  TYPE_GROUPS: {
    "Бізнес комплекти": ["Classic Style", "zamsh-na-zmiyci", "A", "Axis"],
    "Спортивні костюми": ["TNF", "Patriot UA", "Basic Premium", "plashovka"],
    "Бомбери": ["Velvet Jet", "Hunter", "Forge", "Snake", "Praga"],
    "Жилетки": ["Matrix"],
    "Теплі флісові костюми": ["plush", "sale", "polar", "bayer", "gudzik", "zefir", "chelsi", "polar-premium", "plush-kapyshon", "zmeyka", "oversize-premium"],
    "Верхній одяг/куртки": ["Imperial", "Pulse", "Rayford", "Blade","Griffin", "Falcon", "Prestige", "Aero", "Air", "puhovik"],
    "Сорочки/брюки": ["Flow", "Dune", "Twilline", "Classic Style","Linen Cloud"],
    "Светри/Лонгсліви": ["Mono", "sweater"],
    "Джинси": ["Jeans"],
    "Футболки/Шорти/Сорочки": ["LinenSet", "Tenor", "Benton", "Stamix", "Kayro", "Eterno", "Nox", "Base", "Vibe", "Carvelo", "Aura", "Breeze", "Musair", "Cordy", "Onyx"],
    "Аксесуари/Головні убори": ["balaklava", "shapka-baf"]
  }
};
