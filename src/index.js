import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID;

// const domain = process.env.REACT_APP_AUTH_DOMAIN;


root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <Auth0Provider
          domain="dev-dm7r081voxlt31qx.us.auth0.com"
          clientId="n9PGAKaaeyJrtlOJWmghHhJErcBmrMd0"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

reportWebVitals();
