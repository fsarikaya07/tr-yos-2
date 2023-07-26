import React from "react";

import HomeCard from "./HomeCard";
import { Col, Container, Row } from "react-bootstrap";
import { useYosContext } from "../../context/Context";

const HomeDepartmens = () => {
  const { universities, card, setCompare, compare, user } = useYosContext();
  const shuffledCards = card.sort(() => 0.5 - Math.random());
  const random12Cards = shuffledCards.slice(0, 12);

  const universityImages = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university.tr] = university.images;
    }
    return map;
  }, {});

 
 

  return (
    // <div>
    //   {data.map((item)=> <HomeCard{...item}/>)}
    // </div>

    <Container className="rounded-4 mt-4  ">
      <h1 className="my-2 text-center" style={{ color: "#16193B" }}>
        {" "}
        <strong> Our Departments</strong>
      </h1>

      <h6 className="text-center" style={{ color: "#B2BEBF" }}>
        Our Departments Our Departments Our Departments
      </h6>

      <Row className="g-1 d-flex flex-wrap">
        {random12Cards?.map((item, index) => {
          return (
            <Col xs={12} md={6} lg={4} xl={4} key={item.id}>
              <HomeCard
                item={item}
                universityImage={universityImages}
                
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeDepartmens;
