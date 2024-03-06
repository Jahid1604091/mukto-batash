import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Temperature from "./Temperature";

const Weather = () => {
  const [key, setKey] = useState("temperature");
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
            <Temperature />
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "#E3AE09",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sun
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>25 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Mon
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "#eebf31",
                  }}
                ></div>
                <p>21 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Tue
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>25 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Wed
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "#E3AE09",
                  }}
                ></div>
                <p>23 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Thu
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "#E3AE09",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Fri
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "#6c5719",
                  }}
                ></div>
                <p>19 &deg; C</p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="আর্দ্রতা">
            আর্দ্রতা
          </Tab>
          <Tab eventKey="aqi" title="এয়ার কোয়ালিটি ইনডেক্স">
          এয়ার কোয়ালিটি ইনডেক্স
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default Weather;
