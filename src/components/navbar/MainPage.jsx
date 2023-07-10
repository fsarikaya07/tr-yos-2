import React from "react";
import {  Button, Container, Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <Container
      id="navbar"
      className="d-flex flex-wrap align-items-center justify-content-around justify-content-lg-start"
    >
      <Nav className="navbar navbar-expand-md navbar-dark d-flex  justify-content-around fixed-top bg-dark ">
        <div className="" id="navbarCollapse">
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
        </div>
        <div className="">
          <Button
            className="btn btn-outline-light my-2 py-2 "
            type="submit"
          >
            Sing In
          </Button>
          <Button
            className="btn btn-outline-light my-2 py-2"
            type="submit"
          >
            Sing Up
          </Button>
        </div>
      </Nav>
      {/* <div className=" mt-0 px-6 py-2"></div> */}
    </Container>
  );
};

export default MainPage;