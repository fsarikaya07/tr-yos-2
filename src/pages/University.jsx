import "../components/Style/University.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useYosContext } from "../context/Context";
import UniversityCard from "../components/university/UniversityCard";

const University = () => {
  const { t } = useTranslation();

  const { universities } = useYosContext();
  const itemsPerPage = 10; // Her sayfada gösterilecek üniversite sayısı
  const [currentPage, setCurrentPage] = useState(1);

  // Aktif sayfada gösterilecek üniversiteleri hesaplayan fonksiyon
  const getVisibleUniversities = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return universities.slice(startIndex, endIndex);
  };

  // Toplam sayfa sayısını hesaplayan fonksiyon
  const totalPages = Math.ceil(universities.length / itemsPerPage);

  // Sayfa değiştirme işlevi
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Sayfa numaralarının listesi
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="">
      <div className="info-div p-5 mb-2 bg-primary text-white ">
        <h2 className=" page-title mt-5 fw-bold mx-5">{t("universityPage.title")}</h2>
        <span className="fw-small mx-5">
          {t("universityPage.description")}
        </span>
      </div>

      {/* Üniversite kartları */}
      <div className="uni-container ">
        {getVisibleUniversities().map((item) => (
          <UniversityCard {...item} key={item.id} />
        ))}
      </div>

      {/* Sayfa numaralarının butonları */}
      <div className="pagination p-4">
  <div className="">
    <button
      className="back "
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <i className="bi bi-caret-left-fill"></i>
      {t("universityPage.back")}
    </button>
  </div>
  
  <div className="numbercol">
    {pageNumbers.map((number, index) => {
      if (number === 1 || number === 2 || number === 3 ||  number >= currentPage - 1 && number <= currentPage + 1 || number === totalPages - 1 || number === totalPages) {
        return (
          <React.Fragment key={number}>
            {index > 0 && " "} {/* Boşluk eklemek için */}
            <button
              onClick={() => handlePageChange(number)}
              className={`page-button ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </button>
          </React.Fragment>
        );
      } else if (index === 3 || index === pageNumbers.length - 4) {
        return (
          <span key={number} className="page-ellipsis">
            ...
          </span>
        );
      }
      
      return null;
    })}
  </div>
  
  <div className="pagination-buttons">
    <button
      className="next"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      {t("universityPage.next")}
      <i className="bi bi-caret-right-fill"></i>
    </button>
  </div>
</div>
    </div>
  );
};

export default University;