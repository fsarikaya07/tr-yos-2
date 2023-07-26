import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const TOKEN =
  "SX2qL5O3ivipPSMIWN8nXnaLWOiy4cEq7UdgZk448T5ZDpT1qbgMIrXVNquP1CWyNAH3JvoEVqnjiyg20a17549275a86d0e835660e56847e87a"; // your token
const REGISTER_API = `https://tr-yös.com/api/v1/users/newuser.php?token=${TOKEN}`;
const LOGIN_API = `https://tr-yös.com/api/v1/users/login.php?token=${TOKEN}`;

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Sayfalar arası gezinme için `useNavigate` hook'unu kullanıyoruz
  const navigate = useNavigate();

  const register = async (sign) => {
    const createData = new FormData();
    createData.append("email", sign.email);
    createData.append("password", sign.password);
    createData.append("repassword", sign.repassword);
    createData.append("name", sign.name);

    try {
      const { data } = await axios.post(REGISTER_API, createData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      setCurrentUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      setMessage("");
      setSuccess(true);
      return true;
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "An error occurred");
      setSuccess(false);
      return false;
    }
  };

  // //! Kullanıcı girişi yapmak için asenkron bir işlev tanımlıyoruz

  const login = async (sign) => {
    const createData = new FormData();
    createData.append("email", sign.email);
    createData.append("password1", sign.password1);
    try {
      const { data } = await axios.post(`${LOGIN_API}`, createData, {
        headers: {
          "Content-Type": "multipart/create-data", // API'ye gönderilen veri tipini belirtiyoruz
        },
      });

      // Kullanıcı bilgisini tarayıcı hafızasına (sessionStorage) kaydediyoruz
      setCurrentUser(data.userID);
      sessionStorage.setItem("user", JSON.stringify(data.userID));
      setMessage("");
      setSuccess(true);
      // Giriş başarılı olduğunda ana sayfaya yönlendiriyoruz
      navigate("/");
      return true;
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.message);
      setSuccess(false);
      navigate("/");
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
    setMessage("");
    setSuccess(false);
    navigate("/");
  };

  const contextValues = {
    login,
    currentUser,
    setCurrentUser,
    register,
    logout,
    message,
    success,
    setMessage,
    setSuccess,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

// API_KEY değerini sabit olarak belirliyoruz (Güvenlik nedeniyle gerçek bir API anahtarınız olmalıdır)
// const API_KEY = "mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf";

// AuthProvider bileşeni, tüm çocuk bileşenlerin erişebileceği kimlik doğrulama bağlamını sağlar
// export function AuthProvider({ children }) {
// Kullanıcı bilgilerini ve diğer durumları tutmak için state tanımlıyoruz

// const register = async (sign) => {
//   const formData = new FormData();
//   formData.append("email", sign.email);
//   formData.append("password", sign.password);
//   formData.append("repassword", sign.repassword);
//   formData.append("name", sign.name);

//   try {
//     const { data } = await axios.post(REGISTER_API, formData, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded", // Content-Type header'ını düzelttik
//       },
//     });

//     // Hata yoksa API'den dönen verileri kullanarak kullanıcıyı kaydediyoruz
//     setCurrentUser(data.user);
//     sessionStorage.setItem("user", JSON.stringify(data.user));
//     setMessage(""); // Hata mesajını sıfırlıyoruz
//     setSuccess(true); // Başarılı işlemi belirtiyoruz
//     return true; // Başarılı olduğunu belirtmek için true döndürüyoruz
//   } catch (error) {
//     console.error(error);

//     // Hata durumunda hata mesajını setMessage ile ayarlıyoruz
//     setMessage(error.response?.data?.message || "An error occurred");
//     setSuccess(false); // Başarısız işlemi belirtiyoruz
//     return false; // Başarısız olduğunu belirtmek için false döndürüyoruz
//   }
// };

// const register = async (name, email, password, rePassword) => {
//   try {
//     const response = await axios.post(`REGISTER_API`, {
//       name,
//       email,
//       password: password,
//       rePassword: rePassword
//     });
//     if (response && response.data) {
//       setCurrentUser(response.data.user);
//       sessionStorage.setItem("user", JSON.stringify(response.data.user));
//       setMessage("");
//       setSuccess(true);
//       return true;
//     } else {
//       throw new Error("Invalid response");
//     }
//   } catch (error) {
//     console.error(error);
//     setMessage(error.message || "An error occurred");
//     setSuccess(false);
//     return false;
//   }
// };

// const register = async (sign) => {
//   // Kullanıcı bilgilerini almak için bir FormData nesnesi oluşturuyoruz
//   const formData = new FormData();
//   formData.append("email", sign.email);
//   formData.append("password", sign.password);
//   formData.append("repassword", sign.repassword);
//   formData.append("name", sign.name);
// // console.log(dataSubmit)
//   try {
//     //? Kullanıcının kaydını yapmak için `axios.post` yöntemini kullanıyoruz
//     const { data } = await axios.post(`${REGISTER_API}`, formData, {
//       headers: {
//         "Content-Type": "multipart/create-data", // API'ye gönderilen veri tipini belirtiyoruz
//       },
//     });

//     //? Kullanıcı başarıyla kaydedildiyse, dönen kullanıcı kimliğini (userId) alıp state ve sessionStorage'a kaydediyoruz
//     setCurrentUser(data.userID);
//     sessionStorage.setItem("user", JSON.stringify(data.userID));
//     setMessage("");
//     setSuccess(true);

//     //! Kullanıcı kaydı başarılı olduğunda ana sayfaya yönlendiriyoruz
//     navigate("/");
//   } catch (error) {
//     //! Hata durumunda hata mesajını konsola yazdırıyoruz
//     console.log(error);
//     //! setMessage(error.response.data.message);
//     setMessage( "Hata: ", error.response); // Hatanın ayrıntılarını konsola yazdırın
//     setSuccess(false);
//   }
// };
