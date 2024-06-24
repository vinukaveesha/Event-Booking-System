import React, { useState } from 'react';
import '../Components/Styles/PageWelcome.css';
import '../Components/Styles/PageVenueBooking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import track1Image from '../Components/Assets/bookingkey.jpg';
import bookImage from '../Components/Assets/booking.jpg';



const VenueBooking = () => {
  const navigate = useNavigate();

  const navigateToPendingForms = () => {
    navigate("/pending-forms-entry");
  }

  const navigateToEventForm = () => {
    navigate("/event-form");
  }

  return (
    <div className="welcome-container">
    <div className="center">
      <div className="article-card" onClick={navigateToPendingForms}>
        <div className="content">
          <p className="title">Track your Submitted Form</p>
        </div>
        <img src={track1Image} alt="article-cover" />
      </div>

      <div className="article-card" onClick={navigateToEventForm}>
        <div className="content">
          <p className="title">Submit New Event</p>
        </div>
        <img src={bookImage} alt="article-cover" />
      </div>
    </div>
    </div>
  );
}

export default VenueBooking;
