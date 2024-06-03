import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { Provider } from "react-redux";
import store from "./Redux/Store"
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
  <CartProvider>
    <Provider store={store}>
    <App />
    </Provider>
     </CartProvider>
  </React.StrictMode>
);

