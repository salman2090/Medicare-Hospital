
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const {handleRegistration, handlgeEmailChange,handlgePasswordChange,signInUsingGoogle,handleName, error}=useAuth();

    return (
        <div className="register-form">
            <h2 className="mt-3 mb-3">{error}</h2>
            <h2 className="mt-5 mb-3">Create Account</h2>
            <Form >
                <Form.Group as={Row} className="login-form mb-3 w-50" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control onBlur={handleName} type="text" placeholder="Name" />
                    </Col>
                </Form.Group>

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
                <Button className="mb-3" variant="primary outline-dark" onClick={handleRegistration} value="submit">Submit</Button>{' '}
            </Form>
            
            <p>Already Have an Account? <Link to="login">Login</Link></p>
        </div>
    );
};

export default Register;