import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Character from "./components/Character";
import Characters from "./pages/Characters";
import Episode from "./components/Episode";
import Episodes from "./pages/Episodes";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/character" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />

        <Route path="/episode" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
