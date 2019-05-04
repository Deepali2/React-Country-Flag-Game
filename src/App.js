import React from 'react';
import './App.css';
import CountryGame from './CountryGame';

const App = () => {
  return (
  <div className="flag-app">
    <header className="title-header">
      <h1 className="title-text">Guess The Flag</h1>
    </header>
   
    <CountryGame />
    <p className="signature">Designed and maintained by deepaligarg1001@gmail.com</p>
    <p className="picture-credit">world picture by Strebe - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16115375</p>
  </div>
  )
}

export default App;
