import React from "react";
import { Link } from "react-router-dom";
import HomeSearch from "../components/HomePage/HomeSearch";

// import Departments from "../components/Departmens/Departments";

import HomeDepartmens from "../components/HomePage/HomeDepartmens";
import { useYosContext } from "../context/Context";



const Home = () => {
 
  const {card}=useYosContext()
  return (
    <div> 
          
      <HomeSearch/>
      <HomeDepartmens/>
    </div>
  );
};

export default Home;
