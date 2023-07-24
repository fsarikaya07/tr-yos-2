import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const YosContext = createContext();

export function useYosContext() {
  return useContext(YosContext);
}

export function YosProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [card, setCard] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [compare, setCompare] = useState([]);

  const [user, setUser] = useState();
  const [compareId, setCompareId] = useState();
  const loginData = new FormData();
  loginData.append("email", "f.sarikaya00@gmail.com");
  loginData.append("password", "123456asd");

  const compareData = new FormData();
  compareData.append("id", "");

  console.log("object", compare);

  const ids = compare.map((item) => item.id);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://tr-yös.com/api/v1/location/allcities.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
  //     )
  //     .then((response) => {
  //       setCities(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get(
  //       "https://tr-yös.com/api/v1/education/alluniversities.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
  //     )
  //     .then((response) => {
  //       setUniversities(response.data);
  //       const images = response.data.map((university) => university.images);
  //       setSliderImages(images);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get(
  //       "https://tr-yös.com/api/v1/record/alldepartments.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
  //     )
  //     .then((response) => {
  //       setCard(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get(
  //       "https://tr-yös.com/api/v1/record/alldepartments.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
  //     )
  //     .then((response) => {
  //       setDepartments(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("errere", error);
  //     });

  //   //User

  //   axios
  //     .post(
  //       "https://tr-yös.com/api/v1/users/login.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a",
  //       loginData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   //Compare

  //   axios
  //     .get(`https://tr-yös.com/api/v1/users/allcompares.php`, {
  //       params: {
  //         id: ids.join(","),
  //         token:
  //           "SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a",
  //       },
  //     })
  //     .then((res) => setCompareId(res.data))
  //     .catch((err) => console.log(err));

  // }, []);

  useEffect(() => {
    // Define an async function to wrap the axios calls
    const fetchData = async () => {
      try {
        const responseCities = await axios.get(
          "https://tr-yös.com/api/v1/location/allcities.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
        );
        setCities(responseCities.data);

        const responseUniversities = await axios.get(
          "https://tr-yös.com/api/v1/education/alluniversities.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
        );
        setUniversities(responseUniversities.data);
        const images = responseUniversities.data.map(
          (university) => university.images
        );
        setSliderImages(images);

        const responseCard = await axios.get(
          "https://tr-yös.com/api/v1/record/alldepartments.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
        );
        setCard(responseCard.data);

        const responseDepartments = await axios.get(
          "https://tr-yös.com/api/v1/record/alldepartments.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
        );
        setDepartments(responseDepartments.data);

        //User
        const responseUser = await axios.post(
          "https://tr-yös.com/api/v1/users/login.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a",
          loginData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setUser(responseUser.data);

        //Compare
        const responseCompare = await axios.get(
          `https://tr-yös.com/api/v1/users/allcompares.php`,
          {
            params: {
              id: ids.join(","),
              token:
                "SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a",
            },
          }
        );
        setCompareId(responseCompare.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(compareId);
  const contextValue = {
    cities,
    universities,
    departments,
    card,
    sliderImages,
    compare,
    setCompare,
    user,
    setCompareId,
    compareId,
  };

  return (
    <YosContext.Provider value={contextValue}>{children}</YosContext.Provider>
  );
}
