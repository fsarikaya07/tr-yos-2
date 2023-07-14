import React from "react";
import { Link } from "react-router-dom";
import HomeSearch from "../components/HomePage/HomeSearch";
import Departments from "../components/Departmens/Departments";


const Home = ({ universities }) => {


  
  return (
    <div>
      <h1>Üniversiteler</h1>
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
     
     
    </div>
  );
};

export default Home;
