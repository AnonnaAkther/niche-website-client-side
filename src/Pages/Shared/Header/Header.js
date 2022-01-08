import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

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
            <Link style={{paddingRight: '10px', textDecoration: 'none'}} to="/addProduct">AddProduct</Link>
            <Link style={{paddingRight: '10px', textDecoration: 'none'}} to="/manageProducts">Manage Products</Link>
            <Nav.Link style={{paddingRight: '10px', textDecoration: 'none'}} to="/home#review">Review</Nav.Link>
            <Link style={{paddingRight: '10px', textDecoration: 'none'}} to="/explore">Explore</Link>
                {user?.email ?
                <div>
                  <NavLink as={Link} to="/dashboard">Dashboard</NavLink>
                  <Button onClick={logout} variant="primary">Logout</Button>
                  </div>:
                  <NavLink as={Link} to="/login">Login</NavLink>
                  }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;