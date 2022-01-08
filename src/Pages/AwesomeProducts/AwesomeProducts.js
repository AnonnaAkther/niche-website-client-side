import React, { useEffect } from 'react';
import { useState } from 'react';
import AwesomeProduct from '../AwesomeProduct/AwesomeProduct';

const AwesomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h2 className="text-center text-primary mb-5 mt-5">Our Awesome Products</h2>
            {
                products.map(product => <AwesomeProduct
                    key={product._id}
                    product={product}
                >
                </AwesomeProduct>)
            }
        </div>
    );
};

export default AwesomeProducts;