import React from "react";

const TempForecast = ({ weatherData }) => {
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
        <div key={wd.day_of_week} className="d-flex flex-column align-items-center">
          {wd?.day_of_week}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              background: 'yellow',
              margin:"1px"
            }}
          ></div>
          <p>{wd.temperature.high} &deg; <small className="text-secondary">{wd.temperature.low} &deg; </small></p>
        </div>
      ))}
    </div>
  );
};

export default TempForecast;
