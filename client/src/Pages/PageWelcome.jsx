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
     <div>
      <div className="welcome-header">
        <h1>Event Booking System</h1>
      </div>
      <div className="welcome-page">
        <Container className="welcome_comp">
          <h1>Welcome</h1>
          <button onClick={navigateToEventForm}>Continue to Venue booking</button>
          <hr/>
          <button onClick={navigateToLoginPage}>Login as admin/officer</button>
        </Container>
      </div>
    </div>
  );
}

export default Welcome;
