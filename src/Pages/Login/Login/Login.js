import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const {signInUsingGoogle,handlgeEmailChange,handlgePasswordChange,handleLogin, error} = useAuth();

  
    return (
        <div>
            <h2 className="mt-3 mb-3">{error}</h2>
            <h2 className="mt-5">Please Login</h2>
            <Form >
                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onChange={handlgeEmailChange} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onBlur={handlgePasswordChange} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button className="mb-3" variant="primary outline-dark" onClick={handleLogin} value="submit">Login</Button>{' '}
            </Form>
            <p>New to MediCare Hospital? <Link to="/register">Create Account</Link></p>

            
            <h5 className="mt-5">Click on the beneath button for Google Sign In</h5>
            <button onClick={signInUsingGoogle} className="btn btn-warning login-form mt-3 mb-5">Google Sign In</button>
        </div>
    );
};

export default Login;