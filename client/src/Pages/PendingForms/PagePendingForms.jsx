import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Page } from '@mobiscroll/react-lite';
import "../../Components/Styles/PagePendingForms.css";

const PendingForms = () => {
  return (
    <Container>
      <div style={{marginBottom:'70px'}}>
          <h1>Form Tracker</h1>
      </div>

      <div className="form-status-container" style={{ marginBottom: '30px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h4 style={{ marginBottom: '0' }}>Form Status:</h4>
      </div>

      <Page>
        <Form className="form-comp" >
          <Row>
            <Col md={6}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Form ID:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Applicant's Name:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Applicant's Index:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Applicant's Faculty:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Applicant's Department:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Applicant's Email:</Form.Label>
                <Col sm="8">
                  <Form.Control type="email"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Applicant's Mobile Number:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text"/>
                </Col>
              </Form.Group>
            </Col>

            <Col md={6}>
              

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Requested Place:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Reason for the Event:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text"/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Requested Date:</Form.Label>
                <Col sm="8">
                  <Form.Control type="date" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Requested Start Time:</Form.Label>
                <Col sm="8">
                  <Form.Control type="time" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">Requested End Time:</Form.Label>
                <Col sm="8">
                  <Form.Control type="time" />
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Page>
    </Container>
  );
}

export default PendingForms;
