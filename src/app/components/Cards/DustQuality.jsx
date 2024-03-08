import React from "react";
import { Card } from "react-bootstrap";
import dynamic from "next/dynamic";
import ReactSpeedometer from "react-d3-speedometer/slim"

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

const DustQuality = ({
  title,
  width = "17rem",
  height = "18rem",
  margin,
  airData
}) => {
  const convert2percentage = (value) =>{
    if (value >= 100) {
      value = value / 100;
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      } else {
        return value.toFixed(1);
      }
    } else {
      return value.toFixed(0);
    }
  }

  return (
    <Card style={{ width, margin, height }} className="rounded-4">
      <Card.Header
        as="h6"
        style={{ background: "#137E1D" }}
        className="fw-bold text-center d-flex justify-content-center align-items-center rounded-top-4 py-3 text-light"
      >
        {" "}
        <div
          style={{
            width: "20px",
            height: "20px",
            background: "red",
            borderRadius: "100%",
            marginRight: "5px",
          }}
        ></div>{" "}
        {title}
      </Card.Header>

      <Card.Body className="p-0 m-0">
        
        <div className="d-flex justify-content-around" style={{height:"100px",borderBottom:"1px solid #B4B1B1"}}>
          <ReactSpeedometer labelFontSize={11} width={130} height={70} ringWidth={10}value={airData?.pm1} minValue={0} maxValue={2000} startColor="green" endColor='red' />
          <Card.Text className="my-4">
            <small>পি এম ১</small>
            <p className="fw-bold">{airData?.pm1} পিপিএম</p>
          </Card.Text>
        </div>

        <div className="d-flex" style={{height:"80px",borderBottom:"1px solid #B4B1B1"}}>
          <GaugeComponent
            style={{ width: "120px",height:"80px" }}
            value={airData && airData["pm2.5"]}
            type="semicircle"
            labels={{
              valueLabel: {
                formatTextValue: (value) => value + "",
                style: {
                  fill: "#000",
                  fontSize: "45px",
                  textShadow: "none",
                  fontWeight: "700",
                },
              },
              tickLabels: {
                type: "outer",
                ticks: [
                  { value: 20 },
                  { value: 40 },
                  { value: 60 },
                  { value: 80 },
                  { value: 100 },
                ],
                defaultTickValueConfig: {
                  style: { fill: "#000", fontSize: "16px" },
                  hide: true,
                },
                defaultTickLineConfig: {
                  color: "#000",
                  width: 1,
                  hide: true,
                },
                hide: true,
              },
            }}
            arc={{
              colorArray: ["#5BE12C", "#EA4228"],
              subArcs: [{ limit: 10 }, {}, {}, {}, {}],
              padding: 0.01,
              width: 0.2,
              cornerRadius: 0,
              nbSubArcs: 0,
            }}
            pointer={{
              elastic: true,
              animationDelay: 0,
              color: "#e68383",
              width: 10,
              length: 0.8,
              type: "needle",
            }}
          />
          <Card.Text className="my-4">
            <small>পি এম ২.৫ </small>
            <p className="fw-bold">{airData && airData["pm2.5"]} পিপিএম</p>
          </Card.Text>
        </div>

        <div className="d-flex" style={{height:"80px"}}>
          <GaugeComponent
            style={{ width: "120px",height:"80px" }}
            value={airData?.pm10}
            type="semicircle"
            labels={{
              valueLabel: {
                formatTextValue: (value) => value + "",
                style: {
                  fill: "#000",
                  fontSize: "45px",
                  textShadow: "none",
                  fontWeight: "700",
                },
              },
              tickLabels: {
                type: "outer",
                ticks: [
                  { value: 20 },
                  { value: 40 },
                  { value: 60 },
                  { value: 80 },
                  { value: 100 },
                ],
                defaultTickValueConfig: {
                  style: { fill: "#000", fontSize: "16px" },
                  hide: true,
                },
                defaultTickLineConfig: {
                  color: "#000",
                  width: 1,
                  hide: true,
                },
                hide: true,
              },
            }}
            arc={{
              colorArray: ["#5BE12C", "#EA4228"],
              subArcs: [{ limit: 10 }, {}, {}, {}, {}],
              padding: 0.01,
              width: 0.2,
              cornerRadius: 0,
              nbSubArcs: 0,
            }}
            pointer={{
              elastic: true,
              animationDelay: 0,
              color: "#e68383",
              width: 10,
              length: 0.8,
              type: "needle",
            }}
          />
          <Card.Text className="my-4">
            <small>পি এম ১০ </small>
            <p className="fw-bold">{airData?.pm10} পিপিএম</p>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DustQuality;
