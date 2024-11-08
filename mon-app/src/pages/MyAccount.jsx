import React from 'react';
import './MyAccount.css';

const Myaccount = () => {
  return (
    <div className="myaccount-container">
      <h1 className="myaccount-title">Mon Compte</h1>
      <div className="myaccount-content">
        <p>Bienvenue sur votre page de compte.</p>
        {/* Ajoutez d'autres éléments de compte ici */}
      </div>
    </div>
  );
};

export default Myaccount;