import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
import Auth from './Auth/Login';
import Logout from './Auth/Logout';
import Home from './Home';
import AutoCheck from './modules/AutoCheck';
import Check from './modules/AutoCheck/Check';
import Register from './modules/AutoCheck/register';
import CardapioOnline from './modules/CardapioOnline';
import './index.css'; 
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Auth />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path='/' element={<Home />} />
        <Route path='/AutoCheck' element={<AutoCheck />} />
        <Route path='/AutoCheck/detection' element={<Check />} />
        <Route path='/AutoCheck/register' element={<Register />} />
        <Route path='/CardapioOnline' element={<CardapioOnline />} />
      </Routes>
    </Router>

  );
}

export default App;
