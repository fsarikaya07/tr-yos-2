


import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Select from 'react-select';

import '../Style/Departmants.css';
import { useYosContext } from '../../context/Context';
import { useLocation } from 'react-router';
import DepertmentsCard from './DepertmentsCard';

const Departments = () => {
  const location = useLocation();
  const { selectedCityIds, selectedUniversityIds, selectedDepartmentIds } = location.state;

  const { card, cities, universities, departments } = useYosContext();

  const shuffledCards = card.sort(() => 0.5 - Math.random());
  const random12Cards = shuffledCards.slice(0, 12);

  const citiesOptions = cities.map((city) => ({
    value: city.id,
    label: city.en,
    key: city.id,
  }));
  const universitiesOptions = universities.map((university) => ({
    value: university.id,
    label: university.en,
    key: university.id,
  }));
  const departmentsOptions = departments.map((department) => ({
    value: department.id,
    label: department.en,
    key: department.id,
  }));
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  const [selectedCities, setSelectedCities] = useState(
        selectedCityIds.map((cityId) => citiesOptions.find((option) => option.value === cityId))
      );
      const [selectedUniversities, setSelectedUniversities] = useState(
        selectedUniversityIds.map((universityId) =>
          universitiesOptions.find((option) => option.value === universityId)
        )
      );
      const [selectedDepartments, setSelectedDepartments] = useState(
        selectedDepartmentIds.map((departmentId) =>
          departmentsOptions.find((option) => option.value === departmentId)
        )
      );


  const handleCityChange = (selectedOptions) => {
    setSelectedCities(selectedOptions);
    const selectedCityIds = selectedOptions.map((option) => option.value);
    const filteredUnis = universities.filter((university) => selectedCityIds.includes(university.city));
    setFilteredUniversities(filteredUnis);
  };

  const handleUniversityChange = (selectedOptions) => {
    setSelectedUniversities(selectedOptions);
    const selectedUniversityIds = selectedOptions.map((option) => option.value.en);
    const filteredDeps = departments.filter((department) => selectedUniversityIds.includes(department.university));
    setFilteredDepartments(filteredDeps);
  };

  const handleDepartmentChange = (selectedOptions) => {
    setSelectedDepartments(selectedOptions);
  };

  return (
    <div>
      <div className="infoDiv mt-5 p-5 mb-2 bg-primary text-white">
        <h2 className=" page-title fw-bold mx-5">Departmants</h2>
      </div>
      <Container>
        <Row className="d-flex ">
          <div className="d-flex ">
            <Col xs={0} md={0} lg={4} xl={3}>
              <Form className="d-none d-lg-block row w-100 mt-5 p-3 text-start  bg-body rounded-4  align-items-center border d-inline-flex">
                <div className="select col-12  mb-3 ">
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
                <div className="select col-12 mb-3 ">
                  <Select
                    placeholder="Select University"
                    className="w-100"
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
                <div className="select col-12 mb-3 ">
                  <Select
                    placeholder="Select Department"
                    className="w-100"
                    options={filteredDepartments.map((department) => ({
                      value: department.id,
                      label: department.en,
                      key: department.id,
                    }))}
                    isMulti
                    value={selectedDepartments}
                    onChange={handleDepartmentChange}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <Form.Group className="flex-grow-1">
                    <Form.Control type="text" placeholder="Min Price" className="p-3" />
                  </Form.Group>
                  <span className="mx-2"></span>
                  <Form.Group className="flex-grow-1">
                    <Form.Control type="text" placeholder="Max Price" className="p-3" />
                  </Form.Group>
                </div>
        
                <div className="d-flex justify-content-between mt-2">

                </div>
                <Button variant="primary" type="submit" className="p-3 mt-4">
                  Submit Search
                </Button>
              </Form>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={9}>
              <Container className="rounded-4 mt-2 p-4">
                <Row className="g-3 d-flex flex-wrap">
                  {random12Cards?.map((item) => {
                    return (
                      <Col sm={6} md={6} lg={6} key={item.id}>
                        <DepertmentsCard item={item} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Departments;