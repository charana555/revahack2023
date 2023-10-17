import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import App from "./App.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
