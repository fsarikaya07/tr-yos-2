import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Account.css";
const Account = () => {
  const person = {
    name: "John Doe",
    tel: "+90 555 123 45 67",
    email: "johndoe@example.com",
    facebook: "https://www.facebook.com/johndoe",
    img: "https://cdn.create.vista.com/api/media/small/3971976/stock-photo-young-child",
    twitter: "https://www.twitter.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    google: "https://plus.google.com/johndoe",
  };
  return (
    <div className=" ">
      <h1 className="text-center">MY Account</h1>
      <div className="account_container p-2 d-flex justify-content-around ">
        {/* <----------------------Profi Area Start-----------------------> */}
        <div className=" card w-25 bg-white border-0 shadow-lg p-3 mb-5  rounded" style={{ width: "18rem" }}>
          <img
            src={person.img}
            className="card-img-top card__image"
            alt="..."
          />
          <div className="card-body text-center w-100">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">{person.email}</p>
            <ul className="social-icons">
              <li>
                <a href={person.facebook}>
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href={person.twitter}>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href={person.linkedin}>
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href={person.google}>
                  <i className="fa fa-codepen" />
                </a>
              </li>
            </ul>
            <div class="">
              <button class="btn_primary p-3 w-100 mt-2" type="button">
                {person.tel}
              </button>
              
              <button class="btn_success  p-3 w-100 mt-2" type="button">
              {person.email}
              </button>
            </div>
          </div>
          <div className="mt-1 p-3 ">
            <button className="button-24 " role="button">
            <i class="fa-solid fa-gauge-high"></i> Dashboard <span></span>
            </button>
            <button className="button-24" role="button">
            <i class="fa-regular fa-user"></i> My Profile
            </button>
            <button className="button-24" role="button">
            <i class="fa-solid fa-envelope"></i> Message <span></span>
            </button>
            <button className="button-24" role="button">
            <i class="fa-solid fa-unlock"></i> Change Password
            </button>
          </div>
        </div>

        {/* <----------------------Profil Area End-----------------------> */}
        {/* <----------------------Form Area Start-----------------------> */}
        <div className="col-7">
          <button className="">{person.tel}</button>
          <button className="">info@tryos.com</button>
        </div>
        {/* <----------------------Form Area End-----------------------> */}
      </div>
    </div>
  );
};

export default Account;
