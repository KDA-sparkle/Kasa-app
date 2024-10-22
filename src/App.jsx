import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<Error404 />} /> {/* Page 404 par défaut */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
