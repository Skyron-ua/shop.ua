/* CONFIG */
const CONFIG = {
CONTACT: {
TG_USERNAME: "Skyron_ua",
VIBER_INVITE: "https://invite.viber.com/?g2=AQBeex4BIEUJJlW4bdj1yeAO7w846m1dQ6AzkdYO2N%2Bt6FAv7rl5TWDkjrKKKt7t",
SUPPORT_PHONE: "+380733337278"
},
BOT_TOKEN: "8524397744:AAFwG7nIJdIYwCXgU8B_AhhE_X6Xnm3xGOY",
CHAT_ID: "7864653279",
PRODUCTS: [
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
    "id": "sweater",
    "name": "Светр Oslo Spirit",
    "description": "Преміальний крій — підходить для вечірок,свят, та для повсякденного носіння.",
    "features": [
      "Якісний матеріал: перевірений часом",
      "Анатомічна посадка — розміри S–XXL",
      "Швидка відправка Новою Поштою (1–3 дні)"
    ],
    "price": 1049,
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
    "id": "plush",
    "name": "Преміальний костюм Royal Prime",
    "description": "Теплий флісовий костюм Royal Prime — тепло до -15°C без зайвого обʼєму",
    "features": [
      "🔥 Реально теплий — комфорт навіть у холод до -15°C",
      "🧸 Мʼякий преміальний фліс — приємний до тіла, не колеться",
      "🧍 Анатомічний крій — не сковує рухи, зручно цілий день",
      "✔️ Ідеальна посадка — підбираємо розмір по зросту і вазі",
      "📦 Швидка відправка Новою Поштою"
    ],
    "price": 1249,
    "colors": [
      {
        "id": "graphite",
        "name": "Графіт",
        "hex": "#616267",
        "images": [
          "images/img.plush/1.png",
          "images/img.plush/2.png",
          "images/img.plush/3.png"
        ]
      },
      {
        "id": "black",
        "name": "Чорний",
        "hex": "#111113ff",
        "images": [
          "images/img.plush/6.png",
          "images/img.plush/5.png",
          "images/img.plush/4.png"
        ]
      },
      {
        "id": "white",
        "name": "Білий",
        "hex": "#f6f6f8ff",
        "images": [
          "images/img.plush/7.png",
          "images/img.plush/8.png",
          "images/img.plush/9.png"
        ]
      },
      {
        "id": "khaki",
        "name": "Хакі",
        "hex": "#78866b",
        "images": [
          "images/img.plush/10.png",
          "images/img.plush/11.png",
          "images/img.plush/12.png"
        ]
      },
      {
        "id": "grey",
        "name": "Сірий",
        "hex": "#bbbbbb",
        "images": [
          "images/img.plush/13.png",
          "images/img.plush/14.png",
          "images/img.plush/15.png"
        ]
      },
      {
        "id": "beige",
        "name": "Беж",
        "hex": "#d6c7b1",
        "images": [
          "images/img.plush/16.png",
          "images/img.plush/17.png",
          "images/img.plush/18.png"
        ]
      },
      {
        "id": "burgundy",
        "name": "Бордо",
        "hex": "#790604",
        "images": [
          "images/img.plush/19.png",
          "images/img.plush/20.png",
          "images/img.plush/21.png"
        ]
      },
      {
        "id": "brown",
        "name": "Коричневий",
        "hex": "#654321",
        "images": [
          "images/img.plush/22.png",
          "images/img.plush/23.png",
          "images/img.plush/24.png"
        ]
      },
      {
        "id": "emerald",
        "name": "Смарагд",
        "hex": "#00a86b",
        "images": [
          "images/img.plush/25.png",
          "images/img.plush/26.png",
          "images/img.plush/27.png"
        ]
      },
      {
        "id": "blue",
        "name": "Синій",
        "hex": "#000080",
        "images": [
          "images/img.plush/28.png",
          "images/img.plush/29.png",
          "images/img.plush/30.png"
        ]
      }
    ],
    "old_price": 1899
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
    "id": "zamsh-na-zmiyci",
    "name": "Костюм Velvet",
    "description": "Преміальний крій — підходить для вечірок,свят, та для повсякденного носіння.",
    "features": [
      "Якісний матеріал перевірений часом",
      "Анатомічна посадка — розміри S–XXL",
      "Швидка відправка Новою Поштою (1–3 дні)"
    ],
    "price": 1549,
    "colors": [
      {
        "id": "graphite",
        "name": "Графіт",
        "hex": "#616267",
        "images": [
          "images/img.zamsh/3.png",
          "images/img.zamsh/4.png",
          "images/img.zamsh/5.png"
        ]
      },
      {
        "id": "black",
        "name": "Чорний",
        "hex": "#111113ff",
        "images": [
          "images/img.zamsh/1.png",
          "images/img.zamsh/9.png",
          "images/img.zamsh/2.png"
        ]
      },
      {
        "id": "blue",
        "name": "Синій",
        "hex": "#000080",
        "images": [
          "images/img.zamsh/6.png",
          "images/img.zamsh/7.png",
          "images/img.zamsh/8.png"
        ]
      }
    ],
    "old_price": 1899
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
  }
]
};

/* Helpers */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const encode = s => encodeURIComponent(s);

/* Cart */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* Стилі */
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
padding: 20px; /* Уменьшил padding для компактности */
border-radius: 12px; /* Меньше радиус для аккуратности */
text-align: center;
max-width: 400px; /* Уменьшил max-width */
width: 90%;
box-shadow: 0 5px 15px rgba(0,0,0,0.2); /* Легче тень */
}
.modal-content h3 {
margin: 0 0 15px 0; /* Меньше отступ */
font-size: 1.2em; /* Меньше шрифт */
}
.modal-buttons {
display: flex;
gap: 10px; /* Меньше gap */
justify-content: center;
margin-top: 15px; /* Меньше отступ */
}
.modal-buttons button {
padding: 10px 20px; /* Уменьшил padding кнопок */
border: none;
border-radius: 6px; /* Меньше радиус */
font-size: 0.9em; /* Меньше шрифт */
cursor: pointer;
}
.modal-buttons .continue {
background: #e0e0e0; /* Светлее фон */
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

/* Модалка */
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

/* Init */
document.addEventListener("DOMContentLoaded", () => {
$$('#year').forEach(el => el.textContent = new Date().getFullYear());

$$('.btn-telegram').forEach(btn => btn.addEventListener("click", () => window.open(`https://t.me/${CONFIG.CONTACT.TG_USERNAME}`, "_blank")));
$$('.btn-viber').forEach(btn => btn.addEventListener("click", () => window.open(CONFIG.CONTACT.VIBER_INVITE, "_blank")));

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
product.features.forEach(f => {
const li = document.createElement("li");
li.textContent = f;
featuresList.appendChild(li);
});

selectProduct(product.id);

// Трекінг ViewContent
ttq.track('ViewContent', {
  content_id: product.id,
  content_name: product.name,
  value: product.price,
  currency: 'UAH'
});

// Ховаємо поля росту і ваги для шапок
const hatIds = ['balaklava', 'shapka-baf'];
if (hatIds.includes(productId)) {
  const formRow = document.querySelector('.form-row');
  if (formRow) formRow.style.display = 'none';
}

// Update sticky price
const stickyPrice = document.getElementById("stickyPrice");
if (stickyPrice) {
  stickyPrice.textContent = `${product.price} грн`;
}

// Sticky add to cart functionality
const stickyBtn = document.getElementById("stickyAddToCart");
if (stickyBtn) {
  stickyBtn.querySelector("button").addEventListener("click", () => {
    document.getElementById("addToCartBtn").click();
  });
}

const sellingBlock = document.getElementById("sellingBlock");
const sizeTable = document.getElementById("sizeTable");
if (productId === "plush") {
  if (sellingBlock) sellingBlock.style.display = "block";
  if (sizeTable) sizeTable.style.display = "block";
  // Optional: Add more images or dynamic content
}

$("#addToCartBtn").addEventListener("click", () => {
const colorId = $(".swatch.active")?.dataset.id;
const height = $("#height").value;
const weight = $("#weight").value;

const isHat = hatIds.includes(productId);
if (colorId && (isHat || (height && weight))) {
addToCart({ productId, colorId, height: isHat ? 'N/A' : height, weight: isHat ? 'N/A' : weight });
showAddToCartModal();

// Трекінг AddToCart
ttq.track('AddToCart', {
  content_id: product.id,
  content_name: product.name,
  value: product.price,
  currency: 'UAH'
});

const cartIcon = $(".cart-link");
const img = $("#mainImage");
flyToCartEffect(img, cartIcon);

updateCartBadge();
updateOrderSummary();
} else {
alert("Вкажіть, будь ласка, зріст та вагу 🙏");
}
});
}

/* Ефект польоту */
function flyToCartEffect(img, cartIcon) {
if (!img || !cartIcon) return;
const clone = img.cloneNode();
clone.style.position = "fixed";
clone.style.zIndex = "9999";
clone.style.width = img.offsetWidth + "px";
clone.style.height = img.offsetHeight + "px";
clone.style.top = img.getBoundingClientRect().top + "px";
clone.style.left = img.getBoundingClientRect().left + "px";
clone.style.transition = "all 0.6s ease-in-out";
clone.style.borderRadius = "8px";
document.body.appendChild(clone);

setTimeout(() => {
clone.style.width = "30px";
clone.style.height = "30px";
clone.style.top = cartIcon.getBoundingClientRect().top + "px";
clone.style.left = cartIcon.getBoundingClientRect().left + "px";
clone.style.opacity = "0.6";
}, 50);

setTimeout(() => clone.remove(), 800);
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
if ($("#heroPrice")) {
  $("#heroPrice").innerHTML = `${activeProduct.old_price ? `<span class="old-price">${activeProduct.old_price} грн</span>` : ''} <span class="new-price">${activeProduct.price} грн</span>`;
}
}

function selectColor(id) {
const color = activeProduct.colors.find(c => c.id === id);
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
if (!main) return;
main.style.opacity = "0";
const img = new Image();
img.src = activeImages[currentIndex];
img.onload = () => {
main.src = img.src;
requestAnimationFrame(() => { main.style.opacity = "1"; });
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
const text = `Замовлення: ${data.productName} (${data.colorName}), Зріст: ${data.height} см, Вага: ${data.weight} кг, Кількість: ${data.qty}, Імʼя та прізвище: ${data.fullName}, Номер телефону: ${data.phone}, Місто: ${data.city}, Відділення нової пошти: ${data.postOffice}`;
await sendToTelegram(text);

// Трекінг Purchase
ttq.track('Purchase', {
  content_name: data.productName,
  value: data.price * data.qty,
  currency: 'UAH'
});

alert("Дякуємо за замовлення, менеджер звʼяжеться з вами найближчим часом");
form.reset();
updateOrderSummary();
});

$("#productSelect").addEventListener("change", updateColorSelect);
["#height", "#weight", "#qty", "#colorSelect", "#fullName", "#phone", "#city", "#postOffice"].forEach(sel => {
$(sel)?.addEventListener("input", updateOrderSummary);
});
}

function updateColorSelect() {
const productId = $("#productSelect")?.value;
const product = CONFIG.PRODUCTS.find(p => p.id === productId);
const colorSelect = $("#colorSelect");
if (!colorSelect) return;
colorSelect.innerHTML = '<option value="">Оберіть колір</option>';
colorSelect.disabled = !product;
if (product) {
product.colors.forEach(c => {
const opt = document.createElement("option");
opt.value = c.id;
opt.textContent = c.name;
colorSelect.appendChild(opt);
});
}
updateOrderSummary();
}

function gatherForm() {
const height = $("#height")?.value;
const weight = $("#weight")?.value;
const qty = Number($("#qty")?.value) || 1;
const fullName = $("#fullName")?.value;
const phone = $("#phone")?.value;
const city = $("#city")?.value;
const postOffice = $("#postOffice")?.value;
const productId = $("#productSelect")?.value;
const colorId = $("#colorSelect")?.value;

if (!height || !weight || !fullName || !phone || !city || !postOffice || !productId || !colorId) {
alert("Заповніть усі поля.");
  document.getElementById("height")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  return null;
}

const product = CONFIG.PRODUCTS.find(p => p.id === productId);
const color = product?.colors.find(c => c.id === colorId);
return { height, weight, qty, fullName, phone, city, postOffice, productName: product.name, colorName: color.name, price: product.price };
}

function updateOrderSummary() {
const qty = Number($("#qty")?.value) || 1;
const height = $("#height")?.value || "—";
const weight = $("#weight")?.value || "—";
const productName = $("#productSelect")?.options[$("#productSelect")?.selectedIndex]?.text || "—";
const colorName = $("#colorSelect")?.options[$("#colorSelect")?.selectedIndex]?.text || "—";
const product = CONFIG.PRODUCTS.find(p => p.id === $("#productSelect")?.value);

$("#summaryProduct") && ($("#summaryProduct").textContent = `${productName} — ${colorName}`);
$("#summaryHeight") && ($("#summaryHeight").textContent = height);
$("#summaryWeight") && ($("#summaryWeight").textContent = weight);
$("#summaryTotal") && ($("#summaryTotal").innerHTML = `${product?.old_price ? `<span class="old-price">${product.old_price * qty} грн</span>` : ''} <span class="new-price">${(product ? product.price : 0) * qty} грн</span>`);
}

/* Cart */
function addToCart(item) {
item.uniqueId = Date.now();
cart.push(item);
localStorage.setItem('cart', JSON.stringify(cart));
updateCartBadge();
updateOrderSummary();
}

function removeFromCart(key) {
cart = cart.filter(i => i.uniqueId !== parseInt(key));
localStorage.setItem('cart', JSON.stringify(cart));
initCart();
updateCartBadge();
updateOrderSummary();
}

function initCart() {
const cartItems = $("#cartItems");
let total = 0;
let old_total = 0;
cart = cart.filter(item => CONFIG.PRODUCTS.find(p => p.id === item.productId)?.colors.find(c => c.id === item.colorId));
localStorage.setItem('cart', JSON.stringify(cart));
cartItems.innerHTML = "";
cart.forEach((i) => {
const product = CONFIG.PRODUCTS.find(p => p.id === i.productId);
const color = product?.colors.find(c => c.id === i.colorId);
if (product && color) {
total += product.price;
old_total += product.old_price || product.price;
cartItems.innerHTML += `
<div class="cart-item" data-key="${i.uniqueId}">
<p>${product.name} (${color.name}, Зріст: ${i.height} см, Вага: ${i.weight} кг)</p>
<p>${product.old_price ? `<span class="old-price">${product.old_price} грн</span>` : ''} <span class="new-price">${product.price} грн</span></p>
<button class="btn btn-danger remove-btn">Видалити</button>
</div>
`;
}
});
$("#cartTotal").innerHTML = `${old_total > total ? `<span class="old-price">${old_total} грн</span>` : ''} <span class="new-price">${total} грн</span>`;
$$(".remove-btn").forEach(btn => btn.addEventListener("click", () => removeFromCart(btn.parentElement.dataset.key)));

const checkoutForm = $("#checkoutForm");
if (checkoutForm) {
checkoutForm.addEventListener("submit", async (e) => {
e.preventDefault();
const fullName = $("#fullName").value;
const phone = $("#phone").value;
const city = $("#city").value;
const postOffice = $("#postOffice").value;
if (!fullName || !phone || !city || !postOffice) return alert("Заповніть усі поля");
const lines = cart.map(i => {
const p = CONFIG.PRODUCTS.find(pr => pr.id === i.productId);
const c = p?.colors.find(cl => cl.id === i.colorId);
return p && c ? `${p.name} (${c.name}, Зріст: ${i.height} см, Вага: ${i.weight} кг)` : '';
}).filter(Boolean).join("\n");
const text = `Замовлення від ${fullName} (${phone})\nМісто: ${city}\nВідділення нової пошти: ${postOffice}\nТовари:\n${lines}`;
await sendToTelegram(text);

// Трекінг Purchase
ttq.track('Purchase', {
  value: total,
  currency: 'UAH'
});

alert("Дякуємо за замовлення, менеджер звʼяжеться з вами найближчим часом");
cart = [];
localStorage.setItem('cart', JSON.stringify(cart));
initCart();
updateCartBadge();
updateOrderSummary();
});
}
}

function updateCartBadge() {
const badge = $("#cartBadge");
if (badge) {
const count = cart.length;
badge.textContent = count;
badge.style.display = count > 0 ? "inline-flex" : "none";
}
}

async function sendToTelegram(message) {
const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage?chat_id=${CONFIG.CHAT_ID}&text=${encodeURIComponent(message)}`;
try {
await fetch(url);
} catch (error) {
console.error("Error sending to Telegram:", error);
}
}

/* Swipe */
(function enableSwipe() {
const img = document.getElementById("mainImage");
if (!img) return;

let startX = 0;

img.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
}, { passive: true });

img.addEventListener("touchend", (e) => {
const endX = e.changedTouches[0].clientX;
const diff = startX - endX;
if (Math.abs(diff) < 50) return;

if (diff > 0) {
currentIndex = (currentIndex + 1) % activeImages.length;
} else {
currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
}
updateMainImage();
}, { passive: true });
})();
