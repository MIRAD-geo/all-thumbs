import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Containers/MainContainer'
import About from './Components/main_About'
import Shop from './Containers/ShopContainer'
import CheckoutPreview from './Components/CheckoutPreview'
import Checkout from './Containers/CheckoutContainer'
import PlantDetails from "./Components/plants_Details";
import Plants from "./Components/shop_plants";
import FakeComfirmation from './Components/FakeConfirmation'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/placeholder" element={<CheckoutPreview/>} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/details" element={<PlantDetails />} />
        <Route exact path="/plantShop" element={<Plants />} />
        <Route exact path="/confirm" element={<FakeComfirmation/>} />
      </Routes>
    </div>
  );
}

export default App