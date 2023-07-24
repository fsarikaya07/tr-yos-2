import "../Style/University.css";


const UniversityCard = ({logo,city,tr,data}) => {
    // const { card,cities, universities, departments } = useYosContext();
    console.log(tr)
  return (
    <div>
        <div className=" container p-2">
          <div className="card mb-3">
            <div className="d-flex justfiy-content-center align-items-center ">
              <div className="üni-logo">
                <div className="image  p-3 ">
                  <img
                    className="logo border border-3 light-subtle rounded"
                    src={logo}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="üni-info-caption">
                <div className="üni-info">
                <div className="">
                  <div className="info d-flex p-2 gap-2">
                    <span  className="uni-faculties rounded-1">
                    1 Faculties
                  </span>
                  <span className="uni-departments rounded-1">
                  2 Departments
                  </span>
                  </div>
             
                  <h5 className="university-title ">{tr}</h5>
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
        </div> 
      </div>
  )
}
    
export default UniversityCard