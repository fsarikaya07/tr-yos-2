import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [openScroll, setOpenScroll] = useState(false);

  const handleScroll = () => {
    // eğer sayfa yukarı kaydırılmışsa, openScroll değişkenini true olarak güncelle
    if (window.scrollY >= 0) {
      setOpenScroll(true);
    } else {
      // eğer sayfa en üstteyse, openScroll değişkenini false olarak güncelle
      setOpenScroll(false);
    }
  };

  // sayfa yüklenirken ve güncellenirken handleScroll fonksiyonunu çağır
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`mt-0  top-0 z-[100] w-100 opacity-100 shadow-lg ${
        openScroll
          ? "bg-white border-b fixed-top animate-fade-in"
          : "bg-white absolute"
      }`}
      expand="md"
      fixed="top"
    >
      <Container className="w-full md:container md:mx-auto mt-0 px-6 py-4 d-flex flex-wrap align-items-center flex-wrap opacity-75 justify-content-around justify-content-lg-start">
        {/* <Navbar.Brand href="#home">TR-YöS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar navbar-expand-md navbar-dark d-flex  justify-content-around fixed-top bg-dark">
            <Row className="" id="navbarCollapse">
              <Col>
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive && "red",
                      })}
                      to="/"
                      className="nav-link active"
                      href="#"
                      aria-current="page"
                    >
                      HomePage
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive && "red",
                      })}
                      to="/universites"
                      className="nav-link active"
                      href="#"
                      aria-current="page"
                    >
                      Universites
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive && "red",
                      })}
                      to="/departmants"
                      className="nav-link active"
                      href="#"
                      aria-current="page"
                    >
                      Departmants
                    </NavLink>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="" id="navbarCollapse">
              <Col>
                <div className="navbarCollapse">
                  <Link to="/login">
                    <Button
                      className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                      type="submit"
                    >
                      Sing In
                    </Button>
                  </Link>
                  <Link to="/logout">
                    <Button
                      className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                      type="submit"
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

export default MainPage;
