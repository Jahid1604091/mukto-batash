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
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import NavbarComponent from "./components/Navbar";
import { initReactI18next } from "react-i18next";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [aiqData, setAiqData] = useState(null);
  const [position, setPosition] = useState(null)
  const [locationLoader, setLocationLoader] = useState(false);
  const [aiqLoader, setAiqLoader] = useState(false);

  // Locallization
  useEffect(()=>{
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      supportedLngs: ["bn", "en"],
      fallbackLng: "en",
      lng: "bn", //default
      detection: {
        order: [
          "cookie",
          "htmlTag",
          "localStorage",
          "sessionStorage",
          "path",
          "subdomain",
        ],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/assets/locales/{{lng}}/translation.json",
      }
    });
  },[])


  const [checkedA, setCheckedA] = useState(true);
  const [checkedLang, setCheckedLang] = useState('');

  useEffect(()=>{
    setCheckedLang(document.cookie.split('=')[1]?.toUpperCase());
  },[])

  const handleLanguageChange = (event) => {

    if (checkedA) {
      setCheckedA(false)
      setCheckedLang("EN");
      i18next.changeLanguage('en')
    } else {
      setCheckedA(true)
      setCheckedLang("BN");
      i18next.changeLanguage('bn')
    }
  }

  async function fetchLocations() {
    try {
      setLocationLoader(true)
      const { data } = await axios(`${config.BASE_URL}/locations?ln=bn`)
      if (data) {
        setLocations(data)
        setSelectedLocation(data[0])
        setSelectedLocationId(data[0]?.id)
        setLocationLoader(false)
      }
    } catch (error) {
      console.log(`Error in Fetching Locations ${error}`)
      setLocationLoader(false)
    }
  }
  useEffect(() => {
    fetchLocations()
  }, [])


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setPosition(pos)
        }
      );
    } else {

    }
  }, []);

  async function fetchNearestLocation() {
    const { data } = await axios(`${config.BASE_URL}/find-station?lat=${position?.lat}&long=${position?.lng}`)
    if (data) {
      setSelectedLocation(data)
      setSelectedLocationId(data?.id)
    }
    else {
      setSelectedLocation(locations[0])
      setSelectedLocationId(locations[0]?.id)
    }
  }
  useEffect(() => {
    fetchNearestLocation()
  }, [position])


  useEffect(() => {
    const selected_lcoation = locations?.find(loc => loc.id == selectedLocationId);
    selected_lcoation && setSelectedLocation(selected_lcoation)
  }, [locations, selectedLocationId])


  async function fetchAIQData() {
    try {
      setAiqLoader(true)
      const data = selectedLocationId && await axios(`${config.BASE_URL}/aiq-live?location=${selectedLocationId}&ln=en`)
      data && setAiqData(data?.data)
      setAiqLoader(false)
    } catch (error) {
      setAiqLoader(false)
      console.log(`Error in fetching AIQ data ${error}`)
    }
  }
  useEffect(() => {
    fetchAIQData()
  }, [selectedLocationId, position])

  return (<>
    <NavbarComponent checkedA={checkedA} checkedLang={checkedLang} handleLanguageChange={handleLanguageChange}/>
    <SubNavbar locationLoader={locationLoader} locations={locations} selectedLocation={selectedLocation} selectedLocationId={selectedLocationId} setSelectedLocationId={setSelectedLocationId} />
    <main className="py-4 text-light px-4" style={{ background: "#E3E3E3" }}>
      <Container fluid>
        <Row className="align-items-md-center d-flex flex-wrap">
          <Col lg={6} xl={4} className="mx-auto">
            <QualityIndexCard aiq={aiqData?.aiq} aiqLoader={aiqLoader}  checkedA={checkedA} />
          </Col>
          <Col lg={8} className="mx-auto my-2">
            <Row className="align-items-center my-2 my-lg-0">
              <Col lg={4} className="mb-2 mb-lg-0">
                <DustQuality title='ধূলিকণা' airData={aiqData?.sensor_data?.air} aiqLoader={aiqLoader} />
              </Col>
              <Col lg={4} className="mb-2 mb-lg-0">
                <HumQuality title='আর্দ্রতা ও তাপমাত্রা' rht={aiqData?.sensor_data?.rht} aiqLoader={aiqLoader} />
              </Col>
              <Col lg={4}>
                <GasQuality title='ক্ষতিকারক গ্যাস' gasData={aiqData?.sensor_data} aiqLoader={aiqLoader} />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <h6 className="text-dark my-5 mb-2 fw-bold">ম্যাপ লোকেশন </h6>
            {locations && selectedLocation && <Map markers={locations} selectedMarker={selectedLocation} setSelectedLocationId={setSelectedLocationId} setSelectedMarker={setSelectedLocation} />}
          </Col>
          <Col lg={8}>
            <h6 className="text-dark my-5 mb-2 fw-bold">আগামী ৭ দিন বাতাসের গুনগত মান যেমন থাকতে পারে</h6>
            <Weather />
          </Col>
        </Row>
      </Container>
    </main>

  </>
  );
}
