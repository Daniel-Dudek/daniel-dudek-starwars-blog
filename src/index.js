import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FavoritesProvider } from "./components/context/Favorites";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
