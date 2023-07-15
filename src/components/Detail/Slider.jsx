import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Style/Slider.css";

const Slider = ({ images }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoaded(true);
    }
  }, [images]);

  if (!isLoaded) {
    return <div>Loading...</div>; 
  }

  return (
    <Slide
      infinite={true}
      canSwipe={false}
      slidesToShow={2}
      slidesToScroll={1}
      prevArrow={
        <div className="icon-wrapper">
          <div className="icon-container">
            <i className="icon fas fa-chevron-left"></i>
          </div>
        </div>
      }
      nextArrow={
        <div className="icon-wrapper">
          <div className="icon-container">
            <i className="icon fas fa-chevron-right"></i>
          </div>
        </div>
      }
    >
      {images.map((image, index) => (
        <div className="each-slide-effect" key={index}>
          <div
            className="slide-image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
