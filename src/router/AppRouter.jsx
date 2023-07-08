import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Home from "../page/Home";
import Account from "../components/Account/Account";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppRouter = ({ universities }) => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home universities={universities} />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        <Route
          // path="/universities/:id"
          // element={<Detail universities={universities} />}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
