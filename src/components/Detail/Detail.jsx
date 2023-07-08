import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Style/Detail.css";
import { useParams } from "react-router";

const Detail = ({universities}) => {
  const [isDetail, setIsDetail] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const { id } = useParams();
  const university = universities.find((u) => u.id === parseInt(id));
  
  return (
    <div className="bg-light">
      
      {/* <---------------------DETAİL START ---------------------> */}
      <div className="container  pt-4 ">
        <div className="row">
          {/* <---------------------LEFT-CONTAİNER START ---------------------> */}
          <div id="left-container" className="col-8 ">
            <div className="d-flex justify-content-between mt-4 p-2 bg-white">
              <div className="w-75">
                <h4 className="text-start">
                  Biomedical Engineering 20% Scholarship 
                </h4>
                <p>{university.deparments}</p>
                <p>
                  <i class="fa-solid fa-location-dot fa-sm"></i> {university.address}
                </p>
              </div>
              <div>
                <p className="fs-3 text-primary font-weight-bold">${university.tuitionFee}</p>
                <p className="year text-center ">Year</p>
              </div>
            </div>

            <div className="bg-white p-3 mt-4 rounded">
              <h4 className="text-start fs-6 font-weight-bold">Other</h4>
              <div className="bg-success bg-opacity-10 d-flex justify-content-around rounded border border-success">
                <div className="dashed text-center p-2 w-25 align-middle">
                  <p className="">Language</p>
                  <p className="fs-2 text-success ">English</p>
                </div>
                <div className="dashed text-center w-25">
                  <p>Year</p>
                  <p className="fs-2 text-success ">4</p>
                </div>
                <div className="dashed text-center w-25">
                  <p>Quota</p>
                  <p className="fs-2 text-success "> {university.quota}</p>
                </div>
                <div className="w-25 text-center">
                  <p>Internships</p>
                  <p className="fs-2 text-success ">Yes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded mt-4 p-2">
              <h6 className="text-start font-weight-bold">About Department</h6>
              <p className="text-muted text-start fs-7 font-weight-light">
              {university.history}
              </p>
            </div>

            <div className="bg-white mt-4 ">
              <div className="d-flex justify-content-between p-4">
                <div className="  ">
                  <a className="text-start  text-decoration-none">
                    <h4 className="fs-5">Basic Detail</h4>
                  </a>
                </div>
                <div onClick={() => setIsDetail(!isDetail)}>
                  <i class="fa-solid fa-arrow-up fa-lg"></i>
                </div>
              </div>
              {isDetail && (
                <div>
                  <div className="p-4">
                    <div className=" d-flex  justify-content-between ">
                      <div className=" bg-light p-2 w-25 m-1">
                        <div className="p-4">
                          <div className="">
                            <i className="fa-solid fa-xl fa-bed"></i>
                          </div>
                          <div className="">3 </div>
                        </div>
                      </div>
                      <div className=" bg-light p-2 w-25 m-1">
                        <div className="p-4">
                          <div className="">
                            <i className="fa-solid fa-xl fa-layer-group"></i>
                          </div>
                          <div className="">4,240</div>
                        </div>
                      </div>
                      <div className=" bg-light p-2 w-25 m-1">
                        <div className="p-4">
                          <div className="">
                            <i className="fa-solid fa-xl fa-warehouse"></i>
                          </div>
                          <div className="">1 </div>
                        </div>
                      </div>
                      <div className=" bg-light p-2 w-25 m-1">
                        <div className="p-4">
                          <div className="">
                            <i className="fa-solid fa-xl fa-building-circle-check"></i>
                          </div>
                          <div className="">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white mt-4 mb-4 p-4 ">
              <div className="text-start ">
                <form className="">
                  <h5 className="text-start  font-weight-bold">Submit Review</h5>
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your eMail"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>Phone No.</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Contact"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>Rating</label>
                        <select className="form-control">
                          <option value="1">1 : Very Poor</option>
                          <option value="2">2 : Poor</option>
                          <option value="3">3 : Good</option>
                          <option value="4">4 : Very Good</option>
                          <option value="5">5 : Superb</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 p-2">
                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea
                          className="form-control"
                          placeholder="Messages"
                          style={{ height: 200 }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group ">
                        <button
                          className="btn btn-primary p-3 m-2"
                          type="submit"
                        >
                          Submit Review
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <---------------------LEFT-CONTAİNER END ---------------------> */}

          {/* <---------------------RİGHT-CONTAİNER START ---------------------> */}

          <div id="right-container " className="col">
            <div className="bg-white mt-4 p-4 text-start ">
              {isButton ? (
                <button
                  type="button"
                  className="btn btn-danger  bg-opacity-10  border  border-danger p-2 rounded w-50"
                  onClick={() => setIsButton(!isButton)}
                >
                  Add Favorite
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success  bg-opacity-10  border  border-success p-2 rounded w-50"
                  onClick={() => setIsButton(!isButton)}
                >
                  Remove Favorite
                </button>
              )}
            </div>
            <div>
              <div className=" mb-4">
                <div>
                  <div className="d-flex justify-content-between align-items-center bg-white p-2 mt-4 w-100 border-bottom border-2 border-dark">
                    <img
                      style={{ width: 75, height: 75 }}
                      className="border rounded-circle p-2 "
                      src="https://upload.wikimedia.org/wikipedia/tr/thumb/2/2a/AcibademUniLogoOrjinal.png/200px-AcibademUniLogoOrjinal.png"
                      alt="logo"
                    />
                    <div className="text-start ps-4">
                      <h4 className="">
                      {university.name}
                      </h4>
                      <p className="fs-7">
                        <i class="fa-solid fa-location-dot fa-sm"></i> {university.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="">
                    <div className="d-flex justify-content-start pt-4 ps-4">
                      <div className="">
                        <i className="fa-solid fa-phone-volume fa-xl  "></i>
                      </div>
                      <div className="text-start ps-4">
                        <h6>Call Us</h6>
                        <p>
                          <a
                            className="text-decoration-none"
                            href={university.contact.phone}
                          >
                            {university.contact.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start pt-4 ps-4">
                      <div className="">
                        <i className="fa-regular fa-envelope fa-xl"></i>
                      </div>
                      <div className="text-start ps-4">
                        <h6>E-Mail</h6>
                        <p>
                          <a
                            className="text-decoration-none"
                            href="mailto:info@acibadem.edu.tr"
                          >
                            {university.contact.email}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start pt-4 ps-4">
                      <div className="">
                        <i className="fa-solid fa-globe fa-xl"></i>
                      </div>
                      <div className="text-start ps-4">
                        <h6>Website</h6>
                        <p>
                          <a
                            className="text-decoration-none"
                            href="https://www.acibadem.edu.tr"
                            target="_blank"
                          >
                            https://www.acibadem.edu.tr
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="p-2 ">
                      <button
                        type="button"
                        className="btn btn-outline-success w-75 bg-success bg-opacity-10 "
                      >
                        <i class="fa-regular fa-paper-plane fa-beat p-1"></i>
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <---------------------RİGHT-CONTAİNER END ---------------------> */}
        </div>
      </div>
      {/* <---------------------DETAİL END ---------------------> */}
    </div>
  );
};

export default Detail;
