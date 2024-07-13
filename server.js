const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Function to read data from JSON file
const readData = () => {
  const data = fs.readFileSync('data.json');
  return JSON.parse(data);
};

// Function to write data to JSON file
const writeData = (data) => {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

// Get products endpoint
app.get('/api/products', (req, res) => {
  const data = readData();
  res.json(data.products);
});

// Example: Add a product to cart
app.post('/api/cart/add', (req, res) => {
  const data = readData();
  const { productId, quantity } = req.body;

  const product = data.products.find(p => p.id === productId);
  if (product) {
    data.carts.push({ productId, quantity });
    writeData(data);
    res.status(201).json({ message: 'Product added to cart' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
