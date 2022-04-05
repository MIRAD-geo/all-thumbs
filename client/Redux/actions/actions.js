import * as types from './actionTypes';


export const processLogin = (dispatch, user, pass) => {
    const requestOptions = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'username': user, 'password': pass })
    }

    let response;

    response =  fetch('/login', requestOptions);
    response = response.json();

    dispatch({
        type: 'LOGIN',
        payload: response
    });
}


export const processLogout = (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  // TO TEST WITH SERVER: Un-comment these two lines
  const serverResponse = fetch('/api/logout', requestOptions);

  dispatch({
    type: 'LOGOUT',
    payload: null
  });
}


export const OpenCart = () => {
  dispatch({
      type: 'OPEN_CART',
      payload: true
  });
};

export const closeCart = () => {
    dispatch({
        type: 'OPEN_CART',
        payload: false
    });
  };

export const AddItem = (dispatch, item) => {
//   CartData.items.push(response);
  dispatch({
    type: 'ADD_ITEM',
    payload: item
  });
};


export const DeleteItem = (dispatch, item) => {
//   const deletedItem = CartData.items.find(response);
//   CartData.amount += 1;
  dispatch({
    type: 'DELETE_ITEM',
    payload: item
  });
};