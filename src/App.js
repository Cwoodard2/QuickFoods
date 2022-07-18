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
