'use client'

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
    // {
    //   id: 58,
    //   location: "Motijheel",
    //   coordinates: {
    //     lat: 23.72638500,
    //     lng: 90.42150200,
    //   },
    // },
    // {
    //   id: 59,
    //   location: "Gulshan",
    //   coordinates: {
    //     lat: 23.79461500,
    //     lng: 90.41419400,
    //   },
    // },
    // {
    //   id: 60,
    //   location: "Malibagh",
    //   coordinates: {
    //     lat: 23.748,
    //     lng: 90.4122,
    //   },
    // },
  ])
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [aiqData, setAiqData] = useState(null);

  async function fetchLocations() {
    const { data } = await axios(`${config.BASE_URL}/locations?ln=bn`)
    const locationsWithIntegerCoordinates = data.map(location => ({
      ...location,
      coordinates: {
        lat: parseFloat(location.coordinates.lat),
        lng: parseFloat(location.coordinates.lng)
      }
    }));
    setLocations(locationsWithIntegerCoordinates)
    setSelectedLocation(locationsWithIntegerCoordinates[0])
    setSelectedLocationId(locationsWithIntegerCoordinates[0].id)
  }
  useEffect(() => {
    fetchLocations()
  }, [])


  useEffect(() => {
    const selected_lcoation = locations?.find(loc => loc.id == selectedLocationId);
    setSelectedLocation(selected_lcoation)
  }, [locations, selectedLocationId])


  async function fetchAIQData() {
    const { data } = selectedLocationId && await axios(`${config.BASE_URL}/aiq-live?location=${selectedLocationId}&ln=en`)
    setAiqData(data)
  }
  useEffect(() => {
    fetchAIQData()
  }, [selectedLocationId])


  return (<>
    <SubNavbar locations={locations} selectedLocation={selectedLocation} selectedLocationId={selectedLocationId} setSelectedLocationId={setSelectedLocationId} />
    <main className="py-4 text-light" style={{ background: "#E3E3E3" }}>
      <Container>
        <Row className="align-items-center">
          <Col xl={4}>
            <QualityIndexCard aiq={aiqData?.aiq} />
          </Col>
          <Col xl={8}>
            <Row className=" align-items-center">
              <Col xl={4}>
                <DustQuality title='ধূলিকণা' airData={aiqData?.sensor_data?.air} />
              </Col>
              <Col xl={4}>
                <HumQuality title='আর্দ্রতা ও তাপমাত্রা' rht={aiqData?.sensor_data?.rht} />
              </Col>
              <Col xl={4}>
                <GasQuality title='ক্ষতিকারক গ্যাস' gasData={aiqData?.sensor_data} />

              </Col>
            </Row>

          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <h6 className="text-dark my-5 mb-2 fw-bold">ম্যাপ লোকেশন </h6>
            {locations && selectedLocation && <Map markers={locations} selectedMarker={selectedLocation} setSelectedLocationId={setSelectedLocationId} setSelectedMarker={setSelectedLocation} />}
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
