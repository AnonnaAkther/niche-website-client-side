import React from 'react'; 
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
       <div id="products">
           <h2 className="text-success text-center mb-5 mt-5">Our Products</h2>
            <div className="product-container">
            {
                products.map(product => <Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
       </div>
    );
};

export default Products;