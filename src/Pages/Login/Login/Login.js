import React from 'react';
import { useState } from 'react';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {user,loginUser, loading, error} = useAuth();
    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="text-center">
            <h2 className="mt-5 mb-5 text-primary">Please Login</h2>
            <Form className="form" onSubmit={handleLoginSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                   Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control 
                    type="email" 
                    name="email"
                    onBlur={handleOnChange}
                    placeholder="Enter Email"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control 
                    type="password" 
                    name="password"
                    onBlur={handleOnChange}
                    placeholder="Password"/>
                    </Col>
                </Form.Group>
                <Button onClick={loginUser} className="bg-primary text-white button mt-3" type="submit">Login</Button>
                <NavLink 
                style={{textDecoration: 'none'}} 
                to="/register">
                <Button variant="link">New User? Please Register</Button>
                </NavLink>
            </Form>
            {loading && <Spinner animation="border" />}
        {user?.email && [
        'success'
        ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            Congrats! Your Login Successfully!
        </Alert>
        ))}
        {error && [
        'danger'
        ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            {error}
        </Alert>
        ))}
        </div>
    );
};

export default Login;