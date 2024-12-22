import axios from 'axios';

// Create Axios instance for API requests
const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchNews = () => API.get('/api/news');
