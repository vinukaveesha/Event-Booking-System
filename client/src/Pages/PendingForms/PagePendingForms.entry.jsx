import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const PendingFormsEntry = () => {

  return (
    <Container>

        <Row>
            <Col>
                <h1>Form Tracker</h1>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Form ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Form ID" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        
    </Container>
);

}

export default PendingFormsEntry;