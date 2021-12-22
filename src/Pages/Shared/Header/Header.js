import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logout} = useAuth();
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top">
          <Container>
          <Navbar.Brand href="#home">Car Sales</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home#products">Products</Nav.Link>
            <Link to="/explored">Explored</Link>
                {user?.email ?
                  <Button onClick={logout} variant="primary">Logout</Button>:
                  <NavLink as={Link} to="/login">Login</NavLink>
                  }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;