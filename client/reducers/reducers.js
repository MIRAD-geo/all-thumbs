import * as types from '../constants/actionTypes';

const CartData = {
    amount: 0, 
    items: [],
    inSession: false,
    isLoggedIn: false,
}

const plantData = {
    name: "",
    price: "",
    URL:"",
    Image: "",
    Description: ""
}

const initialState = {
    cartData: CartData,
    plantData: plantData,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_CART': {
            let cart = {...state.cardData}
            cart.push(action.payload.item)
        }
    }
}