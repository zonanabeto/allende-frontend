//const herokuAPI = "https://stark-fortress-68174.herokuapp.com";
const localAPI = "http://localhost:3000";

export function logIn(user){
  return fetch(localAPI + '/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(user => user);
}