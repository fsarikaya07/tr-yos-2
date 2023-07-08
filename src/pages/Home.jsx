import React from "react";
import { Link } from "react-router-dom";


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
     
    </div>
  );
};

export default Home;
