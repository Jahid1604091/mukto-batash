import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const SubNavbar = ({
  locations,
  selectedLocation,
  selectedLocationId,
  setSelectedLocationId,
}) => {
  const handleChange = (e) => {
    setSelectedLocationId(e.target.value);
  };

  return (
    <Container>
      <div className="py-4">
        <Form.Group
          as={Row}
          className="mb-1 justify-content-md-center"
          controlId="formHorizontalEmail"
        >
          <Form.Label column sm={6} md={2}>
            স্থান নির্বাচন করুন
          </Form.Label>
          
          <Col md={2}>
              <select name="" id="" onChange={handleChange}  className="rounded-pill bg-dark text-light px-5 py-2">
                {locations?.map((loc) => (
                  <option key={loc.id} value={loc.id} selected={loc.id == selectedLocationId}>{loc.location}</option>
                ))}
              </select>
          </Col>

          <Col md={{ span: 5, offset: 3 }}>
            <p className="text-end px-2">
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
