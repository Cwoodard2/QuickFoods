import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Homepage from './pages/homepage';
import RecipeBook from './pages/recipebook';
import GroceryList from './pages/grocerylist';
import Calender from './pages/calender';
import AuthProvider from './database/authContext';

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
    <AuthProvider>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/recipebook" element={<RecipeBook/>}/>
          <Route path="/grocerylist" element={<GroceryList/>}/>
          <Route path="/calender" element={<Calender/>}/>
        </Routes>
      </HashRouter>
      </AuthProvider>
  );
}

export default App;
