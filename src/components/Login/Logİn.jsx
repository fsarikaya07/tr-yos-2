import React, { useState } from "react";
import "../Style/Login.css";
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import GoogleIcon from "../../assets/icons/GoogleIcon";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { AuthContext } from "../../context/AuthContext";



const LogIn = () => {
  // const { user, setUser } = AuthContext()
//   const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext);


  const [showSignUpModal, setShowSignUpModal] = useState(false);


  const toggleShowSignUpModal = () => setShowSignUpModal(!showSignUpModal);


const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // signIn(email, password); // LoginContexte yazdığımız signIn metodunu çağırdık.
    navigate('/Account');
  };


  return (
    <div className="container  d-flex flex-column align-items-center mt-5   col-4 h-75  login-container">
      <h2 className="mt-4" >Sing In</h2>              
      <form className=" py-5  px-3 w-100 h-100 position-relative " onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group w-100">
          <input
            type="text"
            className="form-control  "
            id="Username"
            aria-describedby="emailHelp"
            placeholder="Username"
            // value={user?.email}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group w-100 mt-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            // value={user?.password}
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
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
          <Link style={{ textDecoration: 'none' }} //   onClick={() => forgotPassword(email)}
            >Forget Password</Link>
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
                      // className="btn btn-outline-light my-4 py-2 px-4 m-1 flex-wrap"
                      // type="submit"
                      // variant="info"
                      // variant="primary"
                      // className="btn btn-outline-light my-2 py-2 m-1 flex-wrap"
                      onClick={toggleShowSignUpModal}
                    >
                      {/* Add icon component here */}
                      {/* <FaUserPlus />  */}
                      Sing Up
                    </Button>
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center"> <button
            className=" btn btn-primary mt-3 py-1"
            type="button"
            // onClick={() => signUpProvider()}
          >
            Continue with Google
            {/* <GoogleIcon color="currentColor" /> */}
          </button></div>
       
      </form>
      
    </div>
  );
};

export default LogIn;
