import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        Sample App Demo
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
