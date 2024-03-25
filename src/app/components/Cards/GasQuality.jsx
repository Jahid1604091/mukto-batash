import { convertToBanglaNumber } from "@/app/utils/helpers";
import React from "react";
import { Card } from "react-bootstrap";
import ReactSpeedometer from "react-d3-speedometer";
import Loader from "../Loader";
import { withTranslation } from "react-i18next";

const GasQuality = ({
  width = "15rem",
  height = "20rem",
  margin,
  gasData,
  aiqLoader,
  checkedA,
  t
}) => {
  const maxValue = 300;
  const clippedValueCO = parseInt(Math.min(gasData?.co, maxValue));
  const clippedValueCO2 = parseInt(Math.min(gasData?.co2, maxValue));
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
        {t('gas_q_title')}
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
            height={110}
            ringWidth={10}
            minValue={0}
            maxValue={maxValue}
            customSegmentStops={[0, 50, 100, 150, 200, 250, maxValue]}
            maxSegmentLabels={maxValue}
            segments={6}
            value={clippedValueCO}
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
            <small>{t('co')}</small>
            <p className="fw-bold">
              {checkedA ? convertToBanglaNumber(gasData?.co) : gasData?.co} {t('ppm')}
            </p>
          </Card.Text>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <ReactSpeedometer
            labelFontSize="10"
            valueTextFontSize="0"
            paddingVertical={10}
            width={120}
            height={110}
            ringWidth={10}
            value={clippedValueCO2}
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
            <small>{t('co2')}</small>
            <p className="fw-bold">
              {checkedA ? convertToBanglaNumber(gasData?.co2) : gasData?.co2} {t('ppm')}
            </p>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default withTranslation()(GasQuality);
