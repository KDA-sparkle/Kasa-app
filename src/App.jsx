import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/Logement/:id" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
