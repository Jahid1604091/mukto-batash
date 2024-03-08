import Image from "next/image";
import { Card, Table } from "react-bootstrap";
import mask from "../../../../public/assets/images/mask.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "@/app.config";

function QualityIndexCard({aiq}) {
  const [aiqData,setAiqData] = useState([]);
  async function fetchAIQStandards() {
    const {data} = await axios(`${config.BASE_URL}/aiq-standards?ln=bn`)
   setAiqData(data)
    //@after updating lng 
    // setLocations(data)
  }
  useEffect(()=>{
    fetchAIQStandards()
  },[])
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
        <p className="display-6 fw-bold">{aiq}</p>{" "}
      </Card.Header>
      <Card.Body className="d-flex">
        <Image src={mask} alt="mask" width={60} height={60} className="mx-3" />
        <Card.Text>
          বাতাসে অতিরিক্ত ধুলাবালি ও কার্বন-মনোক্সাইডের উপস্থিতি রয়েছে দয়া করে
          মাস্ক ব্যবহার করুন
        </Card.Text>
      </Card.Body>
      <Table striped bordered hover variant="dark" size="sm" style={{fontSize:"9px",textAlign:"center"}}>
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
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#00E400"}}></div>{aiqData[0]?.level}</td>
          <td>{aiqData[0]?.value}</td>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#FF0000"}}></div>{aiqData[3]?.level}</td>
          <td>{aiqData[3]?.value}</td>
        </tr>
        <tr>
        <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#FFFF00"}}></div>{aiqData[1]?.level}</td>
          <td>{aiqData[1]?.value}</td>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#8F3F97"}}></div>{aiqData[4]?.level}</td>
          <td>{aiqData[4]?.value}</td>
        </tr>
        <tr>
        <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#FF7E00"}}></div>{aiqData[2]?.level}</td>
          <td>{aiqData[2]?.value}</td>
          <td className="d-flex align-items-center justify-content-start"> <div style={{width:"15px",height:"15px",borderRadius:"100%",margin:"5px",background:"#7E0023"}}></div>{aiqData[5]?.level}</td>
          <td>{aiqData[5]?.value}</td>
        </tr>
      </tbody>
      </Table>
      <div className="text-center" style={{marginTop:"-10px"}}>
        <p>এয়ার কোয়ালিটি ইনডেক্স (নির্দেশক রং ও তার অর্থ)</p>
      </div>
    </Card>
  );
}

export default QualityIndexCard;
