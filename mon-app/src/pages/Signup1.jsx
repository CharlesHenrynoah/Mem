import React from 'react';
import Navbar from './composants/navbar'; // Importez la navbar
import SignupCard from './composants/signup_card'; // Importez la carte d'inscription
import './Signup1.css'; // Importez le fichier CSS

const Signup1 = () => {
  return (
    <div>
      <Navbar /> {/* Ajoutez la navbar ici */}
      <div className="signup-container">
        <div className="signup-card">
          <SignupCard /> {/* Ajoutez la carte d'inscription ici */}
        </div>
      </div>
    </div>
  );
};

export default Signup1;