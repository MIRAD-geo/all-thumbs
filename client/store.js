import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './Slices/cartSlice';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore({
  reducer: {
    cart: cartReducer
  },

});

export default store;