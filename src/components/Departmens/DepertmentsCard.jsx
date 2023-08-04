import { useContext } from "react";
import { useYosContext } from "../../context/Context";
import { useTranslation } from "react-i18next";
import "../Style/Departmants.css";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";


const DepartmentsCard = ({ item }) => {
  const { universities, departments, card } = useYosContext();
  const { t } = useTranslation();

 
  const universityImagesMap = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university?.en] = university.images.slice(0, 12);
    }
    return map;
  }, {});

  const { city, university, department, faculty } = item;
  const departmentImages = universityImagesMap[university?.en] || [];

  return (
    <Container className="p-1 rounded-2  ">
 
      <Card key={university.id} style={{ width: "100%", height: "25rem" }}>
        <div className="img" style={{ width: "100%", height: "60%" }}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            dynamicHeight={true}
            infiniteLoop={true}
            className="slide-image"
          >
            {departmentImages.map((image, index) => (
              <Carousel.Item key={index}>
                <Card.Img
                  className="defaultimg"
                  variant="top"
                  style={{
                    width: "100%",
                    height: "229.609px",
                    position: "relative",
                    borderRadius: "5px",
                  }}
                  src={image}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <button
          className="h-20 p-1 px-2 bg-light rounded-3 border-0 d-flex flex-nowrap"
          style={{
            position: "absolute",
            top: "195px",
            right: "10px",
            color: "#0B3660",
          }}
        >
          <i
            className="fa-solid fa-rotate-right fa-md p-1"
            style={{ color: "#017EFA" }}
          ></i>
          <span className="mx-1"></span>
          {t("departmentsCard.compare")}
        </button>
        <Card.Body
          className="cardBody d-flex w-100 justify-content-between"
          style={{ height: "33%" }}
        >
          <div className="left ">
            <Card.Title className="text-start  fs-6">
              <Link
                to={`/universities/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="dep text-decoration-none text-bold"
              >
                {item.department.en}
              </Link>
            </Card.Title>
            <Card.Title className="facul text-start  fs-6">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="dep text-decoration-none text-bold"
              >
                {item.faculty.en}
              </a>
            </Card.Title>
            <Card.Text className="uni text-start text-muted">
              {item.university?.en}
            </Card.Text>
          </div>{" "}
          <span className="mx-2"></span>
        
          <Button
            variant="light"
            size="lg"
           
            style={{ position: "absolute", top: "190px", right: "10px" }}
            className="btn btn-outline-light  my-5 py-1 px-1 m-1 rounded-circle border-1  d-flex flex-nowrap"
            type="submit"
           
          >
            <i class="heart fa-solid fa-heart-circle-check"></i>
          </Button>
        </Card.Body>
        <ListGroup className="list-group-flush w-100">
          <ListGroup.Item>
            <div className="cardFot  d-flex  justify-content-between p-1">
              <div className="left d-flex flex-nowrap">
                <i className="bi bi-geo-alt-fill"></i>
                <span className="mx-1"></span>
                {item.city?.en}
              </div>
              <div className="right d-flex flex-nowrap">
                <i className="bi bi-cash"></i>
                <span className="mx-1"></span>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    
    </Container>
  );
};

export default DepartmentsCard;
