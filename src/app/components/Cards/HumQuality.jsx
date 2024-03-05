import React from "react";
import { Card } from "react-bootstrap";
import humIcon from "../../../../public/assets/images/hum.svg";
import dynamic from "next/dynamic";
import Image from "next/image";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

const HumQuality = ({ title, width = "17rem", height = "18rem", margin }) => {
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
        <div className="d-flex align-items-center justify-content-around" style={{ borderBottom: "1px solid #B4B1B1" }}>
          <Image src={humIcon} />
          <Card.Text className="my-4">
            <small>পি এম ১</small>
            <p>১৯৩ পিপিএম</p>
          </Card.Text>
        </div>

        <div className="d-flex align-items-center justify-content-around">
          <Image src={humIcon} />
          <Card.Text className="my-4">
            <small>পি এম ১</small>
            <p>১৯৩ পিপিএম</p>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HumQuality;
