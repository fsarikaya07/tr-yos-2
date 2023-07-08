import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import "../Style/Carousel_Detail.css"

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pexels.com/v1/search?query=university+education", {
        headers: {
          Authorization:
            "jSTPFVvp32B2JQtsEthjhm2ibITpE2OBuPjAoZaZiogsEsu66IzQodP0",
        },
      })
      .then((response) => {
        const imageUrls = response.data.photos.map((photo) => photo.src.large);
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

    <Slide infinite={true} canSwipe={false} slidesToShow={2} slidesToScroll={1}

      prevArrow={<div className="icon-wrapper"><div className="icon-container"><i className="icon fas fa-chevron-left"></i></div></div>}

      nextArrow={<div className="icon-wrapper"><div className="icon-container"><i className="icon fas fa-chevron-right"></i></div></div>}>

      {images.map((image, index) => (
        <div className="each-slide-effect" key={index}>
          <div
            className="slide-image"
            style={{
              backgroundImage: `url(${image})`,
            }}></div>
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
