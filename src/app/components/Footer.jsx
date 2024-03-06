import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fnLogotext from "../../../public/assets/images/FN_text_logo.svg";
import sc from "../../../public/assets/images/scancode.svg";
import bcc from "../../../public/assets/images/bcc.svg";
import ict from "../../../public/assets/images/ict.svg";
import idea from "../../../public/assets/images/idea.svg";
import arthor from "../../../public/assets/images/arthor.svg";
import steller from "../../../public/assets/images/steller.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-dark text-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <p>
              স্মার্ট বাংলাদেশ প্রতিষ্ঠায় পরিবেশ দূষণ পর্যবেক্ষণ ও প্রতিকারের
              লক্ষ্যে ফ্যাক্টরি নেক্সট, বাংলাদেশের একটি জনকল্যান মুলক উদ্যোগ -{" "}
            </p>
            <h5>ওপেন এয়ার প্রজেক্ট (মুক্ত বাতাস)</h5>
          </Col>
          <Col md={9}>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center mx-auto px-4">
                <Image
                  src={fnLogotext}
                  alt="FN"
                  width={130}
                  height={130}
                  className=" m-2 p-1"
                />
                <Image
                  src={sc}
                  alt="SC"
                  width={90}
                  height={90}
                  className="p-1"
                />
              </div>
              <div className="bg-light rounded-4 px-4 py-1">
                <h5 className="text-dark fw-bold">Partners</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <Image src={bcc} width={120} height={90} alt="partner" />
                  <Image src={ict} width={120} height={90} alt="partner" />
                  <Image src={idea} width={120} height={90} alt="partner" />
                  <Image src={arthor} width={120} height={90} alt="partner" />
                  <Image src={steller} width={120} height={90} alt="partner" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <p className="text-center">&copy; {new Date().getFullYear()} | Factory Next | All rights reserved</p>
    </div>
  );
};

export default Footer;
