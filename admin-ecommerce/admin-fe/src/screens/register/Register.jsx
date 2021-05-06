import React from 'react';
import './register.css';

import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import { Input, CustomButton } from '../../components/index';

const Register = () => {
    return (
        <Container fluid="md" className="container" >
            <Row>
                <Col>
                    <Card className="registeration-card">
                        <h2>Register Admin</h2>

                        <>
                            <Form>

                                <Input
                                    label="Name"
                                    placeholder="Enter name"
                                    value=""
                                    type="text"
                                    className="custom-input"

                                />
                                <Input
                                    label="Email Address"
                                    placeholder="Enter email"
                                    value=""
                                    type="email"
                                    className="custom-input"

                                />
                                <Input
                                    label="Password"
                                    placeholder="Enter password"
                                    value=""
                                    type="password"
                                    className="custom-input"

                                />

                                <Input
                                    label="Confirm Password"
                                    placeholder="Confirm password"
                                    value=""
                                    type="password"
                                    className="custom-input"

                                />

                                <CustomButton title="Register here" className="registeration-button" />
                            </Form>
                        </>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;
