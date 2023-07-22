import "../Style/University.css";
import { Card, Col, Row } from "react-bootstrap";

const UniversityCard = ({ logo, city, tr, data }) => {
  // const { card,cities, universities, departments } = useYosContext();
  console.log(tr);
  return (
    <div className="p-3">   
  <Card className="container">
      <Row className="align-items-center">
        <Col md={4} className="card-left text-center"> 
          <Card.Img className="logo" src={logo} alt="" />
        </Col>
        <Col md={8} className="card-right"> 
          <Card.Body>
            <div className="info d-flex p-2 gap-2">
              <span className="uni-faculties rounded-1">1 Faculties</span>
              <span className="uni-departments rounded-1">2 Departments</span>
            </div>
            <Card.Title className="university-title text-truncate">{tr}</Card.Title>
            <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <span className="location-name">Afyonkarahisar</span>
              <Card.Text className="university-address">
                Afyon Kocatepe Üniversitesi Rektörlüğü ANS Kampusü Gazlıgöl Yolu
                Üzeri AFYONKARAHİSAR
              </Card.Text>
              <div className="contact">
                <div className="uni-contact p-2 border border-warning-subtle rounded-1 w-50">
                  <i class="fa-solid fa-phone"></i>
                  <span> (272) 218-1195</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
      </div>
    
  );
};

export default UniversityCard;
