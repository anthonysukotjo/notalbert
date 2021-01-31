import React from "react";

const weekdays = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const Weekday = ({ day }) => {
  let elements: JSX.Element[] = [];
  elements.push(
    <div key={day} style={{ fontSize: "25px", marginBottom: "5px" }}>
      <strong> {weekdays[day]}</strong>
    </div>
  );
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      const bgColor = i % 2 === 0 ? "#E7DDEE" : "#F0E9F4";
      elements.push(
        <div
          key={i.toString() + " " + j.toString()}
          className={"container day"}
          style={{ backgroundColor: bgColor }}
        />
      );
    }
  }

  return (
    <div
      className={"col"}
      style={{
        marginRight: "-25px",
        // display: "flex",
      }}
    >
      {elements}
    </div>
  );
};

export default Weekday;
