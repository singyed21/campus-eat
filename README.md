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
campus-eats/
├── config/
│   └── db.js
├── controllers/
│   ├── homeController.js      (Controller — pages)
│   ├── aboutController.js
│   ├── menuController.js
│   ├── orderController.js
│   └── apiController.js       (Controller — JSON API, new)
├── models/
│   ├── Restaurant.js          (unchanged — reused by both Controllers)
│   ├── MenuItem.js            (unchanged — reused by both Controllers)
│   └── Order.js               (unchanged — reused by both Controllers)
├── routes/
│   ├── index.js               (Routing — page routes)
│   └── api.js                 (Routing — /api/* JSON routes, new)
├── views/
├── public/
├── app.js                     (now mounts both routers, plus express.json())
└── ...

