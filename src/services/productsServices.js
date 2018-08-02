const localAPI = "http://localhost:3000";

export function getProducts(){
  return fetch(localAPI + '/products')
    .then(r => r.json())
    .catch(products => products)
}