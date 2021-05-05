//to be deleted and merged with home once searchbar and filter box is finished
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import EmptySearchText from "../components/EmptySearchText";
import FilterBox from "../components/FilterBox";
import Courses from "../components/Courses";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const retrieveSearch = (query) => {
    console.log("parent search " + query);
    setSearchQuery(query);
  };

  const [sem, setSem] = useState({
    year: "2021",
    term: "fa",
  });

  const retrieveSem = (year, term) => {
    console.log("parent sem " + year + " " + term);
    setSem({
      year: year,
      term: term,
    });
  };

  const [instructionMode, setInstructionMode] = useState({
    online: false,
    inPerson: false,
    blended: false,
  });

  const retrieveInstructionMode = (instructionObject) => {
    console.log("parent instruction mode ");
    console.log(instructionObject);
    setInstructionMode(instructionObject);
  };

  const [classUnits, setClassUnits] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    more: false,
  });

  console.log(classUnits);

  const retrieveClassUnits = (classUnitsObject) => {
    console.log("parent class units");
    console.log(classUnitsObject);
    setClassUnits(classUnitsObject);
  };

  const [selectedSchool, setSelectedSchool] = useState({
    schoolCode: "noCode",
    name: "Select School",
  });

  const retrieveSelectedSchool = (selectedSchoolObject) => {
    console.log("parent selected school");
    console.log(selectedSchoolObject);
    setSelectedSchool(selectedSchoolObject);
  };

  const [selectedSubject, setSelectedSubjects] = useState({
    subjectCode: "noCode",
    name: "Select School First",
  });

  const retrieveSelectedSubjects = (selectedSubjectObject) => {
    console.log("parent selected subject");
    setSelectedSubjects(selectedSubjectObject);
  };
  const isSearching =
    searchQuery !== "" ||
    (selectedSchool.schoolCode !== "noCode" &&
      selectedSubject.subjectCode !== "noCode");

  console.log("isSearching value " + isSearching.toString);
  console.log(selectedSchool.schoolCode);
  console.log(selectedSubject.subjectCode);

  console.log("user selected mode:");
  console.log(instructionMode);
  return (
    <div>
      <div
        className={"col "}
        style={{ width: "auto", display: "inline-block" }}
      >
        <div className={"row "}>
          <div className={"col "}>
            <SearchBar
              retrieveSearch={retrieveSearch}
              bool={!(searchQuery === "")}
            />
            {isSearching ? (
              <Courses
                year={sem.year}
                term={sem.term}
                school={selectedSchool.schoolCode}
                subject={selectedSubject.subjectCode}
                query={searchQuery}
                // instructionMode={instructionMode}
                // classUnits={classUnits}
              />
            ) : (
              <EmptySearchText />
            )}
          </div>
          <div className={"col "}>
            <FilterBox
              retrieveSem={retrieveSem}
              retrieveInstructionMode={retrieveInstructionMode}
              retrieveClassUnits={retrieveClassUnits}
              retrieveSelectedSchool={retrieveSelectedSchool}
              retrieveSelectedSubjects={retrieveSelectedSubjects}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
