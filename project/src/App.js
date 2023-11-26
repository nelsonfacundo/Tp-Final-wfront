import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PetPage from './components/Pet/PetPage';
import RegisterPage from './components/register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/adopt/' element={<PetPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
