import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Home from "../pages/Home";
import Account from "../components/Account/Account";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Departments from "../components/Departmens/Departments";


import Compare1 from "../components/Account/Compare1";

import University from "../pages/University";

// import LogIn from "../components/Login/Logİn";
// import SignUp from "../components/Login/Signup";
// import UniversityCard from "../components/universityCard/";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar className="" />
     
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/account" element={<Account />} />
        <Route
          path="/universities/:id"
          element={<Detail  />}
        />
        {/* <Route path="/compare" element={<Compare/>}/> */}
        <Route path="/departmants" element={<Departments />} />
        <Route path="universites" element={<University />} />
        {/* <Route path="/login" element={<LogIn/>}/> */}
        {/* <Route path="/logout" element={<SignUp/>}/> */}
      </Routes>
      <Footer />
      <Compare1/>
    </BrowserRouter>
  );
};

export default AppRouter;
