import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Containers/MainContainer'
import About from './Components/main_About'
import Shop from './Containers/ShopContainer'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App