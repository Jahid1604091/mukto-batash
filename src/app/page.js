'use client'
// import styles from "./page.module.css";
import SubNavbar from "./components/SubNavbar";
import { Col, Container, Row } from "react-bootstrap";
import QualityIndexCard from "./components/Cards/QualityIndex";
import DustQuality from "./components/Cards/DustQuality";
import HumQuality from "./components/Cards/HumQuality";
import GasQuality from "./components/Cards/GasQuality";
import Map from "./components/Map";
import Weather from "./components/Cards/Weather";


export default function Home() {

  return (
    // <main className={styles.main}>
    // </main>
    <>
      <SubNavbar />
      <main className="py-4 text-light" style={{ background: "#E3E3E3" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <QualityIndexCard />
            </Col>
            <Col md={8}>
              <div className="d-flex justify-content-between">
                <DustQuality title='ধূলিকণা' value={193} />
                <HumQuality title='আর্দ্রতা ও তাপমাত্রা' value={233} />
                <GasQuality title='ক্ষতিকারক গ্যাস' value={523} />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <h6 className="text-dark my-5 mb-2 fw-bold">ম্যাপ লোকেশন </h6>
              <Map />
            </Col>
            <Col md={8}>
              <h6 className="text-dark my-5 mb-2 fw-bold">আগামী ৭ দিন বাতাসের গুনগত মান যেমন থাকতে পারে</h6>
              <Weather />
            </Col>
          </Row>
        </Container>
      </main>

    </>
  );
}
