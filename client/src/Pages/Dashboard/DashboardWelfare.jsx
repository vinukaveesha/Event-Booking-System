import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col,Row,Button,Card} from 'react-bootstrap';
import {Input, Page } from '@mobiscroll/react-lite';
import {Nav,Navbar} from 'react-bootstrap/';
import '../../Components/Styles/Dashboard.css';
import NavBar from '../../Components/Navbar/DashboardNavbar';

const DashboardWelfare = () => {
  return(
    <div className="dash-comp-lg">
      <div>
        <NavBar/>
      </div>

      <Row style={{padding:'10px', marginBottom:'30px'}}>
        <Col>
        <Card style={{width: '18rem',height:'10rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{fontSize:11}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '18rem',height:'10rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{fontSize:11}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '18rem',height:'10rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{fontSize:11}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
    </Row>

    <Row>
      <>
        <Navbar className="bg-body-tertiary" style={{marginTop:'10px'}}>
          <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-bar">
                <Nav.Link href="#home" style={{marginRight:'16px',width:100}}><h5>In Queue</h5></Nav.Link>
                <Nav.Link href="#home" style={{marginRight:'16px',width:100}}><h5>Urgent</h5></Nav.Link>
                <Nav.Link href="#home" style={{marginRight:'16px',width:100}}><h5>Approved</h5></Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </>
    </Row>

    <Row style={{padding:'11px'}}>
        <Col>
        <Card style={{width: '28rem',height:'14rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '28rem',height:'14rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '28rem',height:'14rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
    </Row>

    <Row style={{padding:'11px'}}>
        <Col>
        <Card style={{width: '28rem',height:'14rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '28rem',height:'14rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{width: '28rem',height:'14rem'}}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    </div>
  );
};

export default DashboardWelfare;
