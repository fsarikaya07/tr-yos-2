import React from "react";
import { Link } from "react-router-dom";
import HomeSearch from "../components/HomePage/HomeSearch";
import HomeDepartmens from "../components/HomePage/HomeDepartmens";


const Home = ({ universities }) => {


  
  return (
    <div>

      <nav>
      <Link to="/account">Account</Link>
        <ul>
          {universities.map((university) => (
            <li key={university.id}>
              <Link to={`/universities/${university.id}`}>
                {university.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HomeSearch/>
      <HomeDepartmens/>
     
    </div>
  );
};

export default Home;
