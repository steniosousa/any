import React from 'react';
import { BrowserRouter as Router, Route,   Routes } from 'react-router-dom';
import Auth from './Auth/Login';
import Logout from './Auth/Logout';
import Home from './Home';
import AutoCheck from './modules/AutoCheck';

function App() {
  return (

    <Router>
       <Routes>
        <Route path="/Login" element={<Auth />} />
        <Route path="/Logout" element={<Logout/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/AutoCheck' element={<AutoCheck/>}/>
       </Routes>
  </Router>

  );
}

export default App;
