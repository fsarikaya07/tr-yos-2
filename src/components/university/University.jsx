import "../Style/University.css";

// import {BsFillTelephoneFill} from "react-icons/ai"
const University = () => {
    return (
      <div className="">
        <div className="p-5 mb-2 bg-primary text-white ">
          <h2 className="page-title fw-bold mx-5">Universites</h2>
          <span className="fw-small mx-5">
            Tüm Üniversiteleri Kontrol Edebilirsiniz eN
          </span>
        </div>
        {/* Univercity cards */}
        <div className="card container mb-3">
            <div className="d-flex justfiy-content-center align-items-center ">
              <div className="">
                <div className="image p-3 ">
                  <img
                    className=" border border-3 light-subtle rounded "
                    src="https://www.tr-yös.com/test/6984215678913/logo/afyon-kocatepe-universitesi-logo-1683763420141.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="info d-flex p-2 gap-2">
                    <span  className="uni-faculties rounded-1">
                    1 Faculties
                  </span>
                  <span className="uni-departments rounded-1">
                  2 Departments
                  </span>
                  </div>
             
                  <h5 className="university-title ">AFYON KOCATEPE UNIVERSITY</h5>
                  <div className="location">
                  <i class="fa-solid fa-location-dot"></i>
                    <span className="location-name">Afyonkarahisar</span>
                  </div>
                  
                  
                  <p className="university-address">
                 Afyon Kocatepe Üniversitesi Rektörlüğü ANS Kampusü Gazlıgöl
                    Yolu Üzeri AFYONKARAHİSAR
                  </p>
  
                    <div className="contact">
                    <div className="uni-contact  p-2  border border-warning-subtle rounded-1 w-50 ">
                    <i class="fa-solid fa-phone"></i>
                    <span > (272) 218-1195</span>
                    
                  </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
export default University;