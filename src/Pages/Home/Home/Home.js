import React from 'react';
import Explored from '../../Explored/Explored';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Explored></Explored>

        </div>
    );
};

export default Home;