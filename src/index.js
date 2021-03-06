import "overlayscrollbars/css/OverlayScrollbars.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
