import React from "react";
import Weekday from "./Weekday";
const ScheduleBlocks = () => {
  return (
    <div className="justify-content-center">
      <div
        className={"row"}
        style={{
          width: "700px",
          // width: "1000px",
          gap: "0px",
        }}
      >
        <Weekday day={0} />
        <Weekday day={1} />
        <Weekday day={2} />
        <Weekday day={3} />
        <Weekday day={4} />
      </div>
    </div>
  );
};

export default ScheduleBlocks;
