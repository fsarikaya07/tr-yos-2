import React from "react";
import "../Style/EmailSearch.css";
import { useTranslation } from "react-i18next";

const EmailSearch = () => {
  const { t } = useTranslation();
  return (
    <main className="cont">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>{t("emailSearch.workingWithUs")}</h1>
        <p className="m-5 d-block">
          {t("emailSearch.message")}
          <span className="m-2 d-block"></span>
        </p>
      </div>

      <div className="SearchBox">
        <input
          type="text"
          className="SearchBox-input"
          placeholder={t("emailSearch.enterEmail")}
        />
        <button className="SearchBox-button">
          <i className="SearchBox-icon  material-icons">
            {t("emailSearch.subscribe")}
          </i>
        </button>
      </div>
    </main>
  );
};

export default EmailSearch;
