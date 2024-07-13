const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [String],
    category: String,
    brand: String,
    stock: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', ProductSchema);
