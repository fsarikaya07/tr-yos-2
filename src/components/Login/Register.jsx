import React, { useState } from "react";
import "../Style/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { Modal } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import * as yup from "yup";

const Register = () => {
  const loginScheme = yup.object({
    name: yup.string()
    .max(10, "Username must be less than 10 characters.")
    .required("Username is required."),
  email: yup.string().email().required("Email is required."),
  password1: yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .max(20, "Password must be at most 20 characters long.")
    .matches(/\d+/, "Password must contain a number.")
    .matches(/[a-z]/, "Password must contain a lowercase letter.")
    .matches(/[A-Z]/, "Password must contain an uppercase letter.")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character."),
  password2: yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .max(20, "Password must be at most 20 characters long.")
    .matches(/\d+/, "Password must contain a number.")
    .matches(/[a-z]/, "Password must contain a lowercase letter.")
    .matches(/[A-Z]/, "Password must contain an uppercase letter.")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character."),
  });

  const { t } = useTranslation();

  const { registerPerson, toggleForm, handleCloseModal } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isRegistered = await registerPerson({
      name: name,
      email: email,
      password1: password1,
      password2: password2,
    });

    // Kayıt başarılıysa yönlendir
    if (isRegistered) {
      setName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      navigate("/"); // İlgili sayfaya yönlendir
      handleCloseModal(false);
    } else {
      // Hata mesajını göster
      console.log("Registration failed!");
    }
  };

  // const [showSignUpModal, setShowSignUpModal] = useState(false);

  // const toggleShowSignUpModal = () => setShowSignUpModal(!showSignUpModal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Input alanı değiştiğinde, errors nesnesini güncelliyoruz.
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    // Input değerini güncelliyoruz.
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password1") {
      setPassword1(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
    // Hata mesajlarını kontrol ediyoruz.
    try {
      const fieldSchema = yup.object({
        [name]: loginScheme.fields[name],
      });
      fieldSchema.validateSyncAt(name, { [name]: value });
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };


  return (
    // <div className="container d-flex flex-column align-items-center mt-5 col-4 h-75 py-5 container-signup ">

    <form className="  p-3  h-100 " onSubmit={handleSubmit}>
      <h2 className="registerTitle">{t("register.signUp")}</h2>
      <div className="form-group w-100 mt-3 inputBox">
        <input
          type="text"
          className="form-control"
          id="yourname"
          aria-describedby="emailHelp"
          placeholder={t("register.userName")}
          // onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          onChange={handleChange}
        />
           {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div className="form-group w-100 mt-3 inputBox">
        <input
          type="email"
          className="form-control"
          id="emial"
          aria-describedby="emailHelp"
          placeholder={t("register.userEmail")}
  
          // onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          onChange={handleChange}
        />
               {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-group w-100 mt-3 inputBox">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder={t("register.password")}
                // onChange={(e) => setPassword1(e.target.value)}
          value={password1}
          name="password1"
          onChange={handleChange}
        />
         {errors.password1 && (
          <p className="error-message">{errors.password1}</p>
        )}
      </div>
      <div className="form-group w-100 mt-3 inputBox">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder={t("register.rePassword")}
          // onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          name="password2"
          onChange={handleChange}
        />
          {errors.password2 && (
          <p className="error-message">{errors.password2}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-5 mb-5">
        {t("register.signUp")}
      </button>
      <hr />
      <div className="d-flex justify-content-around  mt-5 ">
        <div className="">
          <div>
            {t("register.signInQuestion")}{" "}
            <button
              onClick={() => toggleForm("login")}
              className=" btnRgs text-primary mx-2"
              style={{ textDecoration: "none" }}
            >
              {t("register.signIn")}
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button className=" btn btn-primary mt-3 py-1" type="button">
          <FaGoogle size={20} color="red" />
          <span className="mx-1 "></span>
          {t("register.continueWithGoogle")}
        </button>
      </div>
    </form>
  );
};

export default Register;
