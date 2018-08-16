import {combineReducers} from 'redux';
import products from './productsReducer';
import distReducers from './distReducers';

const rootReducer = combineReducers({
    products,
    distribuidores:distReducers,
});

export default rootReducer