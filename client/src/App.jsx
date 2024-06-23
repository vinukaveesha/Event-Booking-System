import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import EventForm from './Pages/PageEventForm';
import Welcome from './Pages/PageWelcome';
import DefaultLayout from './Layouts/DefaultLayout';
import DashboardWelfare from './Pages/Dashboard/DashboardWelfare';
import AfterSubmit from './Pages/PageAfterSubmitt';
import VenueBooking from './Pages/PageVenueBooking';
import PendingFormsEntry from './Pages/PendingForms/PagePendingForms.entry';
import PendingForms from './Pages/PendingForms/PagePendingForms';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PendingForms/>} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/after-submit" element={<AfterSubmit />} />
        <Route path="/venue-booking" element={<VenueBooking />} />
        <Route path="/pending-forms-entry" element={<PendingFormsEntry />} />
        <Route path="/event-form" element={<EventForm />} />
        <Route path="/pending-forms" element={<PendingForms />} />
      </Routes>

      </BrowserRouter>

  );
}

export default App;
