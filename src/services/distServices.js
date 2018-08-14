import {apiUrl} from 'apiUrl';

export function getDists(){
    return fetch(apiUrl + '/distribuidores')
        .then(r => r.json())
        .catch(dist => dist)
}