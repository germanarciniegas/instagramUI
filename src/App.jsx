import React from 'react';
import logo from './assets/images/instagramLogo.png';
import './App.css';
import WrapperStates from './components/pages/wrapperState/WrapperStates.jsx';




const App = () => {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <WrapperStates />
    </div>
  );
}

export default App;


