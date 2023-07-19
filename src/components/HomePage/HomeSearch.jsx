import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { useYosContext } from "../../context/Context";
import "../Style/HomeSearch.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import HomeSlider from "../HomePage/HomeSlider";
function HomeSearch() {
  const { card, cities, universities, departments } = useYosContext();
  const navigate = useNavigate();
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  const handleCityChange = (selectedOptions) => {
    setSelectedCities(selectedOptions);
    const selectedCityIds = selectedOptions.map((option) => option.value);
    const filteredUnis = universities.filter((university) =>
      selectedCityIds.includes(university.city)
    );
    setFilteredUniversities(filteredUnis);
  };

  const handleUniversityChange = (selectedOptionss) => {
    setSelectedUniversities(selectedOptionss);
    const selectedUniversityIds = selectedOptionss.map(
      (optionn) => optionn.value.en
    );
    const filteredDeps = departments.filter((department) =>
      selectedUniversityIds.includes(department.university)
    );

    setFilteredDepartments(filteredDeps);
  };

  return (
    <div className="main  bg-image text-center p-3  shadow-1-strong">
      <div className="Sliderdiv">
        <HomeSlider />
      </div>
      <h1 className="title text-white m-5 text-center">Education</h1>
      <Form className="mySelect row p-2 bg-body rounded-3 text-start align-items-center d-inline-flex shadow">
        <div className="select col-md-12 g-2 col-lg-3 my-2">
          <Select
            placeholder="Select City"
            onChange={handleCityChange}
            options={cities.map((city) => ({
              value: city.id,
              label: city.en,
              key: city.id,
            }))}
            isMulti
            value={selectedCities}
          />
        </div>
        <div className="select col-md-12 g-2 col-lg-3 my-2">
          <Select
            placeholder="Üniversite Seçin"
            onChange={handleUniversityChange}
            options={filteredUniversities.map((university) => ({
              value: university.id,
              label: university.en,
              key: university.id,
            }))}
            isMulti
            value={selectedUniversities}
          />
        </div>
        <div className="select col-md-12 g-2 col-lg-3 my-2">
          <Select
            placeholder="Select Department"
            className="w-sm-100 w-lg-25"
            options={filteredDepartments.map((department) => ({
              value: department.id,
              label: department.en,
              key: department.id,
            }))}
            isMulti
          />
        </div>
        <Button
          variant="primary"
          type="submit"
          className="button col-md-12 g-2 p-3 col-lg-3 my-2"
          onClick={() => navigate("/departmants")}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}

export default HomeSearch;
