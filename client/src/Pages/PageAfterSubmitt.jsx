import { Label } from "@mobiscroll/react-lite";
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import '../Components/Styles/PageAfterSubmitt.css';

const AfterSubmit = () =>{
    const location = useLocation();
    const email = location.state?.email || 'unknown';

    return(
        <Container>
            <Row>
                <Col>
                    <div className="comp1">
                        <Label>
                            <h3>Form ID: </h3>
                        </Label>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="mt-2 comp1">
                        <h4>
                            Form ID and filled form details are sent to {email}.
                        </h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="mt-2 comp1">
                        <h4>
                            You can check the status of the form by using with Form ID.
                        </h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AfterSubmit;