import React, { useState } from "react";
import "../Style/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Modal } from "react-bootstrap";

const Register = () => {
  const { register } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isRegistered = await register({
      name: name,
      email: email,
      password: password,
      repassword: rePassword,
    });
    // const isMessage = await message({
    //   message     
    // });
    // const isSuccess = await success({
    //   success     
    // });

    // Kayıt başarılıysa yönlendir
    if (isRegistered) {
      setName("");
      setEmail("");
      setPassword("");
      setRePassword("");
      navigate("/"); // İlgili sayfaya yönlendir
    } else {
      // Hata mesajını göster
      console.log("Registration failed!")
    }
  };
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleShowSignUpModal = () => setShowSignUpModal(!showSignUpModal);

  return (
    <div className="container d-flex flex-column align-items-center mt-5 col-4 h-75 py-5 container-signup ">
      <h2>Sign Up</h2>
      <form
        className="border py-5 px-3 w-100 h-100 "
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3 ">
          <input
            type="text"
            className="form-control"
            id="yourname"
            aria-describedby="emailHelp"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group w-100">
          <input
            type="email"
            className="form-control"
            id="emial"
            aria-describedby="emailHelp"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group w-100 mt-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group w-100 mt-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="RePassword"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>

        <button type="submit"
          
         className="btn btn-primary w-100 mt-3">
          Sign Up
        </button>

        <div className="">
          <hr />
          <div className="">
            <p>
              Already have an account?{" "}
              <Link to="/Login" className="text-primary" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </form>
      <Modal 
      // show={success} onHide={() => { /* Function to hide modal */ }}
      show={showSignUpModal} onHide={toggleShowSignUpModal}
      >
        {/* Modal content here */}
      </Modal>
    </div>
  );
};

export default Register;
