import * as React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav'

function MainAbout() {
    return (
      <>
      <Nav />
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <p>
          <Link to="/">Home</Link>
        </p>
      </>
    );
  }

export default MainAbout;