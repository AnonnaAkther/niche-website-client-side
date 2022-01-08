import React from 'react';
import AwesomeProducts from '../../AwesomeProducts/AwesomeProducts';
import Footer from '../../Footer/Footer';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <AwesomeProducts></AwesomeProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;