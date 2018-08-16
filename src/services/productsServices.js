//const localAPI = "http://localhost:3000";
//const herokuAPI = "https://allende-frontend.herokuapp.com";
const herokuMIO = "https://stark-fortress-68174.herokuapp.com";

export function getProducts(){
  return fetch(herokuMIO + '/products')
    .then(r => r.json())
    .catch(products => products)
}

export function getPromos(){
  return fetch(herokuMIO + '/promos')
    .then(r => r.json())
    .catch(promos => promos)
}