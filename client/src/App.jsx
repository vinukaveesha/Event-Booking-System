import React from 'react';
import { BrowserRouter , Route, Routes, Router,Switch} from 'react-router-dom';
import './App.css';
import Axios from 'axios';

import Login from './Pages/Login';
import EventForm from './Pages/PageEventForm';
import Welcome from './Pages/PageWelcome';
import DefaultLayout from './Layouts/DefaultLayout';
import DashboardWelfare from './Pages/Dashboard/DashboardWelfare';
import DashboardDVC from './Pages/Dashboard/DashBoardDVC';
import AfterSubmit from './Pages/PageAfterSubmitt';
import VenueBooking from './Pages/PageVenueBooking';
import PendingFormsEntry from './Pages/PendingForms/PagePendingForms.entry';
import PendingForms from './Pages/PendingForms/PagePendingForms';
import SignUp from './Pages/Signup';

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/dashboard-welfare" element={<DashboardWelfare />} />
        <Route path="/dashboard-dvc" element={<DashboardDVC />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/after-submit" element={<AfterSubmit />} />
        <Route path="/venue-booking" element={<VenueBooking />} />
        <Route path="/pending-forms" element={<PendingFormsEntry />} />
        <Route path="/event-form" element={<EventForm />} />
        <Route path="/pending-forms/:formID" element={<PendingForms />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;

