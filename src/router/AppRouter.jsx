import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Home from "../pages/Home";
import Account from "../components/Account/Account";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Departments from "../components/Departmens/Departments";
import MyAccount from "../components/Dropdown/MyAccount";
import Compare from "../components/Account/Compare";
import Favori from "../components/Account/Favori";
import University from "../pages/University";
// import LogIn from "../components/Login/Logİn";
// import SignUp from "../components/Login/Signup";


const AppRouter = () => {
  return (
   <>
          <Navbar className="" />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/universities/:id"
          element={<Detail  />}
        />
        <Route path="/favorite-department" element={<Favori/>}/>
        <Route path="/departmants" element={<Departments />} />
        <Route path="universites" element={<University />} />
        <Route path="/compare" element={<Compare />}/>
        {/* <Route path="/login" element={<LogIn/>}/>
        <Route path="/logout" element={<SignUp/>}/> */}

       <Route path="/MyAccount" element={<MyAccount/>} />

      </Routes>


      <Footer />
   </>
  );
};

export default AppRouter;