import './App.css';
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import Login from "./pages/Account/Login"
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
