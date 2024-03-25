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
import { withTranslation } from "react-i18next";


const NavbarComponent = ({handleLanguageChange,checkedA,checkedLang,t}) => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

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
            <span className="h2">{t('name')}</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-4 ">
              <Button
                onClick={handleShow}
                aria-label="Default select example"
                className="rounded-pill bg-light text-dark"
              >
               {t('application')}
              </Button>
            </Nav>
            <Nav className="ms-md-auto text-light my-4 ">
              <div className="d-flex">
                <p className="text-light px-2">{t('select_lang')}</p>
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label={checkedLang}
                    checked={checkedA}
                    onChange={handleLanguageChange}
                    name="checkedA"
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

export default withTranslation()(NavbarComponent);
