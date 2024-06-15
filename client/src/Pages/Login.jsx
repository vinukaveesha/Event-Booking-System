// import React, { useState } from 'react';
// import '../Components/Styles/Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container} from 'react-bootstrap';

// import LoginForm from '../Components/Login/Login.comp';

// const Login = () => {
//     return(
//         <div className="login-page">

//             <div className="login_header ">
                
//                 <h1>Event Booking System</h1>

//             </div>
//             <div className="login_comp">
//                 <LoginForm />
//             </div>
//         </div>

//     );
// }
// export default Login;


import React from 'react';
import '../Components/Styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import LoginForm from '../Components/Login/Login.comp';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Event Booking System</h1>
      </div>
      <div className="login-page">
        <Container className="login_comp">
          <LoginForm />
        </Container>
      </div>
    </div>
  );
}

export default Login;

