import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://api.bankpague.com',
  baseURL: 'http://54.94.48.232:3333',
  
});

export default api;
