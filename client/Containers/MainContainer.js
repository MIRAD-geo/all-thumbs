import * as React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav'
import {useSelector, useDispatch} from 'react-redux'
import { addItem, removeItem } from '../Slices/cartSlice'

function Home() {
//for testing state 
  const cart = useSelector(state => state.cart.items)
  const dispatch = useDispatch();

  const addToCart = (item, price, image) => dispatch(removeItem({name: item, price: price, imgSrc: image}))
  const changeQuantity = () => dispatch(updateQuantity())
    return (
      <>
      <Nav />
        <main>
          <h2>Welcome to the all thumbs!</h2>
          <p>You can do this, I believe in you.</p>
          <button onClick = {() => addToCart()} >add Item</button>
        </main>
        <nav>
          <Link to="/about">About</Link>
          <br/>
          <Link to='/shop'>Shop</Link>
        </nav>
      </>
    );
  }

export default Home;
  // export default connect(mapStateToProps, mapDispatchToProps)(Home);