import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    
    return (
        <div>
            <h2 className="mt-5">Please Login</h2>
            <Form>
                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button className="mb-3" variant="primary outline-dark" value="submit">Submit</Button>{' '}
            </Form>
            <p>New to MediCare Hospital? <Link to="/register">Create Account</Link></p>

            
            <h5 className="mt-5">Click on the beneath button for Google Sign In</h5>
            <button onClick={signInUsingGoogle} className="btn btn-warning login-form mt-3 mb-5">Google Sign In</button>
        </div>
    );
};

export default Login;