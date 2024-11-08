import React from 'react';
import Navbar from './composants/navbar';
import SignupCard2 from './composants/signup_card2';
import './Signup2.css';


const Signup2 = () => {
  return (
    <div>
      <Navbar />
      <div className="signup2-container">
        <SignupCard2 />
      </div>
    </div>
  );
};

export default Signup2;