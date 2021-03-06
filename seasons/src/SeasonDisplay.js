import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Bruh Its Chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  // const text = season === "winter" ? "Bruh Its Chilly" : "Lets hit the beach";
  // const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive sppiner loading ${iconName} icon`} />
      <h1>{text} </h1>
      <i className={`icon-right massive asterisk loading ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
