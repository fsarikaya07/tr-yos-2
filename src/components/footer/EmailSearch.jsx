import React from "react";
import "../Style/EmailSearch.css";
const EmailSearch = () => {
  return (
    
      <main className="bg-yellow">

      <div className="d-flex align-items-center justify-content-center flex-column">
    
         
         
              <h1>Are You Already Working With Us?</h1>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
     
        </div>

  
        <div className="SearchBox">
          <input
            type="text"
            className="SearchBox-input"
            placeholder="Enter Your Email"
          />
          <button className="SearchBox-button">
            <i className="SearchBox-icon  material-icons">Subscribe</i>
          </button>
        </div>
      </main>
   
  );
};

export default EmailSearch;