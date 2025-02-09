import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FavouritesProvider } from "./components/context/Favourites";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
