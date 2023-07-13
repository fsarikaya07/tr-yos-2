import React, { useEffect, useState } from "react";
import { Navbar, Offcanvas, Nav, Col, Button, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons"; // import IconContext component
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // import icons you want
// import "../HomePage.css"


const ScrollNavbar = () => {
  const location = useLocation();
  const [scrollBackground, setScrollBackground] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // state variable for sidebar visibility

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
      // close sidebar if screen width is larger than 768px
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
    // toggle sidebar state
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Sidebar component */}
      <Offcanvas
        show={sidebarOpen} // show prop controls visibility
        onHide={toggleSidebar} // onHide prop calls toggle function
        placement="start" // placement prop sets position
        className="homeNavbar text-dark"
      >
        <Offcanvas.Header closeButton className="">
          {/* Add logo or title here */}
          {/* <Offcanvas.Title>TR-YöS</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add list of links here */}
          <Nav className="d-flex flex-column align-items-start fw-bold fs-6">
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

            <Row fluid id="navbarCollapse">
        <Col fluid>
          {/* Add IconContext.Provider component here */}
          <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
            {/* set size and color for icons */}
            <div className="navbarCollapse">
              <Link to="/login">
                <Button
                  className="btn btn-outline-light  my-1 py-1 px-3 m-3 flex-wrap"
                  type="submit"
                  variant="info"
                >
                  {/* Add icon component here */}
                  <FaSignInAlt /> Sing In
                </Button>
              </Link>
             
            </div>
          </IconContext.Provider>
        </Col>
      </Row>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Navbar component */}
      <Navbar
        bg={scrollBackground ? "light" : "dark"}
        variant={scrollBackground ? "light" : "dark"}
        expand="lg"
        fixed="top"
        className="homeNavbar text-dark fs-5"
      >
        {/* Add Navbar.Brand component here */}
         {/* <Navbar.Brand href="#home"> */}
    {/* Add img element here */}
    {/* <img
      src="../logo/OIG.jpeg" // change this to your image source
      alt="Logo" // change this to your alternative text
      width="30" // change this to your desired size
      className="logo" // add a class name for styling
    /> */}
  {/* </Navbar.Brand>  */}
        {/* <Navbar.Brand href="#home">TR-YöS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar}>
          {/* Add toggle button here */}
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Hide navbar links on small screens */}
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
          {/* Add IconContext.Provider component here */}
          <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
            {/* set size and color for icons */}
            <div className="navbarCollapse">
              <Link to="/login">
                <Button
                  className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
                  type="submit"
                  variant="info"
                >
                  {/* Add icon component here */}
                  <FaSignInAlt /> Sing In
                </Button>
              </Link>
              <Link to="/logout">
                <Button
                  className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
                  type="submit"
                  variant="primary"
                >
                  {/* Add icon component here */}
                  <FaUserPlus /> Sing Up
                </Button>
              </Link>
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default ScrollNavbar;
