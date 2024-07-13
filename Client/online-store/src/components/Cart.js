import React, { useState, useEffect } from 'react';
import { getCart } from '../api';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      const cart = await getCart(token);
      setCart(cart);
    };
    fetchCart();
  }, []);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.productId} className="cart-item">
          <h4>{item.product.title}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
