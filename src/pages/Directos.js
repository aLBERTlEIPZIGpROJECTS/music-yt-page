import React, { useState, useEffect, useContext } from 'react';
import { UserAuth } from '../components/AuthContext';
import { TitleContext } from '../components/TitleContext';
import { PastLiveCard } from '../components/PastLiveCard';
const pastLiveList = [
  { liveTitle: '1 Sinfonia Mozart', liveDate: '20, 03, 2022' },
];

export const Directos = () => {
  const { title, setTitle } = useContext(TitleContext);
  setTitle('Directos');
  const { user } = UserAuth();
  const mail = user.email;

  return (
    <>
      <div className="directos__anuncio">
        <div className="directos__texto">
          <p>¡Proximo directo!</p>
          <p>TT / MM || HH:HH</p>
        </div>
        <p>Obra, obra, obra, obra, obra, obra, obra, obra</p>
        <img
          src="https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="next-stream__image"
        />
        {user && (
          <button className="next-stream__btn">
            <a href="">Al directo</a>
          </button>
        )}
      </div>
      <div>
        {user && (
          <>
            <h2 className="past-stream__list-title">Directos pasados</h2>
            <div>
              {pastLiveList &&
                pastLiveList.map((live) => {
                  <PastLiveCard
                    liveTitle={live.liveTitle}
                    liveDate={live.liveDate}
                  />;
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
