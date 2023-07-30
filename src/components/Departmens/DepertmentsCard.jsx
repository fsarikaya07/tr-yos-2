import { useContext } from "react";
import { useYosContext } from "../../context/Context";
import "../Style/Departmants.css";
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
// import defaultImg from "../../assets/uni.jpg";


const DepartmentsCard = ({
  selectedCities,
  selectedUniversities,
  selectedDepartments,
  selectedCityIds,
  selectedDepartmentIds,
  selectedUniversityIds,
  handleCityChange,
  handleUniversityChange,
  handleDepartmentChange,
}) => {
  const { universities, departments,card } = useYosContext();





  const filteredUniversities = selectedUniversityIds.length
    ? departments
        ?.filter((item) => selectedUniversityIds.includes(item.university.code))
        .map((item) => ({
          ...item,
          label: item.department.en,
          value: item.department.code,
        }))
    : departments.map((item) => ({
        ...item,
        label: item.department.en,
        value: item.department.code,
      }));

  const filteredDepartments = filteredUniversities?.filter((item) =>
    selectedDepartmentIds?.includes(item.department.code)
  );

  console.log("departments:", departments);

  console.log(selectedCityIds);

  console.log("selectedUniversityIds:", selectedUniversityIds);
  console.log("selectedDepartmentIds:", selectedDepartmentIds);

  console.log("filteredUniversities:", filteredUniversities);
  console.log("filteredDepartments:", filteredDepartments);



  const universityImagesMap = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university?.en] = university.images.slice(0, 12);
    }
    return map;
  }, {});


  return (
    <Container className="p-1 rounded-2">
      {filteredDepartments.map((item) => {
        const { city, university, department, faculty } = item;
        const departmentImages = universityImagesMap[university?.en] || [];

        return (
          <Card key={university.id} style={{ width: "100%", height: "25rem" }}>
            <div className="img" style={{ width: "100%", height: "60%" }}>
              <Carousel showStatus={false} showIndicators={false} dynamicHeight={true} infiniteLoop={true} className="slide-image">
                {departmentImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <Card.Img
                      className="defaultimg"
                      variant="top"
                      style={{ width: "100%",  height:"229.609px",position: "relative",borderRadius: "5px" }}
                      src={image}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <button
              className="h-20 p-1 px-2 bg-light rounded-3 border-0 d-flex flex-nowrap"
              style={{ position: "absolute", top: "195px", right: "10px",color:"#0B3660" }}
            >
              <i className="fa-solid fa-rotate-right fa-md p-1" style={{ color: "#017EFA"  }}></i>
              <span className="mx-1"></span>
              Compare
            </button>
            <Card.Body className="cardBody d-flex w-100 justify-content-between" style={{ height: "33%" }}>
              <div className="left ">
                <Card.Title className="text-start  fs-6">
                  <a href="http://" target="_blank" rel="noopener noreferrer" className="dep text-decoration-none text-bold">
                    {item.department.en}
                  </a>
                </Card.Title>
                <Card.Title className="facul text-start  fs-6">
                  <a href="http://" target="_blank" rel="noopener noreferrer" className="dep text-decoration-none text-bold">
                    {item.faculty.en}
                  </a>
                </Card.Title>
                <Card.Text className="uni text-start text-muted">{item.university?.en}</Card.Text>
              </div> <span className='mx-2'></span>
              {/* <div className="btn rounded-circle right d-inline-flex align-items-center justify-content-center p-2">
                <i class="heart fa-solid fa-heart-circle-check" ></i>
              </div> */}

<Button
            variant="light"
            size="lg"
            // className="h-20 p-1 px-2 rounded-1 border-0 d-flex flex-nowrap"
            style={{ position: "absolute", top: "190px", right: "10px" }}
            className="btn btn-outline-light  my-5 py-1 px-1 m-1 rounded-circle border-1  d-flex flex-nowrap"
            type="submit"
            // variant="info"
            // variant="primary"
            // className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
           
          >
            <i class="heart fa-solid fa-heart-circle-check" ></i>
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
        );
      })}
    </Container>
  );
}





export default DepartmentsCard;
