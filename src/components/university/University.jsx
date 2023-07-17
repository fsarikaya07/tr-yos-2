import "../Style/University.css";

const University = ({name, faculties, departments, image, location, address, phone}) => {
  
  return (
    <>
    {/* <------------------ Univercity Title ---------------> */}
    
    <div className="  p-1 bg-primary text-white ">
      <div className="title">
        <h2 className="page-title fw-bold mx-5">Universites</h2>
    <span className="fw-small mx-5">
      Tüm Üniversiteleri Kontrol Edebilirsiniz
    </span>
      </div>
    
  </div>
  {/* <------------------ Univercity cards ---------------> */}
     <div className="card container mb-3">
           <div className="d-flex justfiy-content-center align-items-center ">
             <div className="">
               <div className="image p-3 ">
                 <img
                   className=" border border-3 light-subtle rounded "
                   src={image}
                   alt="logo"
                 />
               </div>
             </div>
             <div className="">
               <div className="">
                 <div className="info d-flex p-2 gap-2">
                   <span className="uni-faculties rounded-1">
                   {faculties} Faculties
                 </span>
                 <span className="uni-departments rounded-1">
                 {departments} Departments
                 </span>
                 </div>
            
                 <h5 className="university-title ">{name}</h5>
                 <div className="location">
                 <i class="fa-solid fa-location-dot"></i>
                   <span className="location-name">{location}</span>
                 </div>

                 <p className="university-address">
                {address}
                 </p>
 
                   <div className="contact">
                   <div className="uni-contact  p-2  border border-warning-subtle rounded-1 w-50 ">
                   <i class="fa-solid fa-phone"></i>
                   <span > {phone}</span>  
                 </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         </>
   );
 };
  
export default University;