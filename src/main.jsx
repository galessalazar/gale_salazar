import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

import "./App.css";
import App from "./App.jsx";
import "./output.css";

createRoot(document.getElementById("root")).render(
  // REMOVED strictmode to avoid the resume pdf from rendering twice.
  // <StrictMode>
    <Router basename="/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  //  </StrictMode>
);
