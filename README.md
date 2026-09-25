```text
campus-eat/
├── config/
│   └── db.js (pg-promise connection, reused by every Model)
├── controllers/
│   ├── homeController.js (Controller — reads restaurants from the DB)
│   ├── aboutController.js (Controller)
│   ├── menuController.js (Controller — reads one restaurant's menu from the DB)
│   └── orderController.js (Controller — client-side order lookup API handler)
├── models/
│   ├── Restaurant.js (Model / entity class)
│   └── MenuItem.js (Model / entity class)
├── routes/
│   └── index.js (Routing — /, /about, /restaurants/:id/menu, POST /orders)
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs (View — restaurants from the DB)
│   ├── about.ejs
│   ├── menu.ejs (View — one restaurant's real menu)
│   └── order_confirmation.ejs
├── public/
│   └── js/
│       └── lookup.js (Client-side JS consuming the REST API)
├── .env.example (Template for DB environment variables)
├── .gitignore
├── app.js
├── nodemon.json
└── package.json
```
