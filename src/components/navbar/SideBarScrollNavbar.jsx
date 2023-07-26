// HomePage.js
import React, { useContext, useEffect, useState } from "react";
import { Navbar, Offcanvas, Nav, Col, Button, Row, Modal, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import LogIn from "../Login/Logİn";
import Register from "../Login/Register";
import "./HomePage.css";
import { useAuthContext } from "../../context/AuthContext"; // AuthContext'u kullanmak için import edin.
import MyAccount from "../Dropdown/MyAccount";

const ScrollNavbar = () => {

  const {  currentUser,logout, login,register} = useAuthContext();



  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleShowSignInModal = () => setShowSignInModal(!showSignInModal);
  const toggleShowSignUpModal = () => setShowSignUpModal(!showSignUpModal);

  const location = useLocation();
  const [scrollBackground, setScrollBackground] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
// AuthContext'ten user bilgisini alın.
  const handleLogout = () => {
    logout(); // Logout işlemlerini gerçekleştirin ve kullanıcıyı state'ten çıkarın.
  };

  return (
    <>
      <Offcanvas
        show={sidebarOpen}
        onHide={toggleSidebar}
        placement="start"
        className="text-dark"
      >
        <Offcanvas.Header closeButton className="">
          {/* Add logo or title here */}
          {/* <Offcanvas.Title>TR-YöS</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="homeNavbar d-flex flex-column align-items-start fw-bold fs-6">

          <Row fluid id="navbarCollapse">
                <Col fluid>
                  <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "text-danger" : ""
              }`}
              href="/"
              aria-current="page"
            >
              HomePage
            </Link>
            <Link
              to="/universites"
              className={`nav-link ${
                location.pathname === "/universites" ? "text-danger" : ""
              }`}
              href="/universites"
              aria-current="page"
            >
              Universites
            </Link>
            <Link
              to="/departmants"
              className={`nav-link ${
                location.pathname === "/departmants" ? "text-danger" : ""
              }`}
              href="/departmants"
              aria-current="page"
            >
              Departmants
            </Link>
          
            {currentUser ? (
              <>
               <MyAccount/>
              </>
            ) : (
              <Row fluid id="navbarCollapse">
                <Col fluid>
                  <IconContext.Provider
                    value={{ size: "1.5em", color: "white" }}
                  >
                    <div className="navbarCollapse">
                      <Button
                        className="btn btn-outline-light my-1 m-3 flex-wrap"
                        type="submit"
                        variant="info"
                        onClick={toggleShowSignInModal}
                      >
                        <FaSignInAlt /> Sing In
                      </Button>{" "}
                    </div>
                  </IconContext.Provider>
                </Col>
              </Row>
            )}

                  </Col>
              </Row>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar
        bg={scrollBackground ? "light" : "dark"}
        variant={scrollBackground ? "light" : "dark"}
        expand="lg"
        fixed="top"
        className="homeNavbar text-dark fs-5"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-none d-lg-flex w-100 d-flex w-100 flex-wrap align-items-center justify-content-around style={{opacity: 0.5}} nav-bg ">
            <Row fluid id="navbarCollapse">
              <Col fluid>
                <div className="navbarCollapse d-none d-lg-flex w-100 d-flex w-100 flex-wrap align-items-center justify-content-around">
                  <Link
                    to="/"
                    className={`nav-link ${
                      location.pathname === "/" ? "text-danger" : ""
                    }`}
                    href="/"
                    aria-current="page"
                  >
                    HomePage
                  </Link>
                  <Link
                    to="/universites"
                    className={`nav-link ${
                      location.pathname === "/universites" ? "text-danger" : ""
                    }`}
                    href="/universites"
                    aria-current="page"
                  >
                    Universites
                  </Link>
                  <Link
                    to="/departmants"
                    className={`nav-link ${
                      location.pathname === "/departmants" ? "text-danger" : ""
                    }`}
                    href="/departmants"
                    aria-current="page"
                  >
                    Departmants
                  </Link>
                </div>
              </Col>
            </Row>

            <Row fluid id="navbarCollapse">
              <Col fluid>
                <IconContext.Provider
                  value={{ size: "1.5em", color: "white" }}
                >
                  <div className="navbarCollapse">
                    {!currentUser ? (
                      <>
                        <Button
                          className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
                          type="submit"
                          variant="info"
                          onClick={toggleShowSignInModal}
                        >
                          <FaSignInAlt /> Sing In
                        </Button>
                        <Button
                          className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
                          type="submit"
                          variant="primary"
                          onClick={toggleShowSignUpModal}
                        >
                          <FaUserPlus /> Sing Up
                        </Button>
                      </>
                    ) : (

                  <MyAccount />
                    )}
                  </div>
                </IconContext.Provider>
              </Col>
            </Row>
          </Nav>
          <div className="boxNavbar"></div>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        show={showSignInModal}
        onHide={toggleShowSignInModal}
        centered
        contentClassName="modal-content"
      >
        <LogIn />
      </Modal>

      <Modal show={showSignUpModal} onHide={toggleShowSignUpModal} centered>
        <Register />
      </Modal>
    </>
  );
};

export default ScrollNavbar;
