import React, { useState } from 'react';
import '../Components/Styles/PageWelcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const VenueBooking = () => {
  const navigate = useNavigate();

  const navigateToPendingForms = () => {
    navigate("/pending-forms-entry");
  }

  const navigateToEventForm = () => {
    navigate("/event-form");
  }

  return (
     <div className="">
      <div className="">
        <p>Welcome to Venue Booking Site of Master University</p>
      </div>
      
      <div className="button-container">

            <div className="button-rectangle" onClick={navigateToPendingForms}>
              <span className="button-text">Track your Submitted Form</span>
            </div>
            <div className="button-rectangle" onClick={navigateToEventForm}>
              <span className="button-text">New Venue booking</span>
            </div>
            
          </div>
    </div>
  );
}

export default VenueBooking;
