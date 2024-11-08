import React from 'react';
import './Login.css';
import Navbar from './composants/navbar';
import LoginCard from './composants/login_card';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <LoginCard />
      </div>
    </>
  );
};

export default Login;