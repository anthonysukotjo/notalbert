import React, { useEffect, useState } from "react";
import TimeTableCourse from "./TimeTableCourse";

const TimeTableCourseBuilder = ({ indices, howMany }) => {
  console.log("timetablecoursebuilder indices are");
  console.log("there are " + howMany.toString() + " indices");
  console.log(indices);
  const elements: JSX.Element[] = [];
  const [cart, setCart] = useState([
    {
      courseCode: "no",
      courseName: "no",
      hasRecitation: false,
      instructors: [],
      location: "no",
      regNo: "no",
      sectionCode: "no",
      status: "no",
      time: {
        daysNum: [],
        startTime: "",
        minutes: 0,
      },
      type: "no",
    },
  ]);
  const week = [142, 242, 342, 442, 542, 642, 742];

  useEffect(() => {
    // const elementsUpdated = elements;
    const cartFromStorage = JSON.parse(localStorage.getItem("Cart") || "[]");
    // console.log("in cart");
    setCart(cartFromStorage);

    // setElements(elementsUpdated);
  }, [indices, howMany]);
  for (let i = 0; i < indices.length; i++) {
    const course = cart[indices[i]];
    console.log("the index is " + indices[i].toString());
    console.log(course);
    console.log(course.time.daysNum.length);
    for (let j = 0; j < course.time.daysNum.length; j++) {
      // console.log("to be sent");
      // console.log(week[course.time.daysNum[j]]);
      // console.log(course.courseCode);
      // console.log(course.time.startTime);
      // console.log(course.location);
      // console.log(course.instructors);
      // console.log(course.time.minutes);

      elements.push(
        <TimeTableCourse
          left={week[course.time.daysNum[j] - 1]}
          courseCode={course.courseCode}
          startTime={course.time.startTime}
          location={course.location}
          instructor={course.instructors}
          duration={course.time.minutes}
        />
      );
    }
  }

  return (
    <div>
      {elements}
      {/*<TimeTableCourse left={week[0]} top={41.5 + 12.5} timeIn15MinBlocks={5} />*/}
      {/*<TimeTableCourse left={week[1]} top={41.5} timeIn15MinBlocks={5} />*/}
      {/*<TimeTableCourse left={week[2]} top={41.5} timeIn15MinBlocks={5} />*/}
      {/*<TimeTableCourse left={week[3]} top={41.5} timeIn15MinBlocks={5} />*/}
      {/*<TimeTableCourse left={week[4]} top={41.5} timeIn15MinBlocks={5} />*/}
    </div>
  );
};

export default TimeTableCourseBuilder;
