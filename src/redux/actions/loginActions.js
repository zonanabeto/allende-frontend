import * as types from './actionTypes';

//action
function logUserSuccess(user){
  return { type: types.LOGIN_USER, user };
}

//thunk
export const logUser = () => (dispatch, getStore) => {
  dispatch(logUserSuccess(
      {email: 'allende@contacto.com', password: 'alo'}
  ))
};

