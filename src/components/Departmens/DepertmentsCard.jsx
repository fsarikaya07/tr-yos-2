import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Style/Departmants.css";
import { Link } from "react-router-dom";
const DepertmentsCard = ({ image, title, desc, cities, years }) => {
  return (
    <Container className="p-1  rounded-2 " style={{ position: "relative" }}>
      <Card style={{ width: "100%", height: "25rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "60%" }}
          src={image}
          className="relative"
        />
       <Link to="/login"> 
          <button
          className=" h-20 p-1 px-2 bg-light  rounded-3 border-0 d-flex flex-nowrap"
          style={{ position: "absolute", top: "190px", right: "10px" }}
        >
          <i

            className="fa-solid fa-rotate-right fa-spin fa-md p-1 "
            style={{ color: "blue" }}
          >
            
          </i>
          <span className="mx-1"></span>
          Compare
        </button>
       </Link>
     
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
          <Link to="/login"> 
         <div className="h-25 d-inline-flex align-items-center justify-content-center p-2">
            <i class="bi bi-heart-fill" style={{ color: "blue" }}></i>
          </div>
       </Link>
        
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
    </Container>
  );
};
export default DepertmentsCard;
