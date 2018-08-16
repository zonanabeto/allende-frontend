import * as types from '../actions/actionTypes';

export default function distReducers(state = [], action){
    switch (action.type) {
        case types.GET_DISTS:
            return action.distri;
        default:
            return state;
    }
}

