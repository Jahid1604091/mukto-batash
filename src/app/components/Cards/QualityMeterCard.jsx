import React from "react";
import { Card } from "react-bootstrap";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false });

const QualityMeterCard = ({title,width='17rem',height='18rem',margin}) => {
  return (
    <Card style={{ width, margin, height, }} className="rounded-4">
      <Card.Header as='h6' style={{background:"#137E1D" }}
        className="fw-bold text-center d-flex justify-content-center align-items-center rounded-top-4 py-3 text-light"
      > <div style={{width:"20px", height:"20px", background:"red",borderRadius:"100%",marginRight:"5px"}}></div> {title}
      </Card.Header>

      <Card.Body className="d-flex">
        <GaugeComponent
        alue={50}
        type="radial"
        labels={{
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 20 },
              { value: 40 },
              { value: 60 },
              { value: 80 },
              { value: 100 }
            ]
          }
        }}
        arc={{
          colorArray: ['#5BE12C','#EA4228'],
          subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
          padding: 0.02,
          width: 0.3
        }}
        pointer={{
          elastic: true,
          animationDelay: 0
        }}
        />
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <hr />
      </Card.Body>
    </Card>
  );
};

export default QualityMeterCard;
