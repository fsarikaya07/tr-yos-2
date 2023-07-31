// LanguageSelector.js
import React, { useContext, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
// import { LanguageContext } from './LanguageContext';
import "./LanguageSelector.css"

const LanguageSelector = () => {
//   const { language, setLanguage } = useContext(LanguageContext);
const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="language-dropdown">
        TR
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('tr')}>Türkçe</Dropdown.Item>
        {/* Diğer diller burada eklenebilir */}
        <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('tr')}>Türkçe</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('tr')}>Türkçe</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('tr')}>Türkçe</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
