import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterPage = () => {
  return (
    <footer className="h-full bg-dark text-light">
      <Container className="p-4 d-flex align-items-center justify-content-center justify-content-center">
        
        <div>
          <Row>
            <Col md={2} className="p-3 align-item-center d-flex flex-column justify-content-around  ">
              <h5>Adres</h5>
              <div className="card-body w-100">
                <p className="card-text">Phone: +1 123-456-7890</p>
                <p className="card-text">Email: info@example.com</p>
              </div>
            </Col>
            <Col md={4} className="p-3 align-item-center d-flex flex-column justify-content-around ">
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
            </Col>
            <Col md={6} className="p-3 align-item-center d-flex flex-column justify-content-around  ">
              <h5>My Account</h5>
              <ul className="list-unstyled">
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
            </Col>
          </Row>
        </div>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} .All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
