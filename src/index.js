import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router"
import router from "./router"
import App from "./App";
import "./styles/index.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}>
  <Header />
    <App />
    <Footer />
  </RouterProvider>
</React.StrictMode>
);
