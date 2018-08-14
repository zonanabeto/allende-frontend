import {apiUrl} from './apiUrl';

export function getProducts(){
  return fetch(apiUrl + '/products')
    .then(r => r.json())
    .catch(products => products)
}