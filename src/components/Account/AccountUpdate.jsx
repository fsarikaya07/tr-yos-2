import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Account.css";
import { useAuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

const AccountForm = () => {
  const { t } = useTranslation();
  const { currentUser, setCurrentUser } = useAuthContext();

  const UPDATE_API_URL = `https://tr-yös.com/api/v1/users/updateuser.php`;
  const MY_TOKEN =
    "SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a";

  const [accountCities, setAccountCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCountries = await axios.get(
          `https://tr-yös.com/api/v1/location/allcountries.php?token=${MY_TOKEN}`
        );
        setCountries(responseCountries.data);
        const turkey = responseCountries.data.find(
          (country) => country.en.toLowerCase() === "turkey"
        );
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
            `https://tr-yös.com/api/v1/location/citiesbycountry.php?country_id=${selectedCountryId}&token=${MY_TOKEN}`
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

  const updateUser = async (userId, updateData) => {
    const createData = new FormData();
    createData.append("name", updateData.name);
    createData.append("country", updateData.country);
    createData.append("city", updateData.city);
    createData.append("phone", updateData.phone);
    createData.append("about", updateData.about);
    try {
      const { data } = await axios.post(
        `${UPDATE_API_URL}?user_id=${userId}&token=${MY_TOKEN}`,
        createData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCurrentUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.inputText.value;
    const email = event.target.elements.inputEmail.value;
    const country = event.target.elements.inputCountry.value;
    const city = event.target.elements.inputCity.value;
    const phone = event.target.elements.phone.value;
    const about = event.target.elements.aboutTextarea.value;

    const updateData = {
      name: name,
      email: email,
      country: country,
      city: city,
      phone: phone,
      about: about,
    };

    const sessionUser = JSON.parse(sessionStorage.getItem("user"));

    const userId = sessionUser;

    if (userId) {
      const result = await updateUser(userId, updateData);
      if (result) {
        alert(t("account.successfullyUpdated"));
      } else {
        alert(t("account.errorUpdating"));
      }
    } else {
      alert(t("account.noUserLoggedIn"));
    }
  };
  return (
    <form className="row g-4" onSubmit={handleSubmit}>
      <div className="col-md-6 ">
        <label htmlFor="inputText" className="form-label">
          {t("account.yourName")}*
        </label>
        <input
          type="inputText"
          className="form-control p-3"
          id="inputText"
          required
          defaultValue={currentUser.name}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail" className="form-label">
          {t("account.email")}*
        </label>
        <input
          type="email"
          className="form-control p-3"
          id="inputEmail"
          required
          defaultValue={currentUser.email}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCountry" className="form-label">
          {t("account.country")}*
        </label>
        <select
          id="inputCountry"
          className="form-select p-3"
          required
          onChange={handleCountryChange}
          value={selectedCountryId}>
          <option disabled value="">
            {t("account.selectCountry")}
          </option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.en}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          {t("account.city")}*
        </label>
        <select
          id="inputCity"
          className="form-select p-3"
          required
          value={currentUser.city}>
          <option disabled value="">
            {t("account.selectCity")}
          </option>
          {accountCities.map((city) => (
            <option key={city.id} value={city.en}>
              {city.en}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label">
          {t("account.phone")}
        </label>
        <input
          type="text"
          className="form-control p-3"
          id="phone"
          defaultValue={currentUser.phone}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="aboutTextarea" class="form-label">
          {t("account.about")}
        </label>
        <textarea
          class="form-control"
          id="aboutTextarea"
          rows="5"
          defaultValue={currentUser.about}></textarea>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary p-3">
          {t("account.saveChanges")}
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
