import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import uniDefault from "../../assets/uni.jpg";
import HomeCardSlider from "./HomeCardSlider"
import "../Style/HomeCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogIn from "../Login/LogIn";


const HomeCard = ({ item , universityImage}) => {
  // State değerleri ve toggle fonksiyonları tanımlanıyor
  const [showSignInCompareModal, setShowSignInCompareModal] = useState(false);
  const toggleShowSignInCompareModal = () =>
    setShowSignInCompareModal(!showSignInCompareModal);
  const [showSignInHeartModal, setShowSignInHeartModal] = useState(false);
  const toggleShowSignInHeartModal = () =>
    setShowSignInHeartModal(!showSignInHeartModal);
    const departmentName = item?.university?.tr;
    const departmentImages = universityImage[departmentName] || [];

  return (
    <Container className="p-3  rounded-2 " style={{ position: "relative" }}>
      <Card className="cardBody rounded-2 " style={{ width: "100%", height: "25rem" }}>
      {departmentImages.length > 0 ?(  <div style={{ width: "100%", height: "60%" }}    >
        <HomeCardSlider images={departmentImages} />
       </div>):
       (<Card.Img
        variant="top"
        style={{ width: "100%" , borderRadius: "5px"  }}
        src={uniDefault}
        className="relative defaultimg "
      />)}
        <Button
          variant="light"
          size="lg"
          className="comp h-20 p-1 px-2 rounded-1 border-0 d-flex flex-nowrap"
          style={{ position: "absolute", top: "195px", right: "10px", color:"#0B3660" }}
          // className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
          type="submit"
          // variant="info"
          // variant="primary"
          // className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
          onClick={toggleShowSignInCompareModal}
        >
          <i
            className="fa-solid p-1 fa-rotate-right fa-md"
            style={{ color: "#017EFA" }}
          ></i>
          <span className="mx-1"></span>
          Compare {/* Add icon component here */}
          {/* <FaSignInAlt /> Sing In */}
        </Button>
        <Card.Body
          className="cardBody d-flex justify-content-between w-100 "
          style={{ height: "33%" }}
        >
          <div className=" left ">
          <Card.Title className=" text-start fs-6"
          >
              <Link
              key={item?.id}
              to={`/universities/${item.id}`}
                rel="noopener noreferrer"
                className="dep text-decoration-none"
                // onClick={scrollToTop}
              >
                   {item?.department?.en}
              </Link>
            </Card.Title>
            <Card.Title className="facul text-start  fs-6">
              <Link
                key={item.id}
                to={`/universities/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="dep text-decoration-none"
              >
                {item?.faculty?.en}
              </Link>
            </Card.Title>
            
            <Card.Text className="uni text-start text-muted">
        
              {item?.university?.en}
            </Card.Text>
          </div>
          <span className="mx-2"></span>
          <div className="right h-25  d-flex align-items-center justify-content-center p-2">
            <Button
              variant="light"
              size="lg"
              // className="h-20 p-1 px-2 rounded-1 border-0 d-flex flex-nowrap"
              style={{ position: "absolute", top: "190px", right: "10px" }}
              className="btn btn-outline-light  my-5 py-1 px-1 m-1 rounded-circle border-1  d-flex flex-nowrap"
              type="submit"
              // variant="info"
              // variant="primary"
              // className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
              onClick={toggleShowSignInHeartModal}
            >
              <i class="heart fa-solid fa-heart-circle-check" ></i>
            </Button>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush w-100">
          <ListGroup.Item>
            <div className="cardFot d-flex justify-content-between p-1 ">
              <div className="left d-flex flex-nowrap ">
                <i class="bi bi-geo-alt-fill "></i>
                <span className="mx-1"></span>
                {item?.city?.en}
              </div>
              <div className="right d-flex flex-nowrap">
                <i class="bi bi-cash"></i>
                <span className="mx-1"></span>
                /years
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* Modal componentleri tanımlanıyor */}
      <Modal
        show={showSignInCompareModal}
        onHide={toggleShowSignInCompareModal}
        centered
      >
        {/* LogIn componenti modalin içine yerleştiriliyor */}
        <LogIn />
      </Modal>
      {/* Modal componentleri tanımlanıyor */}
      <Modal
        show={showSignInHeartModal}
        onHide={toggleShowSignInHeartModal}
        centered
      >
        {/* LogIn componenti modalin içine yerleştiriliyor */}
        <LogIn />
      </Modal>
    </Container>
  );
};
export default HomeCard;
