import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
     console.log(data);

    axios.post('http://localhost:5000/products', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Review Successfull');
            reset();

        };

        })
    }
    return (
        <div className="review">
            <h2 className="text-primary text-center">Please Review</h2>
            <form className="field" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;