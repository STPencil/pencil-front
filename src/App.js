/* eslint-disable */

import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Account/Login"
import Main from "./pages/Main"
import Signup from "./pages/Account/Signup"
import Note from "./pages/Note"
import React from 'react';
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/main" element={localStorage.getItem('token') ? <Main /> : <Navigate to="/login" />} /> 
        <Route path="/note" element={localStorage.getItem('token') ? <Note /> : <Navigate to="/login" />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
