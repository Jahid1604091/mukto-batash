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
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "@/app.config";


export default function Home() {
  const [locations, setLocations] = useState([
    {
      id: 58,
      location: "Motijheel",
      coordinates: {
        lat: 23.72638500,
        lng: 90.42150200,
      },
    },
    {
      id: 59,
      location: "Gulshan",
      coordinates: {
        lat: 23.79461500,
        lng: 90.41419400,
      },
    },
    {
      id: 60,
      location: "Malibagh",
      coordinates: {
        lat: 23.748,
        lng: 90.4122,
      },
    },
  ])
  const [selectedLocation, setSelectedLocation] = useState(locations[1]);
  const [selectedLocationId, setSelectedLocationId] = useState(59);

  useEffect(() => {
    const selected_lcoation = locations?.find(loc => loc.id == selectedLocationId);
    setSelectedLocation(selected_lcoation)
  }, [selectedLocationId])

  const [aiqData,setAiqData] = useState(null);

  async function fetchLocations() {
    const {data} = await axios(`${config.BASE_URL}/locations?ln=bn`)
    console.log(data)
    //@after updating lng 
    // setLocations(data)
  }
  useEffect(()=>{
    fetchLocations()
  },[])

  async function fetchAIQData(location_id) {
    const {data} = await axios(`${config.BASE_URL}/aiq-live?location=${location_id}&ln=en`)
   setAiqData(data)
  }
  useEffect(()=>{
    fetchAIQData(selectedLocationId)
  },[selectedLocationId])


  return (
    // <main className={styles.main}>
    // </main>
    <>
      <SubNavbar locations={locations} selectedLocation={selectedLocation} selectedLocationId={selectedLocationId} setSelectedLocationId={setSelectedLocationId} />
      <main className="py-4 text-light" style={{ background: "#E3E3E3" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <QualityIndexCard aiq={aiqData?.aiq} />
            </Col>
            <Col md={8}>
              <div className="d-flex justify-content-between">
                <DustQuality title='ধূলিকণা' airData={aiqData?.sensor_data?.air} />
                <HumQuality title='আর্দ্রতা ও তাপমাত্রা' rht={aiqData?.sensor_data?.rht}/>
                <GasQuality title='ক্ষতিকারক গ্যাস'  gasData={aiqData?.sensor_data}/>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <h6 className="text-dark my-5 mb-2 fw-bold">ম্যাপ লোকেশন </h6>
              <Map markers={locations} selectedMarker={selectedLocation} setSelectedLocationId={setSelectedLocationId} setSelectedMarker={setSelectedLocation}/>
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
