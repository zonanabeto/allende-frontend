import {combineReducers} from 'redux';
import products from './productsReducer';
import distReducers from './distReducers';

const rootReducer = combineReducers({    
  products,
    distReducers,
});

export default rootReducer