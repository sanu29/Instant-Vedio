import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react'
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  
);
