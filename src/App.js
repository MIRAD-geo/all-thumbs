import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App