import React from 'react';
import Navbar from './composants/navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Bienvenue sur la page d'accueil</h1>
      <div className="home-content">
        <p>Contenu de votre page d'accueil</p>
      </div>
    </div>
  );
};

export default Home;