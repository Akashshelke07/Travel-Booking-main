import React, { useState } from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword'; // Import the ForgotPassword component
import './Register.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Register({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use navigate hook

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://holiday-backend-delta.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Register successful:', data);
        localStorage.setItem('token', data.token); // Save token in local storage
        setIsLoggedIn(true); // Update state to indicate successful registration

        // Navigate to Login page after successful registration
        navigate('/Login');
      } else {
        setError(data.message || 'Register failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during Register:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="Register-container">
      {showForgotPassword ? (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      ) : (
        <center>
          <form onSubmit={handleRegister}>
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor="name">Name:</label>
            <input
              type="text"  // Change type to text
              id="name"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="submit"
              value="Register"
            />
            <p className="forgot-password">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="forgot-password-link"
              >
                Forgot Password?
              </button>
            </p>
            <p>
              <a
                type="button"
                href={'/Login'}
                className="forgot-password-link"
              >
                Login Now !
              </a>
            </p>
          </form>
        </center>
      )}
    </div>
  );
}

export default Register;
