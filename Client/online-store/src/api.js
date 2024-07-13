import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const addToCart = async (cartData, token) => {
  const response = await axios.post(`${API_URL}/cart/add`, cartData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCart = async (token) => {
  const response = await axios.get(`${API_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Add more API functions as needed
