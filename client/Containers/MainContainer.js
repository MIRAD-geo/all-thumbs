import * as React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav'
import {useSelector, useDispatch} from 'react-redux'
import { addItem, removeItem } from '../Slices/cartSlice'
import Backdrop from '../assets/backdrop.png'
import Cactus from '../assets/Cactus.png';
import BirdOfParadise from '../assets/BirdOfParadise.png';
import Snek from '../assets/Snek.png';
import Monstera from '../assets/Monstera.png';


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
          <h2 class="text-3xl text-center " >Welcome to All Thumbs!</h2>
          <img class="h-80" src={Backdrop}></img>
          {/* <p>You can do this, I believe in you.</p> */}
        </main>
        
        <h1 class='m-10 text-3xl bg-red-50 py-10'>Shop Our Collection</h1>
        
        <nav class="flex justify-between bg-red-50 h-60">
          <button onClick={() => addToCart()}>
            <img className='' src={Cactus}></img>    
            <p>Prickly Pear Cactus</p>
            <p className='text-amber-900 text-xs'><em>brown-thumb friendly</em></p>
          </button>
          <button onClick={() => addToCart()}>
            <img src={Monstera}></img>    
            <p>Monstera</p>
            <p className='text-amber-900 text-xs'><em>moderately difficult</em></p>
          </button>
          
          <button onClick={() => addToCart()}>
            <img src={BirdOfParadise}></img>    
            <p>Bird of Paradise</p>
            <p className='text-amber-900 text-xs'><em>brown-thumb friendly</em></p>
          </button>
          <button onClick={() => addToCart()}>
            <img src={Snek}></img>    
            <p>Snake Plant</p>
            <p className='text-amber-900 text-xs'><em>moderately difficult</em></p>
          </button>
          
        </nav>
      </>
    );
  }

export default Home;
  // export default connect(mapStateToProps, mapDispatchToProps)(Home);