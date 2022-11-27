/* eslint-disable */

import './App.css';
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import Login from "./pages/Account/Login"
import Main from "./pages/Main"
import Note from "./pages/Note"
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} /> 
        <Route path="main" element={<Main />} /> 
        <Route path="note" element={<Note />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
