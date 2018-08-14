import {handleActions} from 'redux-actions';
import { GET_DISTS, NEW_DIST, DEL_DIST } from '../actions/actionTypes';



const distReducers = handleActions({
        [GET_DISTS]: (state, action) => {
            return {
                ...state,
                distribuidores: action.payload,
            }
        },
        [NEW_DIST]: (state, action) => {
            return {
                ...state,
                distribuidores: state.distribuidores.concat(action.payload)
            }
        },
        [DEL_DIST]: (state, action) => {
            return {
                ...state,
                distribuidores: state.distribuidores.filter(c => c.id !== action.payload)
            }
        }

}, []);


export default distReducers;