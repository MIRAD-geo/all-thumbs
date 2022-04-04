import * as React from "react";
import { Link } from "react-router-dom";
import Nav from '../Components/Nav'

function Shop() {
    return (
      <>
      <Nav />
        <main>
          <h2>Shop</h2>
          <p>
           this is where we buy plants
          </p>
        </main>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </>
    );
  }

export default Shop;