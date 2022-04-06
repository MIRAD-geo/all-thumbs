import * as React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav'
import Alfonso from '../assets/Alfonso.png'
import Michelle from '../assets/Michelle.png'
import Isabelle from '../assets/Isabelle.png'
import Rehema from '../assets/Rehema.png'
import Dee from '../assets/Dee.png'

function MainAbout() {
    return (
      <>
      <Nav />
        <main>
          <h1 className='text-3xl'>Meet Team MIRAD!</h1>
          <div className='flex justify-around grid-cols-3'>
            <img className='span-1' src={Michelle}></img>
            <img src={Isabelle}></img>
            <img src={Rehema}></img>
          </div>
          <div className='flex justify-around grid-cols-3 text-bold text-2xl'>
            <p>Michelle</p>
            <p>Isabelle</p>
            <p>Rehema</p>
          </div>
          <div className='flex justify-around grid-cols-3 text-bold text-sm'>
            <p>Michelle</p>
            <p>Isabelle</p>
            <p>Rehema</p>
          </div>
          <div className='flex justify-around grid-cols-2'>
            <img src={Alfonso}></img>
            <img src={Dee}></img>
            </div>
            <div className='flex justify-around grid-cols-2  text-2xl'>
              <p>Alfonso</p>
              <p>Dee</p>
          </div>  
        </main>
      </>
    );
  }
  
  export default MainAbout;
  /* <p>
    <Link to="/">Home</Link>
  </p> */