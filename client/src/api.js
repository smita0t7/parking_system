// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Change this if your backend is hosted elsewhere
});

export default api;
