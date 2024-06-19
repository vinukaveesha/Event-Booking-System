import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import EventForm from './Pages/PageEventForm';
import Welcome from './Pages/PageWelcome';
import DefaultLayout from './Layouts/DefaultLayout';
import DashboardWelfare from './Pages/Dashboard/DashboardWelfare';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/event-form" element={<EventForm />} />
      </Routes>

      </BrowserRouter>

  );
}

export default App;
