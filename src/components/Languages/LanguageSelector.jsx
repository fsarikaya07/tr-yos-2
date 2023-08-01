import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("EN");

  const languageMap = {
    "EN": "English",
    "TR": "Turkish",
    "FR": "French",
    "ES": "Spanish",
    "DE": "German"
  };

  const handleLanguageChange = (selectedLanguageCode) => {
    setLanguage(selectedLanguageCode);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="language-dropdown">
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
