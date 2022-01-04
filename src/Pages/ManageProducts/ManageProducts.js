import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h2 className="text-center">Manage Products</h2>
            {
                products.map(product => <ManageProduct
                    key={product._id}
                    product={product}
                >
                </ManageProduct>)
            }
        </div>
    );
};

export default ManageProducts;