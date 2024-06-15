import React from "react";
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

const LoginForm = () => {
    return(
    <Container>
        <Row>
            <Col>
            <h1>Login</h1>
            <hr/>
            <Form>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email "placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password "placeholder="Enter password" required/>
                </Form.Group>
                <hr/>
                <Button type="submit">Login</Button>
                <hr/>
                <Button type="submit">Continue to event booking</Button>
            </Form>
            </Col>
        </Row>
    </Container>
    );
}

export default LoginForm;