const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');

// GET /api/restaurants
exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.getAllRestaurants();
  res.json(restaurants);
};

// GET /api/restaurants/:id/menu[cite: 1]
exports.getRestaurantMenu = async (req, res) => {
  const restaurant = await Restaurant.getRestaurantById(req.params.id);
  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurant not found' });
  }
  const menuItems = await MenuItem.getMenuByRestaurant(req.params.id);
  res.json({ restaurant, menuItems });
};

// GET /api/orders/:id[cite: 1]
exports.getOrder = async (req, res) => {
  const order = await Order.getOrderById(req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
};

// POST /api/orders[cite: 1]
exports.createOrder = async (req, res) => {
  const { itemId } = req.body;
  const item = await MenuItem.getMenuItemById(itemId);
  if (!item) {
    return res.status(400).json({ error: 'Invalid menu item' });
  }
  const order = await Order.createOrder(item.id, item.price);
  res.status(201).json(order);
};

// GET /api/stats[cite: 1]
exports.getStats = async (req, res) => {
  const stats = await Order.getStats();
  const popularItems = await Order.getPopularItems();
  res.json({ stats, popularItems });
};
