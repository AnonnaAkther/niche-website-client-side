import { Button } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import './MakeAdmin.css';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                alert('Make Admin Successfully');
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className="text-center text-primary">Please Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <input
            className="inputGroup"  
            placeholder="Enter Email"
            type="email" 
            />
                <Button 
                className="btn btn-primary text-white"
                type="submit" 
                onBlur={handleOnBlur}
                >
               Make Admin
                </Button>
            </form>
        </div>
    );
};

export default MakeAdmin;