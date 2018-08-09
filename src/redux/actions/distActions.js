import * as types from './actionTypes';
import * as distServices from "../../services/distServices";

//action Get Distributors
function getDistsSuccess(distribuidores){
    return {type: types.GET_DISTS, distribuidores}
}

//thunk Load Distributors
export const loadDists = () => (dispatch) => {
    distServices.getDists()
        .then(distribuidores=>{
            console.log(distribuidores);
            dispatch(getDistsSuccess(distribuidores));
        })
        .catch(e => console.log(e))
};
