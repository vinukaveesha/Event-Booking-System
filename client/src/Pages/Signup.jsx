import React, { useState } from 'react';
import '../Components/Styles/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../Components/SignUp/SignUp.comp';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // TODO: Replace this with an API call to register the user
      // const response = await api.register({ name, email, password });
      // if (response.success) {
      navigate("/dashboard-dvc");
      // } else {
      //   alert("Registration failed");
      // }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-page">
        <Container className="signup_comp">
          <SignUpForm
            formData={formData}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
