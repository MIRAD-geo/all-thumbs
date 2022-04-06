import * as React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav'
import Alfonso from '../assets/Alfonso.png'

function MainAbout() {
    return (
      <>
      <Nav />
        <main>
          <h1 className='text-3xl'>Meet the Team!</h1>
          <img src={Alfonso}></img>
        </main>
        <p>
          <Link to="/">Home</Link>
        </p>
      </>
    );
  }

export default MainAbout;