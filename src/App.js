import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// -- React Components: --
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./pages/Episodes";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Hero from "./pages/Hero";
import CardDetails from "./components/Card/CardDetails";
import EpisodeDetails from "./components/Episodes/EpisodeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<EpisodeDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
