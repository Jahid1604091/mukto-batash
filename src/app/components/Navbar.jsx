"use client";
import React, { useState } from "react";
import fnLogo from "../../../public/assets/images/fn_logo.svg";
import user from "../../../public/assets/images/user.jpg";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Image from "next/image";
import { FaRegBell, FaSearch } from "react-icons/fa";
import FormModal from "./FormModal";
const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [lang, setLang] = useState("BN");
  const handleSwitch = (e) => {
    const state = e.target.checked;
    if (state) {
      setLang("BN");
    } else {
      setLang("EN");
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="px-4"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <Image
              alt="FN Logo"
              src={fnLogo}
              width="27"
              height="46"
              className="d-inline-block align-top"
            />{" "}
            <span className="h2"> মুক্ত বাতাস</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-4 ">
              <Button
                onClick={handleShow}
                aria-label="Default select example"
                className="rounded-pill bg-light text-dark"
              >
                আপনার এলাকায় সেন্সর স্থাপনের জন্য আবেদন করুন
              </Button>
            </Nav>
            <Nav className="ms-md-auto text-light my-4 ">
              <div className="d-flex">
                <p className="text-light px-2">ভাষা নির্বাচন করুন</p>
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label={lang}
                    onChange={handleSwitch}
                    checked={lang == "BN"}
                  />
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FormModal handleShow={handleShow} show={show} setShow={setShow} />
    </>
  );
};

export default NavbarComponent;
