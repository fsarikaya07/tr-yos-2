import React, { useState } from "react";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap"; // Modal bileşenini import edelim
import { useAuthContext } from "../../context/AuthContext";


const LogIn = () => {

const { login } = useAuthContext();
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogined = await login({
      email: email,
      password: password,
     
    });
    if (isLogined) {
      setEmail("");
      setPassword("");
      navigate("/"); // İlgili sayfaya yönlendir
    } else {
      // Hata mesajını göster
      console.log("Login failed!");
    }
  };

    // const isMessage = await message({
    //   name: name,
    //   email: email,
     
    // });
    // const isSuccess = await success({
    //   name: name,
    //   email: email,
     
    // });

    // Kayıt başarılıysa yönlendir
 


 const [showSignInModal, setShowSignInModal] = useState(false);

  const toggleShowSignInModal = () => setShowSignInModal(!showSignInModal);

// const location =useLocation()

  return (
    <div className="container  d-flex flex-column align-items-center mt-5   col-4 h-75  login-container center">
      <h2 className="mt-4">Sing In</h2>
      <form
        className=" py-5  px-3 w-100 h-100 position-relative "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group w-100 mt-3">
          <input
            type="text"
            className="form-control"
            id="UserEmail"
            aria-describedby="emailHelp"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Input alanı değiştiğinde eposta değerini güncelliyoruz.
               />
        </div>
        <div className="form-group w-100 mt-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Input alanı değiştiğinde şifre değerini güncelliyoruz.
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-5">
          Log In
        </button>

        <div className="d-flex justify-content-around  mt-5 ">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Save Password
            </label>
          </div>
          <Link
            style={{ textDecoration: "none" }} //   onClick={() => forgotPassword(email)}
          >
           Forget Password
          </Link>
        </div>

        <div className=" h-100 text-center mt-5">
          <hr />
          <p>
            Don't have an account yet?
            {/* <Link to="/Register" className="text-primary" style={{ textDecoration: 'none' }}> Sign Up</Link> */}
            <Button
              className="btn btn-outline-light my-4 py-1 px-1 m-1 flex-wrap"
              type="submit"
              variant="info"
                    onClick={toggleShowSignInModal} // Modalı göstermek için fonksiyonu çağıralım
            >
              
              Sing Up
            </Button>
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <button
            className=" btn btn-primary mt-3 py-1"
            type="button"
            // onClick={() => signUpProvider()}
          >
            Continue with Google
            {/* <GoogleIcon color="currentColor" /> */}
          </button>
        </div>
      </form>

      {/* Modal bileşenini ekleyelim */}
      <Modal show={showSignInModal} onHide={toggleShowSignInModal}>
        {/* Buraya modal içeriğini yazabilirsiniz */}
      </Modal>
    </div>
  );
};
export default LogIn;