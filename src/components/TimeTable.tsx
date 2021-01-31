import React, { useState } from "react";
import Time from "./TimeTable/Time";
import ScheduleBlocks from "./TimeTable/ScheduleBlocks";
import Cart from "./TimeTable/Cart";
import TimeTableCourseBuilder from "./TimeTable/TimeTableCourseBuilder";

const TimeTable = () => {
  const [indexOfCalElements, setIndexOfCalElements] = useState([]);
  const [howMany, setHowMany] = useState(0);
  console.log("timetable page, the calendar should show ");
  console.log(indexOfCalElements);
  return (
    <div
      className={"row"}
      style={{
        position: "absolute",
      }}
    >
      <div
        className={"row"}
        style={{
          display: "flex",
          width: "800px",
          marginLeft: "75px",
        }}
      >
        <Time />
        <ScheduleBlocks />
      </div>
      <Cart
        parentIndices={indexOfCalElements}
        setIndexOfCalElementsParent={setIndexOfCalElements}
        setNumber={setHowMany}
      />
      <TimeTableCourseBuilder indices={indexOfCalElements} howMany={howMany} />
    </div>
  );
};
export default TimeTable;
