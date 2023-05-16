import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";

import Navbar from "./components/Molecules/Navbar/Navbar";
import Error from "./Error";
import Register from "./components/Pages/Register/Register";
import Login from "./components/Pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
