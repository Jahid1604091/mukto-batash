import React, { useEffect, useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Temperature from "./Temperature";
import { config } from "@/app.config";
import TempForecast from "../TempForecast";
import axios from "axios";
import Humidity from "./Humidity";
import AIQ from "./AIQ";
import AIQForecast from "./AIQForecast";
import { withTranslation } from "react-i18next";

const Weather = ({t}) => {
  const [key, setKey] = useState("temperature");
  const [weatherData, setWeatherData] = useState([]);

  async function fetchWeatherData() {
    const { data } = await axios(`${config.BASE_URL}/weather-forecast`);
    setWeatherData(data);
  }
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <>
      <h6 className="text-dark my-5 mb-2 fw-bold">
        {t('weather_forecast_title')}
      </h6>
      <Card className="rounded-4 bg-dark text-light">
        <Card.Body>
          <Tabs
            defaultActiveKey="temperature"
            className="mb-3 text-light border-0"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="temperature" title={t('temperature')}>
              <Temperature weatherData={weatherData} />
              <TempForecast weatherData={weatherData} />
            </Tab>

            <Tab eventKey="humidity" title={t('humidity')}>
              <Humidity weatherData={weatherData} />
            </Tab>
            <Tab eventKey="aqi" title={t('air_q_idx_title')}>
              <AIQ weatherData={weatherData} />
              <AIQForecast weatherData={weatherData} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
};

export default withTranslation()(Weather);
