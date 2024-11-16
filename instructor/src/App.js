/*
Precise Attendance | Instructor View React Application
@author Nolan Platt
nolanplatt.com | github.com/nolanplatt | linkedin.com/nolanplatt
*/


// Dependencies
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Named import
import { database } from './firebase';
import { ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import config from './config.json';

function App() {
  const [token, setToken] = useState(generateToken());

  // Generates new token
  function generateToken() {
    return uuidv4();
  }

  // Updates Firebase Real Time Database with new Token.
  // Ensures validation on client (student) side.
  const updateDatabase = (currentToken) => {
    const tokenRef = ref(database, 'currentToken');
    set(tokenRef, {
      token: currentToken,
      timestamp: Date.now(),
    })
      .then(() => {
        console.log('Token updated in Firebase:', currentToken);
      })
      .catch((error) => {
        console.error('Error updating token:', error);
      });
  };

  const refreshRate = config.refreshRate * 1000 // adjusts refresh rate to be in ms.
  useEffect(() => {
    updateDatabase(token);


    // Generates new token & QR code every n milliseconds
    const interval = setInterval(() => {
      const newToken = generateToken();
      setToken(newToken);
      updateDatabase(newToken);
    }, refreshRate);

    return () => clearInterval(interval);
  }, []);

  const fixedEndpoint = config.endpoint;
  const qrUrl = `${fixedEndpoint}?token=${token}`;
  // HTML
  return (
    <div className="App">
      <h1>{config.class}</h1>
      <h2>{config.semester} | {config.instructor}</h2>
      <QRCodeSVG value={qrUrl} size={500} />
      <p>{config.note}</p>

    </div>
  );
}

export default App;