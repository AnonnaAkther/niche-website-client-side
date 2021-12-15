import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../notfound/not found page.webp';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="text-center">
            <img src={notfound} alt="" />
            <div>
            <Link to="/"><button className="bg-warning mt-3">Back To Home</button></Link>
            </div>
        </div>
       
    );
};

export default NotFound;