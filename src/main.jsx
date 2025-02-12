import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import App from "./App.jsx";
import './output.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </StrictMode>
);
