import React from "react";
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';


const LoginForm = ({handleOnSubmit,handleOnChange,email,password,navigateToOfficer}) => {

    return(
    <Container>
        <Row>
            <Col>
            <h1>Login</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={handleOnChange}
                        placeholder="Enter email" 
                        //required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        value = {password} 
                        onChange={handleOnChange}
                        placeholder="Enter password" 
                        //required
                    />
                </Form.Group>
                <hr/>
                <Button type="submit" onSubmit={handleOnSubmit}>Login</Button> 
            </Form>
            </Col>
        </Row>
    </Container>
    );
}

export default LoginForm;

LoginForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    navigateToOfficer: PropTypes.func.isRequired
};