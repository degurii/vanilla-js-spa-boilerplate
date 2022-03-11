import http from './httpClient.js';

export const getProducts = () => http.get('');

export const getProductAndOptions = (id) => http.get(`/${id}`);
