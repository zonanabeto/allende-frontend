import * as types from './actionTypes';
import * as productServices from "../../services/productsServices";

//action
function getProductsSuccess(products){
  return {type: types.GET_PRODUCTS, products}
}

//thunk
export const loadProducts = () => (dispatch) => {
  productServices.getProducts()
    .then(products=>{
      console.log(products);
      dispatch(getProductsSuccess(products));
    })
    .catch(e => console.log(e))
};