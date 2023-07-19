import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Style/Departmants.css";

const DepertmentsCard = ({ image, title, desc, cities, years }) => {
  // State değerleri ve toggle fonksiyonları tanımlanıyor
  const [showSignInCompareModal, setShowSignInCompareModal] = useState(false);

  const toggleShowSignInCompareModal = () =>
    setShowSignInCompareModal(!showSignInCompareModal);
  const [showSignInHeartModal, setShowSignInHeartModal] = useState(false);

  const toggleShowSignInHeartModal = () =>
    setShowSignInHeartModal(!showSignInHeartModal);

  return (
    <Container className="p-1  rounded-2 " style={{ position: "relative" }}>
      <Card style={{ width: "100%", height: "25rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "60%" }}
          src={image}
          className="relative"
        />
        <button
          className=" h-20 p-1 px-2 bg-light  rounded-3 border-0 d-flex flex-nowrap"
          style={{ position: "absolute", top: "190px", right: "10px" }}
          variant="light"
          size="lg"
      
          // style={{ position: "absolute", top: "190px", right: "10px" }}
          // className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
          type="submit"
          // variant="info"
          // variant="primary"
          // className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
          onClick={toggleShowSignInCompareModal}
        >
          <i
            className="fa-solid p-1 fa-rotate-right fa-md"
            style={{ color: "blue" }}
          ></i>
          <span className="mx-1"></span>
          Compare {/* Add icon component here */}
          {/* <FaSignInAlt /> Sing In */}
        </button>
        <Card.Body className="d-flex w-100 justify-content-between">
          <div className="left ">
            <Card.Title className="text-start text-primary fs-6">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-bold"
              >
                {title}
              </a>
            </Card.Title>
            <Card.Text className="desc text-start text-muted">{desc}</Card.Text>
          </div>
          <div className="h-25 d-inline-flex align-items-center justify-content-center p-2">
            <Button
              variant="light"
              size="lg"
              // className="h-20 p-1 px-2 rounded-1 border-0 d-flex flex-nowrap"
              style={{ position: "absolute", top: "190px", right: "10px" }}
              className="btn btn-outline-light my-5 py-1 px-1 m-1 rounded-1 border-0 d-flex flex-nowrap"
              type="submit"
              // variant="info"
              // variant="primary"
              // className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
              onClick={toggleShowSignInHeartModal}
            >
              <i class="bi bi-heart-fill" style={{ color: "blue" }}></i>
            </Button>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush w-100 ">
          <ListGroup.Item>
            <div className="d-flex text-info  justify-content-between p-1 ">
              <div className="left d-flex  flex-nowrap ">
                <i class="bi bi-geo-alt-fill "></i>
                <span className="mx-2"></span>

                {cities}
              </div>
              <div className="right d-flex flex-nowrap">
                <i class="bi bi-cash"></i>
                <span className="mx-2"></span>
                {years}
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
export default DepertmentsCard;
