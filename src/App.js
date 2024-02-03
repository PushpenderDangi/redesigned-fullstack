import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Partner from "./components/Partner";
import Career from "./components/Career";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/partners" element={<Partner></Partner>}></Route>
          <Route path="/career" element={<Career></Career>}></Route>
          {/* <Route path="/signup" element={<Signup></Signup>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
