import {combineReducers} from 'redux';
import products from './productsReducer'
import promos from './promosReducer';

const rootReducer = combineReducers({
  products,
  promos
});

export default rootReducer;