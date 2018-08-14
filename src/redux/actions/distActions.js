import * as distServices from "../../services/distServices";
import {createAction} from 'redux-actions'
import {DEL_DIST, GET_DISTS, NEW_DIST, UPDATE_DIST} from "./actionTypes";


//thunk Load Distributors
export const loadDists = () => (dispatch) => {
    distServices.getDists()
        .then(distribuidores=>{
            console.log(distribuidores);
            dispatch(distribuidores);
        })
        .catch(e => console.log(e))
};

//action Get Distributors
export const getDists = createAction(GET_DISTS, loadDists());
export const newDist = createAction(NEW_DIST);
export const updateDist = createAction(UPDATE_DIST);
export const delDist = createAction(DEL_DIST);

