import React, { useEffect, useState } from "react";
import { useYosContext } from "../../context/Context";
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import ToastComponent from "../toastComponent/ToastComponent";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
const Favori = () => {

  


  
  const { t } = useTranslation();
  const { favoriId, setFavoriId, favori, setFavori, card,universities } = useYosContext();
  const [cardCompare, setCardCompare] = useState([]);
  const [deleteProps, setDeleteProps] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const universityImagesMap = universities.reduce((map, university) => {
    if (university && university.images && university.images.length > 0) {
      map[university?.en] = university.images.slice(0, 12);
    }
    return map;
  }, {});

  const { currentUser } = useAuthContext();
  const sessionData = JSON.parse(sessionStorage.getItem("favoriID"));
  console.log(sessionData, "id");
  const matchedCards = sessionData?.map((compareItem) => {
    const matchingCard = card.find(
      (cardItem) => cardItem.id === compareItem.id
    );
    return matchingCard;
  });

  useEffect(() => {
    setCardCompare(matchedCards);
  }, [card, deleteProps]);

  const deleteCompare = async (prop) => {
    setDeleteProps(!deleteProps);
    try {
      const responseCompareDelete = await axios.get(
        `https://tr-yös.com/api/v1/users/deletefavorite.php`,
        {
          params: {
            id: `${prop}`,
            user_id: currentUser,
            token:
              "SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a",
          },
        }
      );

      const updatedFavori = sessionData.filter((item) => item.id != prop);
      setFavoriId(updatedFavori);
      sessionStorage.setItem("favoriID", JSON.stringify(updatedFavori));

      setShowSuccessToast(true);
      console.log("delete", responseCompareDelete.data);
    } catch (error) {
      console.log("delete Hatasi", error);
    }
  };

  return (
    <div className="">
      <div className=" infoDiv p-5 mb-2 bg-primary text-white" style={{ width: "100%" }}>
        <h3 className="page-title fw-bold mx-5 mt-5">{t("favorites.yourFavorites")}</h3>
        <span className="fw-small mx-5">
        
        </span>
      </div>
      <Container className="container mt-5" style={{ position: "relative" }}>
      <Row className="g-4 d-flex flex-wrap">  
        {cardCompare?.map((item) => {
            const university = item?.university;
            const departmentImages = universityImagesMap[university?.en] || [];
          return (
            <Col xs={12} md={6} lg={4} xl={3}> 
            <Card
              className="card "
              key={item?.id}
              style={{ width: "100%", height: "30rem" }}>
              <button 
               className="comp  h-20 p-1 px-2 rounded-circle border-0 d-flex justify-content-center align-items-center"
               style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "#0B3660",
                zIndex: 1000,
              }}
              onClick={() => deleteCompare(item?.id)}>
                <strong>X </strong>
              </button>
                     <div className="img " style={{ width: "100%", height: "45%" }}>
          <Carousel
            showStatus={false}
            showIndicators={false}
            dynamicHeight={true}
            infiniteLoop={true}
            className="slide-image"
          >
            {departmentImages?.map((image, index) => (
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
                  src={image ||"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
              <Card.Body className="card-body d-flex w-100 justify-content-between"  style={{ height: "8%" }}>
                <h5 className="card-title mt-3" style={{color:"#022F5D"}}>{item?.university.tr}</h5>
              </Card.Body>
              <Card.Body className="w-100  " style={{ height: "33%" }}> 
              <Card.Title className="list-group list-group-flush text-start  ">
                <Card.Title className="list-group-item text-start  " style={{color:"#4F5E64",fontSize:"small"}} >
                  <Link  className="dep text-decoration-none" key={item?.id} to={`/universities/${item?.id}`}>
                    {" "}
                    {item?.faculty.tr}
                  </Link>{" "}

{/* 
                </li>
                <li className="list-group-item">{item?.department.tr}</li>
                <li className="list-group-item">{item?.city.tr}</li>
              </ul>
            </div> */}


                </Card.Title>
                <Card.Title className="list-group-item text-start  "  style={{color:"#4F5E64" ,fontSize:"small"}} >{item?.department.tr}</Card.Title>
                <Card.Title className="list-group-item text-start  "  style={{color:"#4F5E64" ,fontSize:"small"}} >{item?.city.tr}</Card.Title>
              </Card.Title>
              </Card.Body>
            </Card>
            </Col>

          );
        })} </Row>
      </Container>
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{ position: "relative", minHeight: "200px" }}
      >
        {/* Success Toast */}
        <ToastComponent
          show={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          type="success"
          message="Favori delete successfully."
        />
      </div>
    </div>
  );
};

export default Favori;
