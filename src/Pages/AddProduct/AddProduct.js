import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
     console.log(data);

    axios.post('http://localhost:5000/products', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Successfully Added');
            reset();

        };

        })
    }
    return (
        <div className="addProduct">
            <h2 className="text-center text-primary">Please Add a Product</h2>
            <form className="field" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;