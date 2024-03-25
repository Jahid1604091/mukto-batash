import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Loader from "./Loader";
import { withTranslation } from "react-i18next";

const SubNavbar = ({
  locations,
  selectedLocation,
  selectedLocationId,
  setSelectedLocationId,
  locationLoader,
  t
}) => {
  const handleChange = (e) => {
    setSelectedLocationId(e.target.value);
  };
  if (locationLoader) {
    return <Loader />;
  }
  const curr_loc = selectedLocation?.location;
  return (
    <Container fluid>
      <div className="py-4 px-4">
        <Form.Group as={Row} className="mb-1 align-items-center">
          <Form.Label column xs={6} md={2} className="text-start mb-2 mb-md-0">
            {t('select_loc')}
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
              {t('current_loc',{curr_loc})}
            </p>
          </Col>
        </Form.Group>
      </div>
    </Container>
  );
};

export default withTranslation()(SubNavbar);
