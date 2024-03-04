import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const SubNavbar = () => {
  return (
    <Container>
      <div className="py-4 ">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            স্থান নির্বাচন করুন
          </Form.Label>
          <Col sm={2}>
            <Form.Select
              aria-label="Default select example"
              className="rounded-pill bg-dark text-light text-center"
            >
              <option value="1">মতিঝিল, ঢাকা</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={{ span: 5, offset: 3 }}>
            <p className="text-end px-2">
              আপনি এখন মতিঝিল, ঢাকা এর তথ্য সরাসরি দেখতে পাচ্ছেন
            </p>
          </Col>
        </Form.Group>
      </div>
    </Container>
  );
};

export default SubNavbar;
