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
      <Table striped bordered hover variant="dark" size="sm" style={{fontSize:"12px",textAlign:"center"}}>
      <thead>
        <tr>
          <th>Level</th>
          <th>Value</th>
          <th>Level</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Level 1</td>
          <td>10</td>
          <td>Level 1</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Level 2</td>
          <td>20</td>
          <td>Level 2</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Level 3</td>
          <td>30</td>
          <td>Level 3</td>
          <td>30</td>
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
