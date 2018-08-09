import {combineReducers} from 'redux';
import products from './productsReducer';
import {distribuidores} from './distReducers';

const rootReducer = combineReducers({    
  products,
    distribuidores,
});

export default rootReducer