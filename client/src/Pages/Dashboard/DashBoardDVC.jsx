import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row, Button, Card, Nav, Navbar } from 'react-bootstrap';
import '../../Components/Styles/Dashboard.css';
import NavBar from '../../Components/Navbar/DashboardNavbar';
import Axios from "axios";

const DashboardDVC = () => {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState('pending'); // Track selected status

  useEffect(() => {
    // Fetch events from your backend API
    const fetchEvents = async () => {
      try {
        const response = await Axios.get(`http://localhost:3000/v1/event/status/${status}`);
        setEvents(response.data.events); // Assuming response.data contains the list of events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [status]);

  const renderCards = () => {
    return events.map((event, index) => (
      <Col key={index}>
        <Card style={{ width: '18rem', height: '10rem' }}>
          <Card.Body>
            <Card.Title>{event.applicantName}</Card.Title>
            <Card.Text style={{ fontSize: 11 }}>
              {event.reasonofEvent}
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="dash-comp-lg">
      <div>
        <NavBar />
      </div>

      <Row>
        <Navbar className="bg-body-tertiary" style={{ marginTop: '10px' }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-bar">
                <Nav.Link
                  href="#inqueue"
                  style={{ marginRight: '16px', width: 100 }}
                  onClick={() => setStatus('pending')}
                >
                  <h5>In Queue</h5>
                </Nav.Link>
                <Nav.Link
                  href="#urgent"
                  style={{ marginRight: '16px', width: 100 }}
                  onClick={() => setStatus('approved')}
                >
                  <h5>Urgent</h5>
                </Nav.Link>
                <Nav.Link
                  href="#approved"
                  style={{ marginRight: '16px', width: 100 }}
                  onClick={() => setStatus('Welfare approved')}
                >
                  <h5>Approved</h5>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      <Row style={{ padding: '10px', marginBottom: '30px' }}>
        {renderCards()}
      </Row>
    </div>
  );
};

export default DashboardDVC;
