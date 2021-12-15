import React from 'react';
import './Explore.css';

const Explore = ({explore}) => {
    const {name, price, description, img} = explore;
    return (
        <div className="explore">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Explore;