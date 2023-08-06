import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // hook'u içe aktarın
import "./LanguageSelector.css";
import { useLocation } from "react-router";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("EN");
  const { i18n } = useTranslation(); // i18n örneğini alın

  const languageMap = {
    EN: "English",
    TR: "Turkish",
    FR: "French",
    ES: "Spanish",
    DE: "German",
    AR: "Arabic",
    RU: "Russian",
    CN: "Chinese",
    PT: "Portuguese",
    IT: "Italian",
  };

  const handleLanguageChange = (selectedLanguageCode) => {
    const lowerCaseLanguageCode = selectedLanguageCode.toLowerCase();
    setLanguage(selectedLanguageCode);
    i18n.changeLanguage(lowerCaseLanguageCode);
  };
  const location = useLocation();
  return (
    <Dropdown>
      <Dropdown.Toggle
        // className=
        className={`nav-link ${location.pathname === "/" ? "text-danger" : "#34b3b3"}`}
        variant="success"
        id="language-dropdown"
      >
        {language}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.entries(languageMap).map(([code, name]) => (
          <Dropdown.Item key={code} onClick={() => handleLanguageChange(code)}>
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
