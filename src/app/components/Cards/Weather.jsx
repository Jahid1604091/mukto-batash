import React, { useEffect, useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Temperature from "./Temperature";
import { config } from "@/app.config";
import TempForecast from "../TempForecast";
import axios from "axios";
import Humidity from "./Humidity";
import AIQ from "./AIQ";
import AIQForecast from "./AIQForecast";

const Weather = () => {
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
    <Card className="rounded-4 bg-dark text-light">
      <Card.Body>
        <Tabs
          defaultActiveKey="temperature"
          className="mb-3 text-light border-0"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="temperature" title="তাপমাত্রা">
            <Temperature weatherData={weatherData} />
            <TempForecast weatherData={weatherData} />
          </Tab>

          <Tab eventKey="humidity" title="আর্দ্রতা">
            <Humidity weatherData={weatherData} />
          </Tab>
          <Tab eventKey="aqi" title="এয়ার কোয়ালিটি ইনডেক্স">
            <AIQ weatherData={weatherData} />
            <AIQForecast weatherData={weatherData} />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default Weather;
