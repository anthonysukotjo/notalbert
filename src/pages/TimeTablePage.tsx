import React, { useState } from "react";
import Time from "../components/TimeTable/Time";
import ScheduleBlocks from "../components/TimeTable/ScheduleBlocks";
import Cart from "../components/TimeTable/Cart/Cart";
import TimeTableCourseBuilder from "../components/TimeTable/TimeTableCourseBuilder";

const TimeTablePage = () => {
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

export default TimeTablePage;
