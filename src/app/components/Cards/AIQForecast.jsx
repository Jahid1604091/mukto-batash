import React from "react";

const AIQForecast = ({ weatherData }) => {
  const getBgColor = (value) => {
    if (value > 0 && value <= 50) {
      return "#00E400";
    } else if (value > 50 && value <= 100) {
      return "#FFFF00";
    } else if (value > 100 && value <= 150) {
      return "#FF7E00";
    } else if (value > 150 && value <= 200) {
      return "#FF0000";
    } else if (value > 200 && value <= 300) {
      return "#8F3F97";
    } else {
      return "#7E0023";
    }
  };

  return (
    <div className="d-flex justify-content-around">
      {weatherData?.map((wd) => (
        <div
          key={wd.day_of_week}
          className="d-flex flex-column align-items-center"
        >
          {wd?.day_of_week}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              margin: "1px",
              background: getBgColor(wd.aiq),
            }}
          ></div>
          <p>
            {" "}
            <small className="text-secondary">{wd.aiq} ppm </small>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AIQForecast;
