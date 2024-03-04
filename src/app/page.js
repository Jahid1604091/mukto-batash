'use client'
import Image from "next/image";
// import styles from "./page.module.css";
import { useEffect } from "react";
import SubNavbar from "./components/SubNavbar";
import { Col, Container, Row } from "react-bootstrap";
import QualityIndexCard from "./components/Cards/QualityIndex";
import QualityMeterCard from "./components/Cards/QualityMeterCard";

export default function Home() {

  return (
    // <main className={styles.main}>
    // </main>
    <>
      <SubNavbar />
      <main className="bg-secondary py-4 text-light">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <QualityIndexCard/>
            </Col>
            <Col md={8}>
              <div className="d-flex justify-content-between">
                <QualityMeterCard title='ধূলিকণা' />
                <QualityMeterCard  title='আর্দ্রতা ও তাপমাত্রা' />
                <QualityMeterCard title='ক্ষতিকারক গ্যাস'  />
              </div>
            </Col>
          </Row>
        </Container>
      </main>

    </>
  );
}
