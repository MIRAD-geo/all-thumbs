import * as React from "react";
import { Link } from "react-router-dom";

function Shop() {
    return (
      <>
        <main>
          <h2>Shop</h2>
          <p>
           this is where we buy plants
          </p>
        </main>
        <nav>
          <Link to="/">Back to Home</Link>
        </nav>
      </>
    );
  }

export default Shop;