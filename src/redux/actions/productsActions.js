import * as types from './actionTypes';
import * as productServices from "../../services/productsServices";

//action
function getProductsSuccess(products){
  return {type: types.GET_PRODUCTS, products}
}

//thunk
const loadProducts = () => (dispatch) => {
  productServices.getProducts()
    .then(products=>{
      dispatch(getProductsSuccess(products));
    })
    .catch(e => console.log(e))
};

export const checkUser = () => (dispatch) => {
  if (!localStorage.getItem('user')) return;
  const user = JSON.parse(localStorage.getItem('user'));
  if(user.role === 'admin') {
    //admin actions
    dispatch(loadProducts());
  } else {
    //dist actions
    console.log('it works?');
  }
};