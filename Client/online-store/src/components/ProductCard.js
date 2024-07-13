import React from 'react';
import { addToCart } from '../api';

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');
    await addToCart({ productId: product.id, quantity: 1 }, token);
    alert('Product added to cart');
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
