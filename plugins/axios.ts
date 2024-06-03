import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  // Configure the base URL for your API
  const api = axios.create({
    baseURL: '',
    // baseURL: 'http://3.146.105.250/',
  });

  // Ensure code runs only on client-side where localStorage is available
  if (process.client) {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  // Provide this configured instance to your entire app
  nuxtApp.provide('axios', api);
});
