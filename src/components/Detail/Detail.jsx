import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "bootstrap/dist/css/bootstrap.min.css";

import "../Style/Detail.css";
import { useParams } from "react-router";
import Slider from "./Slider";
import { useYosContext } from "../../context/Context";
import axios from "axios";

const Detail = () => {

  const { t } = useTranslation();

  const [isDetail, setIsDetail] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const { id } = useParams();
  const { card, departments, universities, cities } = useYosContext();
  // console.log(id);
  //universiteye ve departman ilişkisi

  const cardApi = card.find((u) => u.id === id);

  
  
  
  const uniApi= universities.find((uni) => uni.tr === cardApi?.university.tr)
  const images = uniApi?.images || [];
  const detaiUni= departments.find((a) => a.facultyCode === cardApi?.faculty.code)
  const cityApi= cities.find((city) => city.id === cardApi?.city.code)
  
  console.log(uniApi?.logo);

  return (
    <div className="bg-light">
      {/* <---------------------SLIDER START HAKAN BILGI ---------------------> */}
      <Slider images={images} />
      {/* <---------------------SLIDER END HAKAN BILGI---------------------> */}

      <div className="container  pt-4 ">
        <div className="row">
          {/* <---------------------LEFT-CONTAİNER START ---------------------> */}
          <div id="left-container" className="col-8 ">
            <div className="d-flex justify-content-between mt-4 p-2 bg-white">
              <div className="w-75">
                <h4 className="text-start">{cardApi?.faculty.tr}</h4>
                <p></p>
                <p>
                  <i class="fa-solid fa-location-dot fa-sm"></i>{" "}
                  {cardApi?.data?.adress}
                </p>
              </div>
              <div>
                <p className="fs-3 text-primary font-weight-bold">
                  ${cardApi?.price}
                </p>
                <p className="year text-center ">{t('detail.year')}</p>
              </div>
            </div>

            <div className="bg-white p-3 mt-4 rounded">
              <h4 className="text-start fs-6 font-weight-bold">{t('detail.other')}</h4>
              <div className="bg-success bg-opacity-10 d-flex justify-content-around rounded border border-success">
                <div className="dashed text-center p-2 w-25 align-middle">
                  <p className="">{t('detail.language')}</p>
                  <p className="fs-2 text-success ">{t('detail.english')}</p>
                </div>
                <div className="dashed text-center w-25">
                  <p>{t('detail.year')}</p>
                  <p className="fs-2 text-success ">4</p>
                </div>
                <div className="dashed text-center w-25">
                  <p>{t('detail.quota')}</p>
                  {/* <p className="fs-2 text-success "> {cardApi.quota}</p> */}
                </div>
                <div className="w-25 text-center">
                  <p>{t('detail.internships')}</p>
                  <p className="fs-2 text-success ">{t('detail.yes')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded mt-4 p-2">
              <h6 className="text-start font-weight-bold">{t('detail.aboutDepartment')}</h6>
              <p className="text-muted text-start fs-7 font-weight-light">
                {/* {cardApi.history} */}
              </p>
            </div>

            <div className="bg-white mt-4 ">
              <div className="d-flex justify-content-between p-4">
                <div className="  ">
                  <a className="text-start  text-decoration-none">
                    <h4 className="fs-5">{t('detail.basicDetail')}</h4>
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
                  <h5 className="text-start  font-weight-bold">
                    {t('detail.submitReview')}
                  </h5>
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>{t('detail.name')}</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>{t('detail.email')}</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your e-Mail"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 p-2">
                      <div className="form-group">
                        <label>{t('detail.phoneNo')}</label>
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
                        <label>{t('detail.yourMessage')}</label>
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
                          {t('detail.submitReview')}
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
                  {t('detail.addFavorite')}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success  bg-opacity-10  border  border-success p-2 rounded w-50"
                  onClick={() => setIsButton(!isButton)}
                >
                    {t('detail.removeFavorite')}
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
                      src={uniApi?.logo}
                      alt="logo"
                    />
                    <div className="text-start ps-4">
                      <h4 className="">{cardApi?.university.tr}</h4>
                      <p className="fs-7">
                        <i class="fa-solid fa-location-dot fa-sm"></i>
                        {cityApi?.tr}
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
                        <h6>{t('detail.callUs')}</h6>
                        <p>
                          <a
                            className="text-decoration-none"
                            href={cardApi?.data?.phone}
                          >
                            {cardApi?.data?.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start pt-4 ps-4">
                      <div className="">
                        <i className="fa-regular fa-envelope fa-xl"></i>
                      </div>
                      <div className="text-start ps-4">
                        <h6>{t('detail.email')}</h6>
                        <p>
                          <a
                            className="text-decoration-none"
                            href="mailto:info@acibadem.edu.tr"
                          >
                            {cardApi?.data?.email}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start pt-4 ps-4">
                      <div className="">
                        <i className="fa-solid fa-globe fa-xl"></i>
                      </div>
                      <div className="text-start ps-4">
                        <h6>{t('detail.website')}</h6>
                        <p>
                          <a
                            className="text-decoration-none"
                            href={cardApi?.data?.web}
                            target="_blank"
                          >
                            {cardApi?.data?.web}
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
                        {t('detail.sendMessage')}
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
