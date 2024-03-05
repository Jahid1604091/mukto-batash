'use client'
// import styles from "./page.module.css";
import SubNavbar from "./components/SubNavbar";
import { Col, Container, Row } from "react-bootstrap";
import QualityIndexCard from "./components/Cards/QualityIndex";
import DustQuality from "./components/Cards/DustQuality";
import HumQuality from "./components/Cards/HumQuality";
import GasQuality from "./components/Cards/GasQuality";

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
                <DustQuality title='ধূলিকণা' value={193} />
                <HumQuality title='আর্দ্রতা ও তাপমাত্রা' value={233}/>
                <GasQuality title='ক্ষতিকারক গ্যাস' value={523}/>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

    </>
  );
}
