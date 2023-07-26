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


  useEffect(() => {
    axios
      .get(
        "https://tr-yös.com/api/v1/location/allcities.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
      )
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


    axios
      .get(
        "https://tr-yös.com/api/v1/education/alluniversities.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
      )
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        "https://tr-yös.com/api/v1/record/alldepartments.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
      )
      .then((response) => {
        setCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


    axios
      .get(
        "https://tr-yös.com/api/v1/record/alldepartments.php?token=SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"
      )
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const contextValue = {
    cities,
    universities,
    departments,
    card,


  };

  return (
    <YosContext.Provider value={contextValue}>
      {children}
    </YosContext.Provider>
  );
}