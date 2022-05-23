import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  
);
