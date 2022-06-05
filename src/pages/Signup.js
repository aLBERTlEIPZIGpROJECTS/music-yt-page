import React, { useState } from 'react';
import { UserAuth } from '../components/AuthContext';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    }
  };

  return (
    <>
      <h2>Entra con tu cuenta</h2>
      <form action="">
        <label htmlFor="email" className="signup__label">
          Correo Electrónico
          <input
            type="email"
            className="signup__input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="signup__label">
          Contraseña
          <input
            type="string"
            className="signup__input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="signup__btn" onClick={() => {handleSubmit()}}>Entra</button>
      </form>
    </>
  );
};
