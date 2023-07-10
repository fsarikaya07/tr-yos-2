import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const MainPage = () =>  {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex flex-wrap align-items-center opacity-75 justify-content-around justify-content-lg-start">
        {/* <Navbar.Brand href="#home">TR-YöS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar navbar-expand-md navbar-dark d-flex  justify-content-around fixed-top bg-dark">
          <Row className="" id="navbarCollapse">
          <Col><ul className="navbar-nav ">
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
            <Button className="btn btn-outline-light my-2 py-2 m-1 " type="submit">
              Sing In
            </Button>
          </Link>
          <Link to="/logout">
            <Button className="btn btn-outline-light my-2 py-2 m-1" type="submit">
              Sing Up
            </Button>
          </Link>
        </div>
</Col>
        </Row>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainPage;