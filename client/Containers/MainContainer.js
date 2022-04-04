import * as React from "react";
import { Link } from "react-router-dom";
import Nav from '../Components/Nav'

function Home() {
    return (
      <>
      <Nav />
        <main>
          <h2>Welcome to the all thumbs!</h2>
          <p>You can do this, I believe in you.</p>
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