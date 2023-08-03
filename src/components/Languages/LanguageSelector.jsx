import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // hook'u içe aktarın
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("EN");
  const { i18n } = useTranslation(); // i18n örneğini alın

  const languageMap = {
    "EN": "English",
    "TR": "Turkish",
    "FR": "French",
    "ES": "Spanish",
    "DE": "German",
    "AR": "Arabic",
    "RU": "Russian",  
    "CN": "Chinese", 
    "PT": "Portuguese", 
    "IT": "Italian" 
  };


  const handleLanguageChange = (selectedLanguageCode) => {
    const lowerCaseLanguageCode = selectedLanguageCode.toLowerCase();
    setLanguage(selectedLanguageCode);
    i18n.changeLanguage(lowerCaseLanguageCode);
  };


  return (
    <Dropdown>
      <Dropdown.Toggle className="lang-dropdown" variant="success" id="language-dropdown">
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
