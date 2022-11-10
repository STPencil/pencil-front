import './App.css';
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import Login from "./pages/Account/Login"
import Main from "./pages/Main"
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} /> 
        <Route path="main" element={<Main />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
