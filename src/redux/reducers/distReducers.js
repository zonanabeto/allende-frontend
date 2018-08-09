import {handleActions} from 'redux-actions';
import { GET_DISTS, NEW_DIST, UPDATE_DIST, DEL_DIST } from '../actions/actionTypes';

export const distribuidores = handleActions({
    [GET_DISTS]:(state,action)=> [ ...action.payload ],
    [NEW_DIST]:(state,action) => [...state, action.payload],
    [UPDATE_DIST]:(state,action) => {
        const customerPayload = action.payload;
        const {id} = customerPayload;
        const customers = state;
        const initialValue = [];

        const newCustomers = customers.reduce((acc, customer) => {
            if(customer.id === id){
                return [...acc, customerPayload]
            }else{
                return [...acc,customer]
            }
        }, initialValue);

        return newCustomers;
    },
    [DEL_DIST]: (state,action)=>state.filter(c=> c.id !== action.payload)
},[]);