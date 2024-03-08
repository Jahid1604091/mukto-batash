import React from "react";
import { Card } from "react-bootstrap";
import ReactSpeedometer from "react-d3-speedometer";

const DustQuality = ({
  title,
  width = "15rem",
  height = "18rem",
  margin,
  airData,
}) => {
  return (
    <Card style={{ margin, height }} className="rounded-4">
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
        <div
          className="d-flex justify-content-around"
          style={{ borderBottom: "1px solid #B4B1B1" }}
        >
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            width={120}
            height={80}
            ringWidth={10}
            value={airData?.pm1}
            minValue={0}
            maxValue={2000}
            segments={6}
            segmentColors={[
              "#00E400",
              "#FFFF00",
              "#FF7E00",
              "#FF0000",
              "#8F3F97",
              "#7E0023",
            ]}
          />
          <Card.Text className="p-0 m-auto">
            <small>পি এম ১</small>
            <p className="fw-bold">{airData?.pm1} পিপিএম</p>
          </Card.Text>
        </div>

        <div
          className="d-flex justify-content-around"
          style={{ borderBottom: "1px solid #B4B1B1" }}
        >
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            width={120}
            height={80}
            ringWidth={10}
            value={airData && airData["pm2.5"]}
            minValue={0}
            maxValue={2000}
            segments={6}
            segmentColors={[
              "#00E400",
              "#FFFF00",
              "#FF7E00",
              "#FF0000",
              "#8F3F97",
              "#7E0023",
            ]}
          />
          <Card.Text className="p-0 m-auto">
            <small>পি এম ২.৫</small>
            <p className="fw-bold">{airData && airData["pm2.5"]} পিপিএম</p>
          </Card.Text>
        </div>

        <div className="d-flex justify-content-around">
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            width={120}
            height={80}
            ringWidth={10}
            value={airData?.pm10}
            minValue={0}
            maxValue={2000}
            segments={6}
            segmentColors={[
              "#00E400",
              "#FFFF00",
              "#FF7E00",
              "#FF0000",
              "#8F3F97",
              "#7E0023",
            ]}
          />
          <Card.Text className="p-0 m-auto">
            <small>পি এম ১০</small>
            <p className="fw-bold">{airData?.pm10} পিপিএম</p>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DustQuality;
