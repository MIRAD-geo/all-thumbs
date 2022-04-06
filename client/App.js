import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Containers/MainContainer';
import About from './Components/main_About';
import CheckoutPreview from './Components/CheckoutPreview';
import Checkout from './Containers/CheckoutContainer';
import FakeComfirmation from './Components/FakeConfirmation'
import Plants from './Components/shop_plants'
import PlantDetails from './Components/plants_Details'
import MainFooter from './Components/main_Footer.js' 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/reviewCart" element={<CheckoutPreview/>} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/confirm" element={<FakeComfirmation/>} />
        <Route exact path="/plantShop" element={<Plants />} />
        <Route exact path="/details" element={<PlantDetails />} />
      </Routes>
      <MainFooter className='bg-orange-100' />
    </div>
  );
}

export default App