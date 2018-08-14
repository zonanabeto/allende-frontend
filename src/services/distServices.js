import {apiUrl} from './apiUrl';

export const getDists = () => {
    return fetch(apiUrl + '/distribuidores')
        .then(r => r.json())
        .catch(dist => dist)
};