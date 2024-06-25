import React, { useState } from 'react';
import '../Components/Styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../Components/Login/Login.comp';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password!");
    }

    //TODO call api to submit the form
    console.log(email, password);
  }

  const navigateToEventForm = () => {
    navigate("/event-form");
  }

  return (
    <div className="login-container">
      
      <div className="login-page">
        <Container className="login_comp">
          <LoginForm
            email={email}
            password={password}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            navigateToEventForm={navigateToEventForm}
          />
        </Container>
      </div>
    </div>
  );
}

export default Login;
