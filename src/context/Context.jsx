

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
  const [countries, setCountries] = useState([]);

  const [user, setUser] = useState();

  const loginData = new FormData();
  loginData.append("email", "f.sarikaya00@gmail.com");
  loginData.append("password", "123456asd");


    //FAVORİ START STATE
    const [favori, setFavori] = useState();
    const [favoriId, setFavoriId] = useState([]);
    //FAVORİ END STATE
  /// COMPARE START STATE

  const [compare, setCompare] = useState([]);

  const [compareId, setCompareId] = useState([]);
  const compareData = new FormData();
  compareData.append("id", "");
  const ids = compare.map((item) => item.id);

  /// COMPARE END STATE
  console.log(compareId);
  // console.log("user", user?.userID);

  useEffect(() => {
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

        const responseCountries = await axios.get(
          "https://tr-yös.com/api/v1/location/allcountries.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
        );

        setCountries(responseCountries.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const contextValue = {
    
    cities,
    universities,
    departments,
    card,

    sliderImages,
    countries,

    compare,
    setCompare,
    user,
    setCompareId,
    compareId,
    favoriId,
    setFavoriId,
    favori,
    setFavori,
  };

  return (
    <YosContext.Provider value={contextValue}>{children}</YosContext.Provider>
  );
}
