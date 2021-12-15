import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name, price, description, img} = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to="/cart"><button className="bg-warning m-5 p-3">Buy Now</button></Link>
        </div>
    );
};

export default Product;