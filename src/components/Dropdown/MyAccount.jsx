import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import "./MyAccount.css";
import ToastComponent from "../toastComponent/ToastComponent";
const MyAccount = () => {
  const { logoutPerson } = useAuthContext();

  const { t } = useTranslation();
  const { logout } = useAuthContext();
  const [showLogoutToast, setShowLogoutToast] = useState(false);
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
      await logoutPerson();
      setShowLogoutToast(true)
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
      <Dropdown.Toggle
        variant="primary"
        id="account-dropdown"
        style={{ padding: "3px", width: "190px" }}
      >
        <FaUser style={{ marginRight: "5px" }} /> {t("myAccount.myAccount")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <NavLink
          to="/account"
          // activeClassName="text-danger"
          className=" tit btn  border-none my-2 py-2 m-1 flex-wrap "
          onClick={() => setOpen(false)}
          style={{ border: "1px solid #FFFFFF" }}
        >
          {t("myAccount.userDashboard")}
        </NavLink>
        <NavLink
          to="/favorite-department"
          // activeClassName="text-danger"
          className="tit btn  my-1 py-2 m-1 flex-wrap "
          onClick={() => setOpen(false)}
          style={{ border: "1px solid #FFFFFF" }}
        >
          {t("myAccount.favoriteDepartment")}
        </NavLink>
        <NavLink
          to="/compare"
          // activeClassName="text-danger"
          className="tit btn  my-2 py-2 m-1 flex-wrap "
          onClick={() => setOpen(false)}
          style={{ border: "1px solid #FFFFFF" }}
        >
          {t("myAccount.compareDepartment")}
        </NavLink>

        <NavLink
          to="/"
          // activeClassName="text-danger"
          className="titbtn btn btn-outline-light m-4 text-center  w-75 "
          style={{ backgroundColor: " #34b3b3", width: "80px" }}
        >
          {/* <div className="titbtn py-1 text-center" 
          onClick={handleLogout}>
            Logout
            </div> */}

          <div className="titbtn py-1 text-center" onClick={handleLogout}>
            {t("myAccount.logout")}
          </div>
        </NavLink>
      {/* <div aria-live="polite" aria-atomic="true" style={{ position: "relative", minHeight: "200px" }}>
        <ToastComponent
          show={showLogoutToast}
          onClose={() => setShowLogoutToast(false)}
          type="success"
          message="Logout successful."
        />
      </div> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyAccount;
