const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Load JSON data
const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint to add to cart (example)
let cart = [];

app.post('/api/cart', (req, res) => {
  const { id } = req.body;
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    res.status(201).json(cart);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
