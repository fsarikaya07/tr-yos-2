import React from "react";
import "./Style/Login.css";
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  //   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signIn(email, password); // AuthContexte yazdığımız signIn metodunu çağırdık.
//   };


  return (
    <div className="container  d-flex flex-column align-items-center mt-5   col-4 h-75  login-container">
      <h2 className="mt-4" >Sing In</h2>              
      <form className=" py-5  px-3 w-100 h-100 position-relative ">
        <div className="form-group w-100">
          <input
            type="text"
            className="form-control  "
            id="Username"
            aria-describedby="emailHelp"
            placeholder="Username"
            //   onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group w-100 mt-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
              //   onChange={(e) => setPassword(e.target.value)}
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
          <p   //   onClick={() => forgotPassword(email)}
            >Forget Password</p>
        </div>

        <div className=" h-100 text-center mt-5">
          <hr />
          <p>
            Don't have an account yet?
               <span >Sign Up</span>
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center"> <button
            className=" btn btn-primary mt-3 py-1"
            type="button"
            // onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button></div>
       
      </form>
    </div>
  );
};

export default Login;
