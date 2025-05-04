import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar-container">
      {/* Logo as a Link */}
      <Link to="/" className="logo-link">
        <img
          src="https://yoliday.in/_next/static/media/yoliday-white-logo.0230a691.png"
          alt="Logo"
          className="logo"
        />
      </Link>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/Destination" className="nav-link">
          <li>Destination</li>
        </Link>
        <Link to="/Booking" className="nav-link">
          <li>Booking</li>
        </Link>
        {!isLoggedIn && (
          <Link to="/Register" className="nav-link">
            <li>Register</li>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/Login" className="nav-link">
            <li>Login</li>
          </Link>
        )}
        {isLoggedIn && (
          <li className="nav-link" onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
