import { convertToBanglaNumber } from "@/app/utils/helpers";
import React from "react";
import { Card } from "react-bootstrap";
import ReactSpeedometer from "react-d3-speedometer";
import Loader from "../Loader";

const DustQuality = ({
  title,
  width = "15rem",
  height = "20rem",
  margin,
  airData,
  aiqLoader,
}) => {
  const maxValue = 300;
  const clippedValuePm1 = parseInt(Math.min(airData?.pm1, maxValue));
  const clippedValuePm25 = parseInt(
    Math.min(airData && airData["pm2.5"], maxValue)
  );
  const clippedValuePm10 = parseInt(Math.min(airData?.pm10, maxValue));

  if (aiqLoader) {
    return <Loader />;
  }
  return (
    <Card style={{ margin, minHeight: height }} className="rounded-4">
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

      <Card.Body className="px-0">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ borderBottom: "1px solid #B4B1B1" }}
        >
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            width={120}
            height={80}
            ringWidth={10}
            value={clippedValuePm1}
            minValue={0}
            maxValue={maxValue}
            customSegmentStops={[0, 50, 100, 150, 200, 250, maxValue]}
            maxSegmentLabels={maxValue}
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
          <Card.Text as='div' className="px-4 px-md-1">
            <small>পি এম ১</small>
            <p className="fw-bold">
              {convertToBanglaNumber(airData?.pm1)} পিপিএম
            </p>
          </Card.Text>
        </div>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{ borderBottom: "1px solid #B4B1B1" }}
        >
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            width={120}
            height={80}
            ringWidth={10}
            value={clippedValuePm25}
            minValue={0}
            maxValue={maxValue}
            customSegmentStops={[0, 50, 100, 150, 200, 250, maxValue]}
            maxSegmentLabels={maxValue}
            segmentColors={[
              "#00E400",
              "#FFFF00",
              "#FF7E00",
              "#FF0000",
              "#8F3F97",
              "#7E0023",
            ]}
          />
          <Card.Text  as='div'  className="px-4 px-md-1">
            <small>পি এম ২.৫</small>
            <p className="fw-bold">
              {convertToBanglaNumber(airData && airData["pm2.5"])} পিপিএম
            </p>
          </Card.Text>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            width={120}
            height={80}
            ringWidth={10}
            value={clippedValuePm10}
            minValue={0}
            maxValue={maxValue}
            customSegmentStops={[0, 50, 100, 150, 200, 250, maxValue]}
            maxSegmentLabels={maxValue}
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
          <Card.Text  as='div'  className="px-4 px-md-1">
            <small>পি এম ১০</small>
            <p className="fw-bold">
              {convertToBanglaNumber(airData?.pm10)} পিপিএম
            </p>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DustQuality;
