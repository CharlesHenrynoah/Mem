import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
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
      logo: "Mem"
    }
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo" style={{fontFamily: 'Orbitron, sans-serif', fontStyle: 'italic'}}>
        {translations['EN'].logo}
      </Link>
      
      <div className="navbar-buttons">
        <button 
          onClick={() => navigate('/signup1')}
          className="button-signup"
        >
          <FaUserPlus className="button-icon" />
          {translations['EN'].signup}
        </button>
        
        <button 
          onClick={() => navigate('/login')}
          className="button-login"
        >
          <FaSignInAlt className="button-icon" />
          {translations['EN'].login}
        </button>
      </div>
    </nav>
  );
}
