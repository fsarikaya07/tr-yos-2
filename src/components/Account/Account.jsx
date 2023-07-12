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
    <div className="">
      <h1 className="text-center">MY Account</h1>
      <div className="account_container p-2 d-flex justify-content-around  ">
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
        
        {/* <----------------------Form Area Start Hakan Bilgi-----------------------> */}
        <div className="card w-75 bg-white border-0 shadow-lg p-3 mb-5 rounded mx-1" style={{ width: "18rem" }}>
          <form className="row g-4">
            <h3 className="text-start">MY Account</h3>
            <div className="col-md-6 ">
              <label htmlFor="inputText" className="form-label">
                Your Name
              </label>
              <input type="inputText" className="form-control p-3" id="inputText" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input type="email" className="form-control p-3" id="inputEmail" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputContry" className="form-label"   >
                Country
              </label>
              <select id="inputCountry" className="form-select p-3" required >
                <option selected disabled value="">Select Country</option>
                <option>Rusia</option>
                <option>USA</option>
                <option>Turkiye</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control p-3" id="inputCity" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="text" className="form-control p-3" id="phone" />
            </div>
            <div className="mb-3">
              <label for="aboutTextarea" class="form-label">
                About
              </label>
              <textarea
                class="form-control"
                id="aboutTextarea"
                rows="5"></textarea>
            </div>

            <h3 className="text-start">Social Accounts</h3>

            <div className="col-md-6">
              <label htmlFor="facebook" className="form-label">
                Facebook
              </label>
              <input
                type="text"
                className="form-control p-3"
                id="facebook"
                placeholder=" https://facebook.com/"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="twitter" className="form-label">
                Twitter
              </label>
              <input
                type="text"
                className="form-control p-3"
                id="twitter"
                placeholder=" https://twitter.com/"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="googleplus" className="form-label">
                Google Plus
              </label>
              <input
                type="text"
                className="form-control p-3"
                id="googleplus"
                placeholder=" https://googleplus.com/"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="linkedin" className="form-label">
                LinkedIn
              </label>
              <input
                type="text"
                className="form-control p-3"
                id="linkedin"
                placeholder=" https://linkedin.com/"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary p-3">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* <----------------------Form Area End Hakan Bilgi----------------------> */}
      </div>
    </div>
  );
};

export default Account;
