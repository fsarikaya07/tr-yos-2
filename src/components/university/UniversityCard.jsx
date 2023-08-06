import { useYosContext } from "../../context/Context";
import "../Style/University.css";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const UniversityCard = ({ logo, city, tr, data }) => {

  const { t } = useTranslation();
  const { cities ,universities ,card } = useYosContext();
  const citi = cities?.map((e) => {
    if (e.id == city) {
      return e.tr;
    }
  });
  
    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
      const random = Math.floor(Math.random() * 15) + 1; 
      setRandomNumber(random);
    };
  useEffect(() => {
   generateRandomNumber()
  },[])
    
  const depLenght = card.filter((dep)=> dep.university.tr ==  tr)
  // const  depLen= depLenght.filter((dep)=> dep.faculty.code != dep.faculty.code )
  // const a = depLen.length
  const departmentLen=depLenght.length

  return (
    <Container className="container  p-2">
      <div className="card mb-3 uni-dep">
        <div className="d-flex justfiy-content-center align-items-center flex-column flex-md-row">
          <div className="üni-logo">
            <div className="image p-3">
              <img
                className="logo border uni-log border-3 light-subtle rounded"
                src={logo}
                alt="logo"
              />
            </div>
          </div>
          <div className="uni-info-caption">
            <div className="uni-info">
              <div className="">
                <div className="info d-flex p-2 gap-2">
                  <span className="uni-faculties rounded-1">
                    {" "}
                    {randomNumber}{" "}
                    {t("universityCard.faculties")}
                  </span>
                  <span className="uni-departments rounded-1">
                    {" "}
                    {departmentLen}{" "}
                    {t("universityCard.departments")}
                  </span>
                </div>
         
                <h5 className="university-title">{tr}</h5>
                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="location-name">{citi} </span>
                </div>
                <p className="university-address">
                 {data?.adress}
                </p>
                <div className="contact">
                  <div className="uni-contact p-2 border border-warning-subtle rounded-1">
                    <i className="fa-solid fa-phone"></i>
                    <span>{data?.phone} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UniversityCard;
