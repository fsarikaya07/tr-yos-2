// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import HomeSearch from "../components/HomePage/HomeSearch";

// // import Departments from "../components/Departmens/Departments";

// import HomeDepartmens from "../components/HomePage/HomeDepartmens";
// import { useYosContext } from "../context/Context";



// const Home = () => {

//   const {card}=useYosContext()
//   return (
//     <div>

//       <nav>
//       <Link to="/account">Account</Link>
//         <ul>
//           {card.map((university) => (
//             <li key={university.id}>
//               <Link to={`/universities/${university.id}`}>
//                 {university.tr}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <HomeSearch/>
//       <HomeDepartmens/>
     
     
//     </div>
//   );
// };

// export default Home;
