import { Button, Form,  } from "react-bootstrap";
// import background from "../assets/graduate.jpg";

import Select from "react-select";

import "../Style/HomeSearch.css";

function HomeSearch() {
  const cities = [
    {
      value: "Ankara",
      label: "Ankara",
    },
    {
      value: "İstanbul",
      label: "İstanbul",
    },
    {
      value: "Bursa",
      label: "Bursa",
    },
    {
      value: "Balıkesir",
      label: "Balıkesir",
    },
    {
      value: "Bolu",
      label: "Bolu",
    },
  ];

  const universities = [
    {
      value: "Abant İzzet Baysal",
      label: "Abant İzzet Baysal",
    },
    {
      value: "Abdullah Gül University",
      label: "Abdullah Gül University",
    },
    {
      value: "Ethnology University",
      label: "Acıbadem University",
    },
    {
      value: "Alpaslan Türkeş Bilim ve Teknoloji",
      label: "Alpaslan Türkeş Bilim ve Teknoloji",
    },
    {
      value: "Uludağ University",
      label: "Uludağ University",
    },
  ];
  const departmants = [
    {
      value: "Turkish Folklore",
      label: "Turkish Folklore",
    },
    {
      value: "Archaeology",
      label: "Archaeology",
    },
    {
      value: "Ethnology",
      label: "Ethnology",
    },
    {
      value: "Biology",
      label: "Biology",
    },
    {
      value: "Dentist",
      label: "Dentist",
    },
  ];

  return (
    <div
      className="main bg-image text-center
       p-3 shadow-1-strong   "
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
      }}
    >
      <h1 className="title text-white m-5 text-center">Education</h1>

      <Form className="mySelect row p-2 bg-body rounded-3 text-start align-items-center  d-inline-flex shadow">
        <div className="select col-md-12 g-2 col-lg-3 my-2">
          <Select
            placeholder="Select City"
            className=" w-sm-100 w-lg-25 "
            isMulti
            options={cities}
          />
        </div>
        <div className="select col-md-12 g-2 col-lg-3 my-2 ">
          <Select
            placeholder="Select University"
            className="w-sm-100 w-lg-25"
            isMulti
            options={universities}
          />
        </div>

        <div className="select  col-md-12 g-2 col-lg-3 my-2 ">
          <Select
            placeholder="Select Departmant"
            className=" w-sm-100 w-lg-25 "
            isMulti
            options={departmants}
          />
        </div>

        <Button
          variant="primary"
          type="submit"
          className="button col-md-12 g-2 p-3 col-lg-3 my-2  "
        >
          Search
        </Button>
      </Form>
    </div>
  );
}

export default HomeSearch;
