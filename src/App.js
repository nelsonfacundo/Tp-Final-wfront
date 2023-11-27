import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PetPage from './components/Pet/PetPage';
import AdoptPage from './components/Pet/AdoptPage';
import RegisterPage from './components/register/RegisterPage';
import Administrator from './components/administrator/Administrator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/adopt/' element={<AdoptPage />} />
        <Route path='/adopt/' element={<PetPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin' element={<Administrator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
