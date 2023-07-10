import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Route, Router } from "react-router";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <>
      <Container
        id="navbar"
        className="d-flex flex-wrap align-items-center justify-content-around justify-content-lg-start"
      >
        <Nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link" href="#">
                  HomePage
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Universites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Departments
                </a>
              </li>
            </ul>
          <div className="">
            <Button className="btn btn-outline-light my-2 py-2 " type="submit">
              Sing In
            </Button>
            <Button className="btn btn-outline-light my-2 py-2" type="submit">
              Sing Up
            </Button>
          </div>
          </div>
          
        </Nav>
      </Container>
    </>
  );
};

export default MobileMenu;
