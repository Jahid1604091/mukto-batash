import React from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Temperature from "./Temperature";

const Weather = () => {
  return (
    <Card className="rounded-4 bg-dark text-light">
      <Card.Body>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="তাপমাত্রা">
            <Temperature />
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                Sat
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    background: "yellow",
                  }}
                ></div>
                <p>22 &deg; C</p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="আর্দ্রতা">
            আর্দ্রতা
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default Weather;
