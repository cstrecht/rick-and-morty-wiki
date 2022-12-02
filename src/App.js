import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// -- React Components: --
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import About from "./pages/About";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

const Hero = () => {
  return <div>hero page</div>;
};
export default App;
