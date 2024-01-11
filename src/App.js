import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import login from "./Components/login"
import Home from "./Pages/Home";
import About from './Pages/About';
import Sevices from './Pages/Services'
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/TechEvalution' exact Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/services' Component={Sevices}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/sanjay' Component={login} />
          <Route path='/ravi' Component={login}  />
          <Route path='/mahesh' Component={login} />
          <Route path='/lalith' Component={login} />
          <Route path='/narsingh' Component={login} />
          <Route path='/shivani' Component={login} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;