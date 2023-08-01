import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../Style/Footer.css"

const FooterPage = () => {
  const { t } = useTranslation();
  return (
    <footer className=" text-light  "
    style={{backgroundColor:"#172832"}}>
      <Container className="p-4">
        <Row>
        
        <Col md={4} className="p-4 d-flex flex-column justify-content-center align-items-center ">
            <div className="card-body w-100 text-start ">
              <h5 className="mx-2">{t("footer.address")}</h5>
            <Button className="contact m-2 rounded-pill d-block " style={{backgroundColor:"#003364"}} >
              <p className="card-text">
              <i className="fa-solid fa-phone"></i>
              <span className="mx-1"></span> 
                 +1 123-456-7890</p></Button>
            <Button className="contact m-2  rounded-pill " style={{backgroundColor:"#003364"}} >
              <p className="card-text">
              <i className="bi bi-envelope-fill"></i>
              <span className="mx-1"></span>
              info@example.com</p></Button>
            
          
            </div>
        
          </Col>
          <Col md={4} className="p-4 d-flex flex-column justify-content-center align-items-center ">
            <div className="card-body w-100 text-start">
              <h5 className="mx-2 ">{t("footer.navigations")}</h5>
            <ul className="list-unstyled mx-2" 
            
            >
              <li>
                <a href="#abaut us"
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }} >{t("footer.aboutUs")}</a>
              </li>
              <li>
                <a href="#faqs page" 
                className="text-decoration-none"
                 
                 
                    style={{ color: "#b5c9dd" }}>{t("footer.faqsPage")}</a>
              </li>
              <li>
                <a href="#services" 
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }}>{t("footer.checkout")}</a>
              </li>
              <li>
                <a href="#contact"  
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }}>{t("footer.contact")}</a>
              </li>
              <li>
                <a href="#blog" 
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }}>{t("footer.blog")}</a>
              </li>
            </ul>
            </div>
          </Col>
          <Col md={4} className="p-4 d-flex flex-column justify-content-center align-items-center ">
            <div className="card-body w-100 text-start  ">
              <h5 className="mx-2">{t("footer.myAccount")}</h5>
            <ul  className="list-unstyled mx-2" >

            
            <li>
                <a href="#myprofile"  
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }}>{t("footer.myProfile")}</a>
              </li>
              <li>
                <a href="#myaccount" 
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }}>{t("footer.myAccount")}</a>
              </li>
              <li>
                <a href="#favorites" 
                className="text-decoration-none"
                    style={{ color: "#b5c9dd" }}>{t("footer.favorites")}</a>
              </li>
        </ul>
        </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} {t("footer.allRightsReserved")}
      </div>
    </footer>
  );
};

export default FooterPage;


