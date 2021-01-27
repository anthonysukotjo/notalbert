import React, { useState } from "react";
import Section from "./Section";

const style = {
  marginTop: "30px",
  paddingBottom: "30px",
  borderBottom: "dotted 4px grey",
  display: "inline-block",
  width: "900px",
};

const sectionCounterstyle = {
  color: "grey",
};

const Course = ({ data }) => {
  const [showSections, setShowSections] = useState(false);
  const reciButtonText = showSections ? "Hide" : "Show";
  const courseName = data.name;
  const courseCode =
    data.subjectCode.code +
    "-" +
    data.subjectCode.school +
    " " +
    data.deptCourseId;
  const noOfSections = data.sections.length;
  const description = data.description;
  let elements: JSX.Element[] = [];
  for (let i = 0; i < noOfSections; i++) {
    const sectionData = data.sections[i];
    elements.push(<Section data={sectionData} />);
  }

  const sectionText = noOfSections === 1 ? " Section" : " Sections";

  return (
    <div className={"col flex-column"} style={style}>
      <div className={"row justify-content-between"}>
        <div>
          <text
            style={{
              fontSize: "20px",
            }}
          >
            <strong>{courseCode + " "}</strong>
            {courseName}
          </text>
        </div>
        <div style={sectionCounterstyle}>
          {noOfSections} {sectionText}
        </div>
      </div>

      <div
        className={"justify-content-between row"}
        style={{
          fontSize: "15px",
          textAlign: "justify",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        {description === undefined ? "No description found" : description}
      </div>
      <div className="row justify-content-end">
        <button
          className={"btn"}
          onClick={() => {
            setShowSections(!showSections);
          }}
          style={{
            marginBottom: "20px",
            backgroundColor: "grey",
            color: "white",
            fontSize: "15px",
          }}
        >
          {reciButtonText} Sections
        </button>
      </div>
      {showSections ? (
        <div className=" align-items-start">{elements}</div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Course;
