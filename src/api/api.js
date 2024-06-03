import fetch from 'node-fetch';

const BASE_URL = 'https://api.noroff.dev/api/v1';

export function fetchProducts() {
  return fetch(`${BASE_URL}/online-shop`)
    .then(response => response.json());
}

export function fetchProduct(id) {
  return fetch(`${BASE_URL}/online-shop/${id}`)
    .then(response => response.json());
}
