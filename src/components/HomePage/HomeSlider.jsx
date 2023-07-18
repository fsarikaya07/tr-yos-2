import { Zoom } from "react-slideshow-image";

const HomeSlider = () => {
    return (
   
  <Zoom
    indicators
   scale={1.4}
  >
    
        <div
          className="slide-image"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "100vh",
          }}
        ></div>
        <div>
          <div
            className="slide-image"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/5940838/pexels-photo-5940838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              minHeight: "100vh",
            }}
          ></div>
        </div>
  
        <div
          className="slide-image"
          style={{
            backgroundImage:
            "url(https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "100vh",
          }}
        ></div>
              <div
          className="slide-image"
          style={{
            backgroundImage:
            "url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "100vh",
          }}
        ></div>
  
      </Zoom>
    );
  };
  
  export default HomeSlider;
  