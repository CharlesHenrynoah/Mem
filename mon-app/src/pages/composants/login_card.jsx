import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login_card.css';

const LoginCard = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.email.trim() !== '' && formData.password.trim() !== '';
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={!isFormValid()}>Sign in</button>
      </form>
      <div className="links">
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup1">Create account</Link>
      </div>
    </div>
  );
};

export default LoginCard;