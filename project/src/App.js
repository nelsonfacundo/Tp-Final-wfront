import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PetPage from "./components/Pet/PetPage";
import AdoptPage from "./components/Pet/AdoptPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/adopt/" element={<AdoptPage />} />
        <Route path="/pets/" element={<PetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
