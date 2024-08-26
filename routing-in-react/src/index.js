import React from "react";
import ReactDOM from "react-dom";
import "../src/App.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);
