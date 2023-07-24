import React from "react";
import { useYosContext } from "../../context/Context";

const Compare = ({items}) => {
  // const {  } = useYosContext();
  
  
  return (
    <div>
      
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={items.imga} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{items.dep}</h5>
            
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{items.fac}</li>
              <li className="list-group-item">{items.city}</li>
              <li className="list-group-item">{items.uni}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
     
    </div>
  );
};

export default Compare;
