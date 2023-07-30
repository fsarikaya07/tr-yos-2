import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
// import "./LoginAnimation.css";

const LogIn = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignInModal, setShowSignInModal] = useState(false);

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

  const handleLoginSuccess = () => {
    setShowSignInModal(false); // Modalı kapat
  };

  const toggleShowSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  return (
    <motion.div
      className="box container d-flex flex-column align-items-center mt-3 col-4 h-75 login-container center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <motion.form
        className="form px-3 w-100 h-100 login-form"
        onSubmit={(e) => handleSubmit(e)}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="mt-1">Sign In</h2>
        <motion.div
          className="form-group w-100 mt-3 inputBox"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="text"
            className="form-control"
            id="UserEmail"
            aria-describedby="emailHelp"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>UserEmail</span>
          <i></i>
        </motion.div>
        <motion.div
          className="form-group w-100 mt-3 inputBox"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
          <i></i>
        </motion.div>
        <motion.div
          className="links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#">Forget Password</a>
          <a href="#">Sign Up</a>
        </motion.div>
        <motion.input
          type="submit"
          value="Sign In"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </motion.form>

      <Button
        type="submit"
        className="btn btn-primary w-100 mt-5"
        onClick={handleLoginSuccess}
      >
        Log In
      </Button>

      {/* Diğer kısımlar burada devam ediyor */}
      {/* ... */}

      {/* Modal bileşenini ekleyelim */}
      <Modal show={showSignInModal} onHide={toggleShowSignInModal}>
        {/* Buraya modal içeriğini yazabilirsiniz */}
      </Modal>
    </motion.div>
  );
};

export default LogIn;
