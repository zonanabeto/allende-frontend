//const herokuAPI = "https://stark-fortress-68174.herokuapp.com";
//const localAPI = "https://allende-frontend.herokuapp.com";
import {apiUrl} from './apiUrl';

export const logIn = (user)=>{
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(user => user);
};