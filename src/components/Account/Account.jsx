import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Account.css";

const Account = () => {
  const [accountCities, setAccountCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const YOUR_TOKEN = 'SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCountries = await axios.get(`https://tr-yös.com/api/v1/location/allcountries.php?token=${YOUR_TOKEN}`);
        setCountries(responseCountries.data);
        const turkey = responseCountries.data.find(country => country.en.toLowerCase() === "turkey");
        setSelectedCountryId(turkey.id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const fetchCitiesByCountry = async () => {
        try {
          const responseCities = await axios.get(
            `https://tr-yös.com/api/v1/location/citiesbycountry.php?country_id=${selectedCountryId}&token=${YOUR_TOKEN}`
          );
          setAccountCities(responseCities.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchCitiesByCountry();
    }
  }, [selectedCountryId]);

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setSelectedCountryId(selectedCountryId);
  };

 
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
      <div className="infoDiv mt-5 p-5 mb- bg-primary text-white">
        <h2 className=" fw-bold mx-5 pt-5">MyAccount</h2>
      </div>
      <div className="">
        <h1 className="text-center p-5">MY Account</h1>
      </div>

      <div className="account_container p-2 d-flex justify-content-around  ">
        {/* <----------------------Profi Area Start-----------------------> */}
        <div
          className=" card w-25 bg-white border-0 shadow-lg p-3 mb-5  rounded"
          style={{ width: "18rem" }}>
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
        <div
          className="card w-75 bg-white border-0 shadow-lg p-3 mb-5 rounded mx-1"
          style={{ width: "18rem" }}>
          <form className="row g-4">
            <h3 className="text-start">MY Account</h3>
            <div className="col-md-6 ">
              <label htmlFor="inputText" className="form-label">
                Your Name
              </label>
              <input
                type="inputText"
                className="form-control p-3"
                id="inputText"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control p-3"
                id="inputEmail"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCountry" className="form-label">
                Country
              </label>
              <select
                id="inputCountry"
                className="form-select p-3"
                required
                onChange={handleCountryChange}>
                <option selected disabled value="">
                  Select Country
                </option>
                {countries.map((country) => (
                  <option
                    key={country.id}
                    value={country.id}
                    selected={country.en.toLowerCase() === "turkey"} // Check if the country is Turkey
                  >
                    {country.en}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <select id="inputCity" className="form-select p-3" required>
                <option selected disabled value="">
                  Select City
                </option>
                {accountCities.map((city) => ( // Use accountCities here
                  <option key={city.id} value={city.en}>
                    {city.en}
                  </option>
                ))}
              </select>
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
