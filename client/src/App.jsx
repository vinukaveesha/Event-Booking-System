import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import EventForm from './Pages/PageEventForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/event-form" element={<EventForm />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
