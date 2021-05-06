import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

import {
    Row,
    Col,
    Container,
    Card,
    Form,
    Button
} from 'react-bootstrap';

import { Input, CustomButton } from '../../components/index';

const Login = () => {


    const [google, setGoogleLogin] = useState([]);


    const loginWithGoogle = async () => {

        try {
            await axios.post('http://localhost:4000/auth/google')
                .then((data) => {

                    let result = data.json();
                    console.log(JSON.stringify(result));
                })
                .catch(err => {
                    console.error(err);
                });
        } catch (e) {
            console.log("E :" + e);
        }

    };
    return (
        <Container fluid="md" className="container" >
            <Row>
                <Col>
                    <Card className="login-card">
                        <h2>Login User</h2>

                        <>
                            <Form >
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
                                &nbsp;
                                <p>Forgot Password?&nbsp;<span>Click to reset</span></p>

                                <div className="auth-container">
                                    <CustomButton
                                        title="Login user"
                                        className="login-button" />

                                    <CustomButton title="Sign in with google" className="google-button" handler={loginWithGoogle} />
                                </div>

                            </Form>
                        </>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
