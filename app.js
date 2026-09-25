const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, client-side JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Added for parsing JSON payload bodies

// Routes
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api'); // Added API routes

app.use('/', indexRoutes);
app.use('/api', apiRoutes); // Mounted API routes at /api

app.listen(PORT, () => {
  console.log(`Campus Eats running at http://localhost:${PORT}`);
});

const db = require('./config/db');
app.get('/db-test', async (req, res) => {
  const result = await db.one('SELECT NOW() AS current_time');
  res.json(result);
});