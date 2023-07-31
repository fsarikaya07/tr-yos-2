import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Style/Slider.css";

const Slider = ({ images }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    if (images.length > 0) {
      setIsLoaded(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="infoDiv mt-5 p-4 mb-0 bg-primary text-white" >
      </div>
      <Slide
        infinite={true}
        canSwipe={false}
        slidesToShow={windowSize < 576 ? 1 : 2}
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
    </div>
  );
};

export default Slider;
