import React, { useState } from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword'; // Import the ForgotPassword component
import './Login.css';
import { useNavigate } from 'react-router-dom';


function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const token = await response.json();
      // const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', token);
        // After successful login, save the token
        localStorage.setItem('authToken', token); // Assuming 'token' is the JWT from your backend
        // localStorage.setItem('token', data.token); // Save token in local storage
        setIsLoggedIn(true); // Update state to indicate successful login
        navigate('/Destination');
      
      } else {
        setError(token.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add Google login logic here
  };

  return (
    <div className="login-container">
      {showForgotPassword ? (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      ) : (
        <center>
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
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
              value="Login"
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
                href={'/Register'}
                className="forgot-password-link"
              >
                Register Now !
              </a>
            </p>
          </form>
        </center>
      )}
    </div>
  );
}

export default Login;
