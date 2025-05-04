import React, { useState } from 'react';
import './ForgotPassword.css';


function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log(`Forgot password email: ${email}`);
    alert('Password reset link has been sent to your email.');
    onClose();
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Reset Your Password</h2>
        <p className="forgot-password-description">
          Enter your registered email address, and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="forgot-email">Email Address</label>
          <input
            type="email"
            id="forgot-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" value="Send Reset Link" />
          <button type="button" onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
