import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { FaGoogle } from "react-icons/fa";
import ToastComponent from "../toastComponent/ToastComponent";
import * as yup from "yup";

const LogIn = () => {
  const loginScheme = yup.object({
    email: yup.string().email().required("Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .max(20, "Password must be at most 20 characters long.")
      .matches(/\d+/, "Password must contain a number.")
      .matches(/[a-z]/, "Password must contain a lowercase letter.")
      .matches(/[A-Z]/, "Password must contain an uppercase letter.")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character."),
  });

  const { t } = useTranslation();

  const {
    loginPerson,
    toggleForm,
    handleCloseModal,
    showErrorToast,
    showSuccessToast,
    setShowSuccessToast,
    setShowErrorToast,
  } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Başlangıçta boş bir hata nesnesi

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogined = await loginPerson({
      email: email,
      password: password,
    });
    if (isLogined) {
      setEmail("");
      setPassword("");
      navigate("/"); // İlgili sayfaya
      handleCloseModal(false);
    } else {
      // Hata mesajını göster

      console.log("Login failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    // Hata kontrolü ve set etme
    try {
      const fieldSchema = yup.object({
        [name]: loginScheme.fields[name],
      });
      fieldSchema.validateSync({ [name]: value });
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };
  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Kayıt başarılıysa yönlendir

  // const [showSignInModal, setShowSignInModal] = useState(false);

  // const toggleShowSignInModal = () => setShowSignInModal(!showSignInModal);

  // const location =useLocation()

  return (
    <form
      className="   p-3 w-100 h-100 login-form "
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="loginTitle">{t("logIn.signIn")}</h2>
      <div className="form-group w-100 mt-3 inputBox">
        <input
          type="text"
          className="form-control"
          id="UserEmail"
          aria-describedby="emailHelp"
          placeholder={t("logIn.userEmail")}
          value={email}
          name="email"
          // onChange={(e) => setEmail(e.target.value)} // Input alanı değiştiğinde eposta değerini güncelliyoruz.
          onChange={handleChange}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          onFocus={handleFocus}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-group w-100 mt-3 inputBox">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder={t("logIn.password")}
          value={password}
          name="password"
          onChange={handleChange}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          onFocus={handleFocus}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-5">
        {t("logIn.logIn")}
      </button>

      <div className="d-flex justify-content-around  mt-5 ">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            {t("logIn.savePassword")}
          </label>
        </div>
        <Link
          style={{ textDecoration: "none" }} //   onClick={() => forgotPassword(email)}
        >
          {t("logIn.forgetPassword")}
        </Link>
      </div>

      <div className=" h-100 text-center mt-5">
        <hr />

        <p>
          {t("logIn.signUpQuestion")}
          <button
            className="btnSgn text-primary mx-2"
            style={{ textDecoration: "none" }}
            onClick={() => toggleForm("register")}
          >
            {t("logIn.signUp")}
          </button>
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {" "}
        <button className=" btn btn-primary mt-3 py-1" type="button">
          <FaGoogle size={20} color="red" />
          <span className="mx-1 "></span>
          {t("logIn.continueWithGoogle")}
        </button>
      </div>
    </form>

    // </div>
  );
};
export default LogIn;
