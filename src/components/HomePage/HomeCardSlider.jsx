import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Style/HomeCardSlider.css";

const Slider = ({images}) => {
  // const slideImages = [
  //   "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];

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
              className="slide-image"          style={{
                backgroundImage: `url(${image})`,
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center center",
               
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;

