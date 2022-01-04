import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="link bg-primary text-center text-white">
            <h2>Our Products Link</h2>
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/home">Home</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/home/products">Products</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/addProduct">AddProduct</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/manageProducts">ManageProducts</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/review">Review</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/explore">Explore</Link>
            <br />
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/home">Home</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/products">Products</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/addProduct">AddProduct</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/manageProducts">ManageProducts</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/review">Review</Link>
            <br />
            <Link style={{textDecoration: 'none', color: 'white', marginLeft: '150px'}} to="/explore">Explore</Link>
        </div>
    );
};

export default Footer;