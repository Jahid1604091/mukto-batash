import React from "react";

const TempForecast = ({ weatherData }) => {
  //
  const getSunColor = (low, high) => {
    if (low > 15 && high <= 30) {
      return "#6c5719";
    } else if (low > 30 && high <= 35) {
      return "#E3AE09";
    } else if (low > 35 && high <= 40) {
      return "#ecb615";
    } else if (low > 40 && high <= 45) {
      return "#eebf31";
    } else {
      return "yellow";
    }
  };

  return (
    <div className="d-flex justify-content-around">
      {weatherData?.map((wd) => (
        <div className="d-flex flex-column align-items-center">
          {wd?.day_of_week}
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              background: getSunColor(wd.temperature.low,wd.temperature.high)
            }}
          ></div>
          <p>{wd.temperature.high} &deg; <small className="text-secondary">{wd.temperature.low} &deg; </small></p>
        </div>
      ))}
      {/* <div className="d-flex flex-column align-items-center">
        Sat
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            background: "#E3AE09",
          }}
        ></div>
        <p>22 &deg; C</p>
      </div> */}

      {/* <div className="d-flex flex-column align-items-center">
      Sun
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "yellow",
        }}
      ></div>
      <p>25 &deg; C</p>
    </div>
    <div className="d-flex flex-column align-items-center">
      Mon
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "#eebf31",
        }}
      ></div>
      <p>21 &deg; C</p>
    </div>
    <div className="d-flex flex-column align-items-center">
      Tue
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "yellow",
        }}
      ></div>
      <p>25 &deg; C</p>
    </div>
    <div className="d-flex flex-column align-items-center">
      Wed
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "#E3AE09",
        }}
      ></div>
      <p>23 &deg; C</p>
    </div>
    <div className="d-flex flex-column align-items-center">
      Thu
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "#E3AE09",
        }}
      ></div>
      <p>22 &deg; C</p>
    </div>
    <div className="d-flex flex-column align-items-center">
      Fri
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          background: "#6c5719",
        }}
      ></div>
      <p>19 &deg; C</p>
    </div> */}
    </div>
  );
};

export default TempForecast;
