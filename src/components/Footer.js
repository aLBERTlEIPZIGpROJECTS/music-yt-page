import React, { useContext } from 'react';
import { TitleContext } from '../components/TitleContext';
import { UserAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

export const Footer = () => {
  const { logStatus, setLogStatus } = useContext(TitleContext);
  const auth = getAuth()

  const buttonTxt = logStatus === true ? 'Log out' : 'Log in';
  return (
    <footer>
      <p className="copyright">
        <span className="material-symbols-outlined">copyright</span> Albert
        Löwe, 2022
      </p>
      <button oncClick={() => signOut(auth)}>sign out</button>
      {/* <button onClick={() => app.auth().signOut()}>{buttonTxt}</button> */}
    </footer>
  );
};
