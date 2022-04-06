import React from 'react';
import './checkoutContainer.css'
import { Link } from "react-router-dom";

function Checkout() {

  return (
    <div>
      <h1>Responsive Checkout Form</h1>
      <div class="row">
        <div class="col-75">
          <div class="container">
            <form>
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label> Full Name</label>
                  <input type="text" name="firstname" placeholder="John M. Doe" />
                  <label> Email</label>
                  <input type="text" name="email" placeholder="john@example.com" />
                  <label>Address</label>
                  <input type="text" name="address" placeholder="542 W. 15th Street" />
                  <label> City</label>
                  <input type="text" name="city" placeholder="New York" />

                  <div class="row">
                    <div class="col-50">
                      <label >State</label>
                      <input type="text" name="state" placeholder="NY" />
                    </div>
                    <div class="col-50">
                      <label >Zip</label>
                      <input type="text" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div class="col-50">
                  <h3>Payment</h3>

                  <label >Name on Card</label>
                  <input type="text" name="cardname" placeholder="John More Doe" />
                  <label >Credit card number</label>
                  <input type="text" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <label >Exp Month</label>
                  <input type="text" name="expmonth" placeholder="September" />

                  <div class="row">
                    <div class="col-50">
                      <label >Exp Year</label>
                      <input type="text" name="expyear" placeholder="2018" />
                    </div>
                    <div class="col-50">
                      <label >CVV</label>
                      <input type="text" name="cvv" placeholder="352" />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
              </label>
              
              <Link to='/confirm'><input value="Place Order" class="btn"/></Link>
              
            </form>
          </div>
        </div>
        <div class="col-25">
          <div class="container h-40">
            
            <a className='py-6 flex item-center justify-center'>Plant Care Instructions</a>
            
            <a class='py-6 flex item-center justify-center' href='https://onetreeplanted.org/'>Donate to One Tree Planted </a>
            
            
          </div>
        </div>
      </div >
    </div >
  )
}

export default Checkout;