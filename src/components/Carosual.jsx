import React from "react";
import Slider from "react-slick";
import {
  Container
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/1st-img.jpg";
import img2 from "../images/2nd img.jpg";
import img3 from "../images/3rd img.jpg";
import img4 from "../images/4th img.jpg";

const Carosual = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const images = [img1, img2, img3, img4, img2, img3]; // Include images for the carousel

  return (
    <Container maxWidth="xl" sx={{ mt: 2, mb: 5 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img src={image} alt="carosual images"  key={index}></img>
        ))}
      </Slider>
    </Container>
  );
};

export default Carosual;
