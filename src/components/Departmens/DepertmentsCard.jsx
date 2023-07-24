import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Style/Departmants.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import defaultImg from "../../assets/uni.jpg";
import { Carousel } from "react-responsive-carousel";

const DepertmentsCard = ({
  universities,
  cities,
  departments,
  selectedCities,
  selectedUniversities,
  selectedDepartments,
}) => {
  const filterUniversitiesByCity = (cityId) => {
    return universities.filter((university) => university.city === cityId);
  };

  const cityMatches = selectedCities.some((selectedCity) => selectedCity?.value);
  const universityMatches = selectedUniversities.some((selectedUniversity) => selectedUniversity?.value);
  const departmentMatches = selectedDepartments.some((selectedDepartment) => selectedDepartment?.value);

  // Eşleşmeyen cardların yerine eşleşme olan cardları basmak için matchedItems'i burada tanımlayalım.
  let matchedItems = [];

  if (cityMatches || universityMatches || departmentMatches) {
    const selectedCityIds = selectedCities.map((city) => city.value);
    const selectedUniversityIds = selectedUniversities.map((university) => university.value);

    const filteredCities = cities.filter((city) => selectedCityIds.includes(city.id));

    filteredCities?.forEach((city) => {
      const universitiesInCity = filterUniversitiesByCity(city.id);
      const universitiesInCityAndUniversity = universitiesInCity.filter((university) => selectedUniversityIds.includes(university.code));
      
      universitiesInCityAndUniversity.forEach((university) => {
        selectedDepartments?.forEach((selectedDepartment) => {  // Her seçilen department için eşleşme kontrolü yapalım
          const department = departments.find((department) => department.department.code === selectedDepartment.value && department.university.code === university.code);
          
          if (department) { // Eşleşme varsa matchedItems'a ekleyelim
            matchedItems.push({ city, university, department: department.department.en });
          }
        });
      });
    });

    const universityImagesMap = universities.reduce((map, university) => {
      if (university && university.images && university.images.length > 0) {
        map[university?.en] = university.images[0, 12];
      }
      return map;
    }, {});


console.log(matchedItems)


    return (
      <Container className="p-1 rounded-2">
        {matchedItems.map((item) => {
          const { city, university, department } = item;
          return (
            <Card key={university.id} style={{ width: "100%", height: "25rem" }}>
              <div className="img" style={{ width: "100%", height: "60%" }}>
                <Carousel showStatus={false} showIndicators={false} dynamicHeight={true} infiniteLoop={true}>
                  {university.images.map((image, index) => (
                    <div key={index}>
                      <Card.Img
                        className="img"
                        variant="top"
                        style={{ width: "100%", height: "25vh", position: "relative" }}
                        src={image || defaultImg}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <button
                className="h-20 p-1 px-2 bg-light rounded-3 border-0 d-flex flex-nowrap"
                style={{ position: "absolute", top: "44%", right: "10px" }}
              >
                <i className="fa-solid fa-rotate-right fa-md p-1" style={{ color: "blue" }}></i>
                <span className="mx-1"></span>
                Compare
              </button>
              <Card.Body className="d-flex w-100 justify-content-between" style={{ height: "30%" }}>
                <div className="left ">
                  <Card.Title className="text-start text-primary fs-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className="info-div text-decoration-none text-bold">
                      {department}
                    </a>
                  </Card.Title>
                  <Card.Text className="desc text-start text-muted">{university?.en}</Card.Text>
                </div>
                <div className="h-25 d-inline-flex align-items-center justify-content-center p-2">
                  <i className="bi bi-heart-fill" style={{ color: "blue" }}></i>
                </div>
              </Card.Body>
              <ListGroup className="list-group-flush w-100">
                <ListGroup.Item>
                  <div className="d-flex text-info justify-content-between p-1">
                    <div className="left d-flex flex-nowrap">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span className="mx-2"></span>
                      {city?.en}
                    </div>
                    <div className="right d-flex flex-nowrap">
                      <i className="bi bi-cash"></i>
                      <span className="mx-2"></span>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </Container>
    );
  } else {
    return null;
  }
};

export default DepertmentsCard;
