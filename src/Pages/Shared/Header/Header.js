import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MediCare Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={Link} to="/specialists" className="text-white">Specialists</Nav.Link>
                        <Nav.Link as={Link} to="/visitus" className="text-white">Visit Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;