import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FooterPage = () => {
  return (
    <footer className="bg-dark text-light  ">
      <Container className="p-4">
        <Row>
        
        <Col md={3} className="p-4 d-flex flex-column justify-content-center align-items-center ">
            <div className="card-body w-100 text-start ">
            <h5 className="mx-2">Adres</h5>
            <Button className="m-2 rounded-pill" ><p className="card-text">Phone: +1 123-456-7890</p></Button>
            <Button className="m-2 rounded-pill" ><p className="card-text">Email: info@example.com</p></Button>
            
          
            </div>
        
          </Col>
          <Col md={3} className="p-4 d-flex flex-column justify-content-center align-items-center ">
            <div className="card-body w-100 text-start">
            <h5>Navigations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#abaut us">About Us</a>
              </li>
              <li>
                <a href="#faqs page">FAQs Page</a>
              </li>
              <li>
                <a href="#services">Checkout</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
            </div>
          </Col>
          <Col md={6} className="p-4 d-flex flex-column justify-content-center align-items-center ">
            <div className="card-body w-100 text-start">
            <h5>My Account</h5>
            <ul  className="list-unstyled">

            
            <li>
                <a href="#myprofile">My Profile</a>
              </li>
              <li>
                <a href="#myaccount">My Account</a>
              </li>
              <li>
                <a href="#favorites">Favorites</a>
              </li>
        </ul>
        </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} .All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;


