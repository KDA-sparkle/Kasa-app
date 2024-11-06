import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Loading from "./Components/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Loading />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
