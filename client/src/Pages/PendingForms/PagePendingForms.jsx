import React from "react";
import { Container, Row, Col, Form, Button,Card } from 'react-bootstrap';
import { Page } from '@mobiscroll/react-lite';
import "../../Components/Styles/PagePendingForms.css";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PendingForms = () => {
  const { formID } = useParams();
  const [event, setEvent] = useState(null);


  useEffect(() => {
    const fetchEvent = async () => {
        try {
            const response = await Axios.get(`http://localhost:3000/v1/event/${formID}`);
            setEvent(response.data.event);
        } catch (error) {
            console.error("Error fetching event:", error);
        }
    };

    fetchEvent();
  }, [formID]);

if (!event) {
    return <div>Loading...</div>; 
}


return (
    <Container className="pendingForm">
        <h1 className="mb-4">Event Details</h1>
        <Row >
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Form ID</Card.Title>
                        <Card.Text>{event.formID}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Applicant's Name</Card.Title>
                        <Card.Text>{event.applicantName}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Applicant's Index</Card.Title>
                        <Card.Text>{event.applicantIndex}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Faculty</Card.Title>
                        <Card.Text>{event.faculty}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Department</Card.Title>
                        <Card.Text>{event.department}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Applicant's Email</Card.Title>
                        <Card.Text>{event.applicantEmail}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Phone Number</Card.Title>
                        <Card.Text>{event.phoneNumber}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Place Name</Card.Title>
                        <Card.Text>{event.placename}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Reason for Event</Card.Title>
                        <Card.Text>{event.reasonofEvent}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Selected Date</Card.Title>
                        <Card.Text>{new Date(event.selectedDate).toLocaleDateString()}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Start Time</Card.Title>
                        <Card.Text>{event.startTime}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>End Time</Card.Title>
                        <Card.Text>{event.endTime}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Status</Card.Title>
                        <Card.Text>{event.status}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default PendingForms;
