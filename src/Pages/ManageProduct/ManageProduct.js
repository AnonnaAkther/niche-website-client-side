import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageProduct.css';

const ManageProduct = ({product}) => {
    const [products, setProducts] = useState([]);
    const {_id, name, price, description, img} = product;
    const handleRemove = id => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Are You Sure, You Want To Delete Now')
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
        })

    }
    return (
        <div className="manageProduct">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to='/cart'><button className="btn btn-primary">Buy Now</button></Link>
            <button onClick={() => handleRemove(product._id)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Remove
                </button>
        </div>
    );
};

export default ManageProduct;