import * as React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import CartItem from "./CartItem";
import { checkOut } from "../Slices/cartSlice";

function CheckoutPreview() {

  const dispatch = useDispatch();
  
  const checkout = () => {
    dispatch(checkOut());
  };

  const items = useSelector((state) => state.cart.items);
  const cartIsEmpty = items.length === 0;

  let subTotal = 0;
  let cart = [];
  let shipping = 0;
  let calcTax = 0;
  let total = 0;

  if (!cartIsEmpty){
    cart = items.map((item, id) => {
      subTotal += (item.price * item.quantity);
      return <CartItem item={item} key={id} id={id}/>;
    });
    
    subTotal = Number(subTotal.toFixed(2));
    shipping = 10;
    calcTax = Number((subTotal * .0975).toFixed(2));
    total = Number(subTotal + shipping + calcTax).toFixed(2);
  }

  return (
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-stone-600  text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-stone-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold  text-stone-600  text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold  text-stone-600  text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
      
      <div>
        {cart}
        {cartIsEmpty && <div className="text-red-500 text-lg"><span>Cart Is Empty</span></div>}
      </div>

        <a href="/#/plantShop" class="flex font-semibold text-emerald-500 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-emerald-500 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">$ {subTotal}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-stone-600  w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
        </div>
        <button class="bg-red-400 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          
            <span>Tax</span>
            <span>$ {calcTax}</span>
          </div>
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          
            <span>Total cost</span>
            <span>$ {total} </span>
          </div>
          <Link to='/checkout'><button onClick={checkout} disabled={cartIsEmpty} class="bg-emerald-300 font-semibold hover:bg-emerald-600 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
        </div>
      </div>

    </div>
  </div>
  )
}

export default CheckoutPreview