import React, { useState } from 'react';
import './AwesomeProduct.css';
import icon1 from '../../icon/Global-Automotive-Trends.jpg';

const AwesomeProduct = ({product}) => {
    const [products, setProducts] = useState([]);
    const { price, description } = product;
    return (
        <div>
            <div 
            className="shadow-lg p-3 mb-5 bg-body rounded style"
            >
                <img src={icon1} alt="" />
                <h2>${price}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default AwesomeProduct;