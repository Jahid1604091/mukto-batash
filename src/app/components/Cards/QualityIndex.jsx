import Image from "next/image";
import { Card, Table } from "react-bootstrap";
import mask from "../../../../public/assets/images/mask.svg";

function QualityIndexCard() {
  return (
    <Card style={{ width: "25rem", height: "23rem" }} className="rounded-4">
      <Card.Header
        style={{ background: "#B50808" }}
        as="h4"
        className="fw-bold d-flex justify-content-between align-items-center rounded-top-4 text-light"
      >
        <p style={{ width: "15rem" }} className="text-wrap text-center">
          এয়ার কোয়ালিটি ইনডেক্স
        </p>{" "}
        <p className="display-6 fw-bold">৬৯৮</p>{" "}
      </Card.Header>
      <Card.Body className="d-flex">
        <Image src={mask} alt="mask" width={60} height={60} className="mx-3" />
        <Card.Text>
          বাতাসে অতিরিক্ত ধুলাবালি ও কার্বন-মনোক্সাইডের উপস্থিতি রয়েছে দয়া করে
          মাস্ক ব্যবহার করুন
        </Card.Text>
      </Card.Body>
      <Table striped bordered hover variant="dark" size="sm" style={{fontSize:"10px",textAlign:"center"}}>
      <thead>
        <tr className="fs-6">
          <th>Levels</th>
          <th>Value</th>
          <th>Levels</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#00E400"}}></div>Good</td>
          <td>0 - 50</td>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#FF0000"}}></div>Unhealthy</td>
          <td>151 - 200</td>
        </tr>
        <tr>
        <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#FFFF00"}}></div>Moderate</td>
          <td>51 - 100</td>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#8F3F97"}}></div>Very Unhealthy</td>
          <td>201 - 300</td>
        </tr>
        <tr>
        <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#FF7E00"}}></div>Unhealthy for senitive groups</td>
          <td>101 - 150</td>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#7E0023"}}></div>Hazardous</td>
          <td>301 or higher</td>
        </tr>
      </tbody>
      </Table>
      <small className="text-center">
        এয়ার কোয়ালিটি ইনডেক্স (নির্দেশক রং ও তার অর্থ)
      </small>
    </Card>
  );
}

export default QualityIndexCard;
