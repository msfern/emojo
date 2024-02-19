import axios from 'axios';

const api = axios.create({
  baseURL: 'https://emoji-api.com/',
});

export default api;