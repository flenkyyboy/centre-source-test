import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import background from '../assets/images/table_top.jpg'

const Contact = () => {
    return (
        <div style={{ width: '100%', height: '260px', backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
    
                <h2 className="text-center contact-title">Feel free to contact us for your customized meal plan</h2>
                <div className="center-row">
                    <Form className="form-cover">
                    <Row>
                        <Col>
                        <Form.Label className="form-custom-label">Your Name</Form.Label>
                        <Form.Control className="form-custom-input" />
                        </Col>
                        <Col>
                        <Form.Label className="form-custom-label">Your Email</Form.Label>
                        <Form.Control className="form-custom-input" />

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Form.Label className="form-custom-label">Your Mobile No</Form.Label>
                        <Form.Control className="form-custom-input" />
                        </Col>
                        <Col>
                        <Form.Label className="form-custom-label">Message</Form.Label>
                        <Form.Control className="form-custom-input" />

                        </Col>
                    </Row>
                    </Form>
                    <div>
                        <Button className="send-now-btn">Send Now</Button>
                    </div>
                </div>
        
        </div>
    )
}

export default Contact