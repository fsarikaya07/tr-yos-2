import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./HomePage.css";

const ScrollNavbar = () => {
  const location = useLocation();
  const [scrollBackground, setScrollBackground] = useState(false);

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

  return (
    <Navbar
      bg={scrollBackground ? "light" : "dark"} // Scroll yapıldığında background rengini değiştiriyoruz
      variant={scrollBackground ? "light" : "dark"}
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
                      className={`nav-link ${
                        location.pathname === "/" ? "text-danger" : "" // Eğer sayfa adresi "/" ise, Link bileşenine text-warning sınıfını ekle
                      }`}
                      href="/"
                      aria-current="page"
                    >
                      HomePage
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/universites"
                      className={`nav-link ${
                        location.pathname === "/universites"
                          ? "text-danger"
                          : "" // Eğer sayfa adresi "/universites" ise, Link bileşenine text-red-500 sınıfını ekle
                      }`}
                      href="/universites"
                      aria-current="page"
                    >
                      Universites
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/departmants"
                      className={`nav-link ${
                        location.pathname === "/departmants"
                          ? "text-danger"
                          : "" // Eğer sayfa adresi "/departmants" ise, Link bileşenine text-red-500 sınıfını ekle
                      }`}
                      href="/departmants"
                      aria-current="page"
                    >
                      Departmants
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row fluid id="navbarCollapse">
              <Col fluid>
                <div className="navbarCollapse">
                  <Link to="/login">
                    <Button
                      className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                      type="submit"
                      variant="info"
                    >
                      Sing In
                    </Button>
                  </Link>
                  <Link to="/logout">
                    <Button
                      className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                      type="submit"
                      variant="primary"
                    >
                      Sing Up
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ScrollNavbar;
