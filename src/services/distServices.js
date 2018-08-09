const localAPI = "http://localhost:3000";

export function getDists(){
    return fetch(localAPI + '/distribuidores')
        .then(r => r.json())
        .catch(dist => dist)
}