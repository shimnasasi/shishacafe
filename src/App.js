import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
