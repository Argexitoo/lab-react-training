import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook(props) {
  return (
    <>
      <button>All</button>
      <button>England</button>
      <button>USA</button>
      <button>Malasya</button>
      <button>Germany</button>
      <button>...</button>
      {profiles.map((profile) => {
        return (
          <div className="box">
            <img src={profile.img} alt="" width="40%" />
            <p>
              <strong>First Name</strong>
              {profile.firstName}
            </p>
            <p>
              <strong>Last Name</strong>
              {profile.lasttName}
            </p>
            <p>
              <strong>Country</strong>
              {profile.country}
            </p>
            <p>
              <strong>Type</strong>
              {profile.type}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Facebook;
