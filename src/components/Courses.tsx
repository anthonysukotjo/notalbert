import React, { useEffect, useState } from "react";
import Course from "./Course";
import Spinner from "react-bootstrap/Spinner";

// import qs from "qs";

const CourseComponentListBuilder = ({
  loading,
  data,
  // instructionMode,
  // classUnits,
}) => {
  console.log("building...");
  let elements: JSX.Element[] = [];

  // const noClassUnits = {
  //   one: false,
  //   two: false,
  //   three: false,
  //   four: false,
  //   five: false,
  //   more: false,
  // };
  // const noInstructionMode = {
  //   online: false,
  //   inPerson: false,
  //   blended: false,
  // };
  console.log("course data");

  const sortedData = data.sort(
    (a, b) => parseFloat(a.deptCourseId) - parseFloat(b.deptCourseId)
  );
  console.log(sortedData);

  for (let i = 0; i < sortedData.length; i++) {
    elements.push(<Course data={sortedData[i]} />);
  }
  if (!loading) {
    return <div>{elements}</div>;
  } else return <div />;
};

const style = {
  marginTop: "30px",
  // borderBottom: "dotted 4px grey",
  display: "inline-block",
};

const Courses = ({
  year,
  term,
  school,
  subject,
  query,
  // instructionMode,
  // classUnits,
}) => {
  console.log("the query is" + query);
  // add location as props if uncommenting below
  // const { school } = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });
  // const { subject } = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });

  const [courseList, setCourseList] = useState({
    schoolLoading: true,
    data: [{}],
  });

  useEffect(() => {
    (async () => {
      try {
        const coursesLink = `https://schedge.a1liu.com/${year}/${term}/${school}/${subject}?full=true`;
        const searchLinkOnly = `https://schedge.a1liu.com/${year}/${term}/search?query=${query.replace(
          /\\s/g,
          "+"
        )}&full=true`;
        const searchLinkAndSubject = `https://schedge.a1liu.com/${year}/${term}/search?query=${query.replace(
          /\\s/g,
          "+"
        )}&full=true&school=${school}&subject=${subject}`;

        const searchLinkOnlySchool = `https://schedge.a1liu.com/${year}/${term}/search?query=${query.replace(
          /\\s/g,
          "+"
        )}&full=true&school=${school}`;

        let link = "";

        if (query !== "" && subject !== "noCode" && school !== "noCode") {
          link = searchLinkAndSubject;
        } else if (
          (query !== "" && subject === "noCode" && school === "noCode") ||
          (query !== "" && subject === "noCode" && school === "selectOption")
        ) {
          link = searchLinkOnly;
        } else if (subject !== "noCode" && school !== "noCode") {
          link = coursesLink;
        } else if (subject === "noCode" && school !== "noCode") {
          link = searchLinkOnlySchool;
        }

        console.log("the link is " + link);

        const response = await fetch(link);

        console.log("fetching...");
        if (!response.ok) {
          // handle invalid search parameters
          return;
        }

        const retrievedData = await response.json();
        setCourseList(() => ({
          schoolLoading: false,
          data: retrievedData,
        }));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [school, subject, query, term, year]);

  return (
    <div className="col">
      <div style={style}>
        {courseList.schoolLoading ? (
          <Spinner animation="border" />
        ) : (
          <strong>{courseList.data.length} Courses Found</strong>
        )}
      </div>
      <CourseComponentListBuilder
        loading={courseList.schoolLoading}
        data={courseList.data}
        //   instructionMode={instructionMode}
        //   classUnits={classUnits}
      />
    </div>
  );
};

export default Courses;
