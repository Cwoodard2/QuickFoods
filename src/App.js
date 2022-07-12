import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React, Hey man this is me making an edit!
    //     </a>
    //   </header>
    // </div>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
