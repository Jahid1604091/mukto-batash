import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Loader from "./Loader";

const SubNavbar = ({
  locations,
  selectedLocation,
  selectedLocationId,
  setSelectedLocationId,
  locationLoader,
}) => {
  const handleChange = (e) => {
    setSelectedLocationId(e.target.value);
  };
  if (locationLoader) {
    return <Loader />;
  }
  return (
    <Container fluid>
      <div className="py-4 px-4">
        <Form.Group as={Row} className="mb-1 align-items-center">
          <Form.Label column xs={6} md={2} className="text-start mb-2 mb-md-0">
            স্থান নির্বাচন করুন
          </Form.Label>

          <Col xs={6} md={4} lg={2} className="mb-2 mb-md-0">
            <select
              name=""
              id=""
              onChange={handleChange}
              className="form-select rounded-pill bg-dark text-light px-3 py-2 w-100 text-center"
            >
              {locations?.map((loc) => (
                <option
                  key={loc.id}
                  value={loc.id}
                  selected={loc.id == selectedLocationId}
                >
                  {loc.location}
                </option>
              ))}
            </select>
          </Col>

          <Col xs={12} md={{ span: 6, offset: 2 }} lg={{ span: 5, offset: 3 }}>
            <p className="mb-0 text-center text-md-end ">
              {selectedLocation?.location &&
                `আপনি এখন ${selectedLocation?.location} এর তথ্য সরাসরি দেখতে পাচ্ছেন`}
            </p>
          </Col>
        </Form.Group>
      </div>
    </Container>
  );
};

export default SubNavbar;
