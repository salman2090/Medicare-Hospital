
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    return (
        <div className="register-form">
            <h2 className="mt-5 mb-3">Create Account</h2>
            <Form>
                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control  type="email" placeholder="Email" />
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

                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Re-enter-Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
            <Button className="mb-3" variant="primary outline-dark" value="submit">Submit</Button>{' '}
            <p>Already Have an Account? <Link to="login">Login</Link></p>
        </div>
    );
};

export default Register;