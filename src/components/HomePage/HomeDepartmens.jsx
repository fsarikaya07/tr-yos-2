import React from "react";
import { data } from "../../helper/data";
import HomeCard from "./HomeCard";
import { Col, Container, Row } from "react-bootstrap";

const HomeDepartmens = () => {
  return (
    // <div>
    //   {data.map((item)=> <HomeCard{...item}/>)}
    // </div>

    <Container className="rounded-4 mt-4 p-4 ">
      <h1 className="my-2 text-center" style={{ color: "#16193B" }}>
        {" "}
        <strong> Our Departments</strong>
      </h1>

      <h6 className="text-center" style={{ color: "#B2BEBF" }}>
        Our Departments Our Departments Our Departments
      </h6>

      <Row className="g-3 d-flex flex-wrap">
        {data.map((item) => {
          return (
            <Col sm={6} md={6} lg={4}>
              <HomeCard {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeDepartmens;
