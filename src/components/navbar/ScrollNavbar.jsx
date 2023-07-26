

// State değeri ve toggle fonksiyonu tanımlanıyor
import React, { useState } from "react";
import { Navbar, Container, Nav, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogIn from "../Login/Logİn";
import Register from "../Login/Register";
// import "./HomePage.css";

const ScrollNavbar = () => {
  // State değerleri ve toggle fonksiyonları tanımlanıyor
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleShowSignInModal = () => setShowSignInModal(!showSignInModal);
  const toggleShowSignUpModal = () => setShowSignUpModal(!showSignUpModal);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="homeNavbar text-dark"
    >
      <Container
        fluid
        className="w-full md:container md:mx-auto mt-0 px-6 py-4 d-flex flex-wrap align-items-center flex-wrap opacity-75 justify-content-around justify-content-lg-start"
      >
        {/* <Navbar.Brand href="#home">TR-YöS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 flex-wrap align-items-center opacity-75 justify-content-around  ">
            <Row fluid id="navbarCollapse">
              <Col fluid>
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <Link
                      to="/"
                      href="/"
                      aria-current="page"
                    >
                      HomePage
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row fluid id="navbarCollapse">
              <Col fluid>
              <div className="navbarCollapse">           
                  {/* Butonlara onClick propu olarak toggle fonksiyonları veriliyor */}
                  <Button
                    variant="primary"  className="signIn btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                    type="submit"
                    onClick={toggleShowSignInModal}
                    
                  >
                    Sing In
                  </Button>      
                  <Button
                    variant="primary"  className="signUp btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                    type="submit"
                    onClick={toggleShowSignUpModal}
                    
                  >
                    Sing up
                  </Button>            
                </div>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Modal componentleri tanımlanıyor */}
      <Modal show={showSignInModal} onHide={toggleShowSignInModal} centered>
        {/* LogIn componenti modalin içine yerleştiriliyor */}
        <LogIn />
      </Modal>

      <Modal show={showSignUpModal} onHide={toggleShowSignUpModal} centered>
        {/* Register componenti modalin içine yerleştiriliyor */}
        <Register />
      </Modal>

    </Navbar>
  );
};
export default ScrollNavbar;



const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  
    <Navbar
      expand="lg"
      fixed="top"
      className="homeNavbar text-dark"
    >
      
      {/* Modal componenti tanımlanıyor */}
      <Modal show={showModal} onHide={toggleShowModal} centered>
        {/* LogIn componenti modalin içine yerleştiriliyor */}
        <LogIn />
      </Modal>

    </Navbar>

