import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuthContext } from "../../context/AuthContext";
import "./MyAccount.css"
const MyAccount = () => {
  const { logout } = useAuthContext();
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    setOpen(false);
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dropdown
      show={open}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Dropdown.Toggle variant="primary" id="account-dropdown" style={{padding:"3px" ,width:"190px"}}>
        <FaUser style={{ marginRight: "5px" }} /> My Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <NavLink
          to="/account"
          activeClassName="text-danger"
          className=" tit btn  border-none my-2 py-2 m-1 flex-wrap "
          onClick={() => setOpen(false)}
          style={{ border:"1px solid #FFFFFF"}}
        >
          User Dashboard
        </NavLink>
        <NavLink
          to="/favorite-department"
          activeClassName="text-danger"
          className="tit btn  my-1 py-2 m-1 flex-wrap "
          onClick={() => setOpen(false)}
          style={{ border:"1px solid #FFFFFF"}}
        >
          Favorite Department
        </NavLink>
        <NavLink
          to="/compare"
          activeClassName="text-danger"
          className="tit btn  my-2 py-2 m-1 flex-wrap "
          onClick={() => setOpen(false)}
          style={{ border:"1px solid #FFFFFF"}}
        >
          Compare Department
        </NavLink>

        <NavLink
          to="/"
          activeClassName="text-danger"
          className="titbtn btn btn-outline-light m-4 text-center  w-75 "
          style={{ backgroundColor:" #34b3b3" , width:"80px"}}
        >
          <div className="titbtn py-1 text-center" onClick={handleLogout}>
            Logout
          </div>
        </NavLink>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyAccount;



// // MyAccount.js
// // import React, { useContext } from "react";
// // import { Dropdown } from "react-bootstrap";
// // import { useAuthContext } from "../../context/AuthContext"; // AuthContext'u kullanmak için import edin.

// // const MyAccount = () => {
// //   const { user, logout } = useAuthContext(); // AuthContext'ten user bilgisini alın.

// //   const handleLogout = () => {
// //     logout(); // Logout işlemlerini gerçekleştirin ve kullanıcıyı state'ten çıkarın.
// //   };

// //   return (
// //     <Dropdown>
// //       <Dropdown.Toggle variant="info" id="dropdown-basic">
// //         {user ? user.name : "My Account"}
// //       </Dropdown.Toggle>
// //       <Dropdown.Menu>
// //         {user ? (
// //           <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
// //         ) : (
// //           <Dropdown.Item href="/login">Sign In</Dropdown.Item>
// //         )}
// //       </Dropdown.Menu>
// //     </Dropdown>
// //   );
// // };

// // export default MyAccount;




// import React, { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import { NavLink } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { useAuthContext } from "../../context/AuthContext";
// import "./MyAccount.css"
// const MyAccount = () => {
//   const { logout } = useAuthContext();
//   const [open, setOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setOpen(false);
//   };

//   const handleLogout = async () => {
//     setOpen(false);
//     try {
//       await logout();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Dropdown
//       show={open}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Dropdown.Toggle variant="primary" id="account-dropdown" style={{padding:"3px" ,width:"190px"}}>
//         <FaUser style={{ marginRight: "5px" }} /> My Account
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <NavLink
//           to="/account"
//           activeClassName="text-danger"
//           className=" tit btn  border-none my-2 py-2 m-1 flex-wrap "
//           onClick={() => setOpen(false)}
//           style={{ border:"1px solid #FFFFFF"}}
//         >
//           User Dashboard
//         </NavLink>
//         <NavLink
//           to="/favorite-department"
//           activeClassName="text-danger"
//           className="tit btn  my-1 py-2 m-1 flex-wrap "
//           onClick={() => setOpen(false)}
//           style={{ border:"1px solid #FFFFFF"}}
//         >
//           Favorite Department
//         </NavLink>
//         <NavLink
//           to="/compare"
//           activeClassName="text-danger"
//           className="tit btn  my-2 py-2 m-1 flex-wrap "
//           onClick={() => setOpen(false)}
//           style={{ border:"1px solid #FFFFFF"}}
//         >
//           Compare Department
//         </NavLink>

//         <NavLink
//           to="/"
//           activeClassName="text-danger"
//           className="titbtn btn btn-outline-light m-4 text-center  w-75 "
//           style={{ backgroundColor:" #34b3b3" , width:"80px"}}
//         >
//           <div className="titbtn py-1 text-center" onClick={handleLogout}>
//             Logout
//           </div>
//         </NavLink>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

// export default MyAccount;















// // import React, { useState,  } from "react";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import { NavLink, useLocation } from "react-router-dom";
// // import { FaUser } from "react-icons/fa"; // Import the user icon from react-icons/fa
// // import { useAuthContext } from "../../context/AuthContext";

// // //   // ... Yukarıdaki kodları buraya yerleştirin ...

// // const MyAccount = () => {
// //   const [open, setOpen] = useState(false);
// //   // const { currentUser, logout } = useContext(useAuthContext);
// //   const {  logout } = useAuthContext();
// //   const location = useLocation();
// //   // const navigate = useNavigate();

// //   const handleMouseEnter = () => {
// //     setOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setOpen(false);
// //   };

// //   const handleLogout = async () => {
// //     setOpen(false);
// //     try {
// //       // Burada backend ile iletişim kurmak için bir kod ekleyebilirsiniz.
// //       // logout fonksiyonu örnek olarak backend ile iletişime geçmek yerine
// //       // sadece AuthContext'te bulunan login durumunu değiştirir.
// //       await logout();
// //       location.pathname = "/"; // Başarılı çıkıştan sonra anasayfaya yönlendirir.
// //     } catch (error) {
// //       // Hata yönetimi
// //     }
// //   };

// //   return (
// //     <Dropdown
// //       show={open}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <Dropdown.Toggle variant="primary" id="account-dropdown">
// //         <FaUser style={{ marginRight: "5px" }} /> My Account
// //       </Dropdown.Toggle>

// //       <Dropdown.Menu>
// //         <NavLink
// //           to="/user-dashboard"
// //           activeClassName="text-danger"
// //           className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
// //           onClick={() => setOpen(false)}
// //         >
// //           User Dashboard
// //         </NavLink>
// //         <NavLink
// //           to="/favorite-department"
// //           activeClassName="text-danger"
// //           className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
// //           onClick={() => setOpen(false)}
// //         >
// //           Favorite Department
// //         </NavLink>
// //         <NavLink
// //           to="/compare-department"
// //           activeClassName="text-danger"
// //           className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
// //           onClick={() => setOpen(false)}
// //         >
// //           Compare Department
// //         </NavLink>

// //         <NavLink
// //           to="/"
// //           activeClassName="text-danger"
// //           className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
// //         >
// //           <div className="py-2" onClick={handleLogout}>
// //             <NavLink
// //               to="/"
// //               activeClassName="text-danger"
// //               className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
// //               onClick={() => setOpen(false)}
// //             >
// //               Logout
// //             </NavLink>
// //           </div>

// //           <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
// //         </NavLink>
// //       </Dropdown.Menu>
// //     </Dropdown>
// //   );
// // };

// // export default MyAccount;

// // // MyAccount.js
// // // import React, { useContext } from "react";
// // // import { Dropdown } from "react-bootstrap";
// // // import { useAuthContext } from "../../context/AuthContext"; // AuthContext'u kullanmak için import edin.

// // // const MyAccount = () => {
// // //   const { user, logout } = useAuthContext(); // AuthContext'ten user bilgisini alın.

// // //   const handleLogout = () => {
// // //     logout(); // Logout işlemlerini gerçekleştirin ve kullanıcıyı state'ten çıkarın.
// // //   };

// // //   return (
// // //     <Dropdown>
// // //       <Dropdown.Toggle variant="info" id="dropdown-basic">
// // //         {user ? user.name : "My Account"}
// // //       </Dropdown.Toggle>
// // //       <Dropdown.Menu>
// // //         {user ? (
// // //           <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
// // //         ) : (
// // //           <Dropdown.Item href="/login">Sign In</Dropdown.Item>
// // //         )}
// // //       </Dropdown.Menu>
// // //     </Dropdown>
// // //   );
// // // };

// // // export default MyAccount;
