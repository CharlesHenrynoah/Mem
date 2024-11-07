import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  // Translation object
  const translations = {
    FR: {
      signup: "S'inscrire",
      login: "Se connecter",
      logo: "Logo Mem"
    },
    EN: {
      signup: "Sign Up",
      login: "Login",
      logo: "Mem Logo"
    }
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        {translations['EN'].logo}
      </Link>
      
      <div className="navbar-buttons">
        <button 
          onClick={() => navigate('/signup1')}
          className="button-signup"
        >
          {translations['EN'].signup}
        </button>
        
        <button 
          onClick={() => navigate('/login')}
          className="button-login"
        >
          {translations['EN'].login}
        </button>
      </div>
    </nav>
  );
}