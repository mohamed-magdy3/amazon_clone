import React from "react";

import Carousel from "react-bootstrap/Carousel";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

// src={require('../images/banner1.jpg')}

const HeaderSlider = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="slider">
        <img
          className="d-block w-100 img-slider"
          src={require('../images/banner1.jpg')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slider"
          src={require('../images/banner2.jpg')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slider"
          src={require('../images/banner3.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slider"
          src={require('../images/banner4.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slider"
          src={require('../images/banner5.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    // <MDBCarousel showIndicators showControls fade>
    //   <MDBCarouselItem
    //     className="w-100 d-block"
    //     itemId={1}
    //     src={require('../images/banner1.jpg')}
    //     alt="..."
    //   >
       
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className="w-100 d-block"
    //     itemId={2}
    //     src={require('../images/banner2.jpg')}
    //     alt="..."
    //   >
 
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className="w-100 d-block"
    //     itemId={3}
    //     src={require('../images/banner3.jpg')}
    //     alt="..."
    //   >
    //   </MDBCarouselItem>
    //   <MDBCarouselItem
    //     className="w-100 d-block"
    //     itemId={3}
    //     src={require('../images/banner4.jpg')}
    //     alt="..."
    //   >
    //   </MDBCarouselItem>
    // </MDBCarousel>
  );
};

export default HeaderSlider;
