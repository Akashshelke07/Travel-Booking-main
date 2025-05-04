import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import Booking from './component/Booking/Booking.jsx';
import Destination from './component/Destination.jsx';
import Footer from './component/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route 
            path="/Login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} />} 
          />
          {/* If not logged in, redirect to Login page */}
          <Route 
            path="/Booking" 
            element={isLoggedIn ? <Booking /> : <Navigate to="/Login" />} 
          />
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
      </>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
