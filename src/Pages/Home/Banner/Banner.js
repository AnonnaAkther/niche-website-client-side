import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../carbanner/1000_F_226226301_6fhlipxkaQQl2RS2HryvyaDudgMbnRnj.jpg';
import banner2 from '../../../carbanner/1000_F_341790400_dQmYianNGDNExL7aHH5Q2XwskeCd7jka.jpg';
import banner3 from '../../../carbanner/240_F_333833532_as00fYgmQ8vfsDAGuCe5t0Avnc2VQ7nr.jpg';

const Banner = () => {
    return (
        <>
           <Carousel className="banner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel> 
        </>
    );
};

export default Banner;