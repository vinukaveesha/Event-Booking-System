import React, { useState } from 'react';
import '../Components/Styles/PageWelcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Welcome = () => {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/login-page");
  }

  const navigateToEventForm = () => {
    navigate("/event-form");
  }

  return (
     <div className="welcome-container">
      <div className="welcome-header">
        <p>Welcome to Venue Booking Site of Master University</p>
      </div>
      
      <div className="button-container">
            <div className="button-rectangle" onClick={navigateToEventForm}>
              <span className="button-text">Continue to Venue booking</span>
            </div>
            <div className="button-rectangle" onClick={navigateToLoginPage}>
              <span className="button-text">Login as admin/officer</span>
            </div>
          </div>
    </div>
  );
}

export default Welcome;
