import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, loading, error} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(field, newLoginData);
        setLoginData(newLoginData);
    }
    
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.confirmPassword){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="text-center">
        <h2 className="mt-5 mb-5 text-primary">Please Register</h2>
        {!loading && <Form className="form" onSubmit={handleLoginSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
               Name
                </Form.Label>
                <Col sm="10">
                <Form.Control 
                type="name" 
                name="name"
                onBlur={handleOnBlur}
                placeholder="Your Name"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
               Email
                </Form.Label>
                <Col sm="10">
                <Form.Control 
                type="email" 
                name="email"
                onBlur={handleOnBlur}
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
                onBlur={handleOnBlur}
                placeholder="Password"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Confirm Password
                </Form.Label>
                <Col sm="10">
                <Form.Control 
                type="password" 
                name="confirmPassword"
                onBlur={handleOnBlur}
                placeholder="Confirm Your Password"/>
                </Col>
            </Form.Group>
            <Button className="bg-primary text-white button mt-3" type="submit">Register</Button>
            <NavLink 
            style={{textDecoration: 'none'}} 
            to="/login">
            <Button variant="link">Already Register? Please Login</Button>
            </NavLink>
        </Form>}
        {loading && <Spinner animation="border" />}
        {user?.email && [
        'success'
        ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            Congrats! We are created you!
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

export default Register;