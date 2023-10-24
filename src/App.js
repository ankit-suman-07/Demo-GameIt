import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/home/Home';
import Genres from './pages/Genres/Genres';
import ContactUs from './pages/Contact/ContactUs';
import About from './pages/About/About';
import ProfileUser from './pages/Profile-User/ProfileUser';
import Signup from './pages/SignUp/Signup';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/profileuser" element={<ProfileUser />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
