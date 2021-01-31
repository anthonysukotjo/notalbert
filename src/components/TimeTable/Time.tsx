import React from "react";

const Time = () => {
  const elements: JSX.Element[] = [];

  for (let i = 8; i < 22; i++) {
    elements.push(
      <div
        key={i}
        style={{
          marginBottom: "25.5px",
        }}
      >
        <strong style={{ fontSize: "15px" }}>{i.toString() + ":00"}</strong>
      </div>
    );
  }

  return (
    <div
      className={"col"}
      style={{
        marginTop: "32px",
        marginRight: "37px",
        display: "inline-block",
        maxWidth: "20px",
      }}
    >
      {elements}
    </div>
  );
};

export default Time;
