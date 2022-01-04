import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Explore = ({explore}) => {
    const {name, price, description, img} = explore;
    return (
        <div className="explore">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <Link to="/cart"><button className="bg-warning m-5 p-3">Buy Now</button></Link>
        </div>
    );
};

export default Explore;