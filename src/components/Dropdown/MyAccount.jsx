import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const MyAccount = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="account-dropdown">
        My Account
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className={`btn btn-outline-light my-2 py-2 m-1 flex-wrap ${
            location.pathname === "/user-dashboard" ? "text-danger" : "primary" // Eğer sayfa adresi "/departmants" ise, Link bileşenine text-red-500 sınıfını ekle
          }`}
          href="/user-dashboard"
        >
          User Dashboard
        </Dropdown.Item>
        <Dropdown.Item
          className={`btn btn-outline-light my-2 py-2 m-1 flex-wrap ${
            location.pathname === "/user-dashboard" ? "text-danger" : "primary" // Eğer sayfa adresi "/departmants" ise, Link bileşenine text-red-500 sınıfını ekle
          }`}
          href="/favorite-department"
        >
          Favorite Department
        </Dropdown.Item>
        <Dropdown.Item
          className={`btn btn-outline-light my-2 py-2 m-1 flex-wrap ${
            location.pathname === "/user-dashboard" ? "text-danger" : "primary" // Eğer sayfa adresi "/departmants" ise, Link bileşenine text-red-500 sınıfını ekle
          }`}
          href="/compare-department"
        >
          Compare Department
        </Dropdown.Item>
        <Dropdown.Item href="/logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyAccount;
