import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// -- React Components: --
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./pages/Episodes";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Hero from "./pages/Home";
import Character from "./components/Character";
import Episode from "./components/Episode";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/character" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />

        <Route path="/episode" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
