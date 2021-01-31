import React from "react";
const TimeTableCourse = ({
  left,
  courseCode,
  startTime,
  location,
  instructor,
  duration,
}) => {
  console.log("building indiv timetable course component");

  const timeIn15MinBlocks = Math.floor(duration / 15);
  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;
  const startTimeHours = parseInt(startTime.split(":")[0]);
  const startTimeMinutes = parseInt(startTime.split(":")[1]);

  const endTimeHours = startTimeHours + durationHours;
  const endTimeMinutes = startTimeMinutes + durationMinutes;

  const endTimeString =
    endTimeHours.toString() +
    ":" +
    (endTimeMinutes === 0 ? "00" : endTimeMinutes.toString());

  const top =
    41.5 +
    (startTimeHours - 8) * 4 * 12.5 +
    Math.floor(startTimeMinutes / 15) * 12.5;
  // Top start is 12.5, every 15 minutes after that is 12.5
  console.log(left.toString() + " " + top);
  return (
    <div
      style={{
        width: "135px",
        height: (12.5 * timeIn15MinBlocks).toString() + "px",
        backgroundColor: "#54008c",
        textAlign: "center",
        position: "absolute",
        left: left,
        top: top,
        opacity: "76%",
      }}
    >
      <div className={"col calendar-course-text"}>
        <div className={" ct"}>
          <strong> {courseCode.split(" ")[0]}</strong>{" "}
        </div>
        <div className={" ct"}>
          <strong> {courseCode.split(" ")[1]}</strong>{" "}
        </div>
        <div className={" ct"}>
          <strong>
            {" "}
            {startTime} - {endTimeString}
          </strong>{" "}
        </div>
        <div className={" ct"}>
          <strong> {location}</strong>{" "}
        </div>
        <div className={" ct"}>
          {instructor.map((a) => (
            <div>
              {" "}
              <strong>{a}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeTableCourse;
