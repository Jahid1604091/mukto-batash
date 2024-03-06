"use client";
import React, { useState } from "react";
import fnLogo from "../../../public/assets/images/fn_logo.svg";
import user from "../../../public/assets/images/user.jpg";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import { FaRegBell, FaSearch } from "react-icons/fa";
import FormModal from "./FormModal";
const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [lang,setLang] = useState('BN');
  const handleSwitch = e =>{
    const state = e.target.checked;
    if(state){
      setLang('BN')
    }
    else{
      setLang('EN')
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
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
          <Nav className="mx-auto">
            <Button
              onClick={handleShow}
              aria-label="Default select example"
              className="rounded-pill bg-light text-dark"
            >
              আপনার এলাকায় সেন্সর স্থাপনের জন্য আবেদন করুন
            </Button>
          </Nav>

          <Nav className="ms-auto text-light">
            <p className="text-light px-2">ভাষা নির্বাচন করুন</p>
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label={lang}
                onChange={handleSwitch}
                checked={lang == 'BN'}
              />
            </Form>
          </Nav>

          {/* <Nav className="m">
            <Nav.Link href="#deets">
              <div className="border rounded-circle bg-light text-dark py-1 px-2">
                <FaRegBell size={15} />
              </div>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <div className="border rounded-circle bg-light text-dark py-1 px-2">
                <FaSearch size={15} />
              </div>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <div className="border rounded-circle bg-light text-dark p-1">
                <Image
                  src={user}
                  height={25}
                  width={25}
                  alt="user"
                  className="rounded-circle"
                />
              </div>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <FormModal handleShow={handleShow} show={show} setShow={setShow} />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
