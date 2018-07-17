const herokuAPI = "https://back-allende.herokuapp.com";

export function logIn(user){
  return fetch(herokuAPI + '/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(user => user);
}