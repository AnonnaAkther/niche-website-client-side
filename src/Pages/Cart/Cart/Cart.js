import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Cart.css';

const Cart = () => {
  const {user} = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  },[])
    return (
        <div className="cart">
            <h2>Your Email: {user.email}</h2>
            <h2>Your Name: {user.displayName}</h2>
            <h2>Your ProviderId: {user.providerId}</h2>
            <h2>CreatedAt: {user.metadata.createdAt}</h2>
            <h2>creationTime: {user.metadata.creationTime}</h2>
            <h2>lastSignInTime: {user.metadata.lastSignInTime}</h2>
            <Link to="/"><Button className="btn btn-primary button">Order Place</Button></Link>
        </div>
    );
};

export default Cart;