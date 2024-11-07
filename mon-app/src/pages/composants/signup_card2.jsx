import React, { useState } from 'react';
import './signup_card2.css';

export default function SignupCard2() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    if (value.length < 3 || value.length > 20) {
      setError('Le pseudo doit comporter entre 3 et 20 caractères.');
    } else {
      setError('');
    }
    setUsername(value);
  };

  return (
    <div className="signup-card2">
      <h2>Formulaire d'Inscription Individus</h2>
      <div className="photo-upload-container">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          style={{ display: 'none' }}
          id="photo-upload"
        />
        <label htmlFor="photo-upload" className="photo-upload-label">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
          ) : (
            <span>Uploader une photo</span>
          )}
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">Pseudo</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="form-input"
          placeholder="Entrez votre pseudo"
        />
        {error && <small className="error">{error}</small>}
      </div>
    </div>
  );
}