import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Account.css";
import Passaword from "./Passaword";
import AccountUpdate from "./AccountUpdate";

const Account = () => {
  const { t } = useTranslation();

  const person = {
    name: "John Doe",
    tel: "+90 555 123 45 67",
    email: "johndoe@example.com",
    img: "https://cdn.create.vista.com/api/media/small/3971976/stock-photo-young-child",
  };
  return (
    <div className="">
      <div className="infoDiv  p-5 mb- bg-primary text-white ">
        <h2 className=" fw-bold mt-5  mx-5 pt-5 text-start">
          {t("account.myAccount")}
        </h2>
      </div>

      <div className="">
        <h1 className="text-center p-5">{t("account.myAccount")}</h1>
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
              <i class="fa-solid fa-gauge-high"></i> {t("account.dashboard")}{" "}
              <span></span>
            </button>
            <button className="button-24" role="button">
              <i class="fa-regular fa-user"></i>
              {t("account.myProfile")}
            </button>
            <button className="button-24" role="button">
              <i class="fa-solid fa-envelope"></i> {t("account.message")}{" "}
              <span></span>
            </button>
            <button className="button-24" role="button">
              <i class="fa-solid fa-unlock"></i> {t("account.changePassword")}
            </button>
          </div>
        </div>

        {/* <----------------------Form Area Start-----------------------> */}
        <div
          className="card w-75 bg-white border-0 shadow-lg p-3 mb-5 rounded mx-1"
          style={{ width: "18rem" }}>
          <AccountUpdate />

          {/* <---------------------- Password Area--------------------> */}
          <hr />
          <Passaword />
        </div>
      </div>
    </div>
  );
};

export default Account;
