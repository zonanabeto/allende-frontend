import {getDists} from "../../services/distServices";
import * as types from './actionTypes';


//thunk Load Distributors
//action
function getDisrtribuidoresSuccess(distri){
    return {type: types.GET_DISTS, distri}
}

//thunk
export const getDistri = () => (dispatch) => {
    getDists()
        .then(distri=>{
            dispatch(getDisrtribuidoresSuccess(distri));
        })
        .catch(e => console.log(e))
};
