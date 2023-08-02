import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Style/HomeCardSlider.css";

const Slider = ({ images }) => {
  return (
    <div className="slide-container">
      <Slide
        // infinite={true}
        canSwipe={false}
        autoplay={false}
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={
          <div className="">
            <div className="icon-container">
              <i className="icon fas fa-chevron-left"></i>
            </div>
          </div>
        }
        nextArrow={
          <div className="">
            <div className="icon-container">
              <i className="icon fas fa-chevron-right"></i>
            </div>
          </div>
        }
      >
        {images.map((image, index) => (
          <div key={index} className="each-slide">
            <div
              className="slide-images1"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
