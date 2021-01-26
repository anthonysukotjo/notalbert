import React, { useEffect, useState } from "react";

//TODO: CLEAN UP AND REFACTOR

const boxStyle = {
  backgroundColor: "#F5F1F8",
  borderRadius: "20px",
  padding: "20px",
  display: "inline-block",
  maxWidth: "320px",
  minWidth: "320px",
  height: "590px",
  marginLeft: "30px",
  marginRight: "30px",
};

const FilterBox = () => {
  const semOptions = [
    { semCode: "2021:sp", label: "Spring 2021" },
    { semCode: "2020:fa", label: "Fall 2020" },
  ];
  const [sem, setSem] = useState(semOptions[0].semCode);

  const [instructionMode, setInstructionMode] = useState({
    online: false,
    inPerson: false,
    blended: false,
  });
  const [classUnits, setClassUnits] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    more: false,
  });

  const [schoolList, setSchoolList] = useState({
    schoolLoading: true,
    data: [{}],
  });

  const [subjectList, setSubjectList] = useState({
    subjectLoading: true,
    data: { noCode: [] },
  });

  const [selectedSchool, setSelectedSchool] = useState({
    schoolCode: "noCode",
    name: "Select School",
  });

  const [selectedSubject, setSelectedSubjects] = useState({
    subjectCode: "noCode",
    name: "Select School First",
  });

  const filteredSubjects = (data) => {
    const results: Object[] = [];
    for (const key in data) {
      let subject = {};
      subject[key] = data[key].name;
      results.push(subject);
    }
    results.sort((a, b) => (Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1));
    if (selectedSchool.name === "Select School") {
      results.unshift({
        noCode: "Select School Above First ",
      });
    } else {
      results.unshift({
        noCode: "Select Subject",
      });
    }
    return results;
  };

  useEffect(() => {
    (async () => {
      try {
        const schoolResponse = await fetch("https://schedge.a1liu.com/schools");
        console.log("fetching schools...");

        if (!schoolResponse.ok) {
          // handle invalid search parameters
          return;
        }

        const schoolData = await schoolResponse.json();
        const placeHolderOption: Object[] = [];
        placeHolderOption.push({ selectOption: "Select School" });
        const undergraduateSchools: Object[] = [];
        const graduateSchools: Object[] = [];
        const otherSchools: Object[] = [];

        for (const key in schoolData) {
          let school = {};
          if (key === "NT") {
            school[key] = "Non-Credit Tisch School of the Art";
          } else if (key === "ND") {
            break;
          } else {
            school[key] = schoolData[key].name;
          }

          if (key.startsWith("U")) {
            undergraduateSchools.push(school);
          } else if (key.startsWith("G")) {
            graduateSchools.push(school);
          } else {
            otherSchools.push(school);
          }
        }

        const schools = placeHolderOption.concat(
          undergraduateSchools.sort((a, b) =>
            Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1
          ),
          otherSchools.sort((a, b) =>
            Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1
          ),
          graduateSchools.sort((a, b) =>
            Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1
          )
        );

        setSchoolList(() => ({
          schoolLoading: false,
          data: schools,
        }));

        const subjectResponse = await fetch(
          "https://schedge.a1liu.com/subjects"
        );

        if (!subjectResponse.ok) {
          // handle invalid search parameters
          return;
        }
        const subjectData = await subjectResponse.json();
        subjectData["noCode"] = [];

        setSubjectList(() => ({
          subjectLoading: false,
          data: subjectData,
        }));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.log("Semester: " + sem);
  console.log("School: " + selectedSchool.name);
  console.log("Subject: " + selectedSubject.name);
  console.log("instruction mode: ");
  console.log(instructionMode);
  console.log("Subject: " + selectedSubject.name);

  return (
    <div className={"col  "} style={boxStyle}>
      <div
        className="row justify-content-between"
        style={{
          marginLeft: "0.0px",
          marginRight: "1px",
        }}
      >
        <div style={{ textAlign: "left", color: "#54008c", fontSize: "25px" }}>
          <strong>Refine By</strong>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-link"
            style={{
              color: "grey",
              padding: "10px",
              margin: "0px",
            }}
            onClick={() => {
              console.log("clear filter clicked");
              setSelectedSchool({
                schoolCode: "noCode",
                name: "Select School",
              });
              setSelectedSubjects({
                subjectCode: "noCode",
                name: "Select School",
              });
              setClassUnits({
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                more: false,
              });
              setInstructionMode({
                online: false,
                inPerson: false,
                blended: false,
              });
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "5px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">Semester</text>
      </div>

      <div style={{ marginBottom: "3px" }}></div>

      <div>
        <select
          className="custom-select"
          // value={sem}
          onChange={(e) => {
            setSem(e.target.value);
          }}
        >
          {semOptions.map((o) => (
            <option key={o.semCode} value={o.semCode}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">School</text>
      </div>

      <div style={{ marginBottom: "3px" }}></div>

      <div>
        <select
          className="custom-select"
          id="schoolMenu"
          onChange={(e) => {
            const index = schoolList.data.findIndex(
              (obj) => Object.keys(obj)[0] === e.target.value
            );
            setSelectedSchool({
              schoolCode: e.target.value,
              name: schoolList.data[index][e.target.value],
              // schoolCode: Object.keys(schoolList.data[e.target.value])[0],
              // name:
              //   schoolList.data[e.target.value][
              //     Object.keys(schoolList.data[e.target.value])[0]
              //   ],
            });
            setSelectedSubjects({
              subjectCode: "noCode",
              name: "Select Subject",
            });
          }}
        >
          {schoolList.data.map((o, index) => (
            <option
              key={Object.keys(o)[0]}
              value={Object.keys(o)[0]}
              selected={Object.keys(o)[0] === selectedSchool.schoolCode}
            >
              {o[Object.keys(o)[0]]}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">Subject</text>
      </div>

      <div style={{ marginBottom: "3px" }}></div>

      <div>
        <select
          className="custom-select"
          onChange={(e) => {
            const subjectArray = filteredSubjects(
              subjectList.data[selectedSchool.schoolCode]
            )[e.target.value];
            const code = Object.keys(subjectArray)[0];
            setSelectedSubjects({
              subjectCode: code,
              name: subjectArray[code],
            });
          }}
        >
          {filteredSubjects(subjectList.data[selectedSchool.schoolCode]).map(
            (o, index) => (
              <option key={Object.keys(o)[0]} value={index}>
                {o[Object.keys(o)[0]]}
              </option>
            )
          )}
        </select>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }} />

        <text className="font-weight-bolder">Instruction Mode</text>
      </div>

      <div style={{ marginBottom: "5px" }} />

      <div className="col flex-column align-items-start">
        <div className="row">
          <input
            type="checkbox"
            value="online"
            checked={instructionMode.online}
            style={{ marginTop: "4px", marginRight: "7px" }}
            onChange={() => {
              setInstructionMode({
                online: !instructionMode.online,
                blended: instructionMode.blended,
                inPerson: instructionMode.inPerson,
              });
            }}
          />
          <label> Online</label>
        </div>
        <div className="row">
          <input
            type="checkbox"
            value="inPerson"
            style={{ marginTop: "4px", marginRight: "7px" }}
            checked={instructionMode.inPerson}
            onChange={(e) => {
              setInstructionMode({
                online: instructionMode.online,
                blended: instructionMode.blended,
                inPerson: !instructionMode.inPerson,
              });
            }}
          />
          <label> In person</label>
        </div>
        <div className="row">
          <input
            type="checkbox"
            value="blended"
            style={{ marginTop: "4px", marginRight: "7px" }}
            checked={instructionMode.blended}
            onChange={(e) => {
              setInstructionMode({
                online: instructionMode.online,
                blended: !instructionMode.blended,
                inPerson: instructionMode.inPerson,
              });
            }}
          />
          <label> Blended</label>
        </div>
      </div>

      <div style={{ marginBottom: "15px" }} />

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">Class Units</text>

        <div style={{ marginBottom: "5px" }} />

        <div className={"row"}>
          <div className={"col"}>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                style={{ marginRight: "7px" }}
                checked={classUnits.one}
                onChange={(e) => {
                  setClassUnits({
                    one: !classUnits.one,
                    two: classUnits.two,
                    three: classUnits.three,
                    four: classUnits.four,
                    five: classUnits.five,
                    more: classUnits.more,
                  });
                }}
              />
              <label htmlFor="vehicle1"> 0 to 1 units</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                style={{ marginRight: "7px" }}
                checked={classUnits.two}
                onChange={(e) => {
                  setClassUnits({
                    one: classUnits.one,
                    two: !classUnits.two,
                    three: classUnits.three,
                    four: classUnits.four,
                    five: classUnits.five,
                    more: classUnits.more,
                  });
                }}
              />
              <label htmlFor="vehicle1"> 2 units</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                style={{ marginRight: "7px" }}
                checked={classUnits.three}
                onChange={(e) => {
                  setClassUnits({
                    one: classUnits.one,
                    two: classUnits.two,
                    three: !classUnits.three,
                    four: classUnits.four,
                    five: classUnits.five,
                    more: classUnits.more,
                  });
                }}
              />
              <label htmlFor="vehicle1"> 3 units</label>
            </div>
          </div>
          <div className={"col"}>
            <div>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                style={{ marginRight: "7px" }}
                checked={classUnits.four}
                onChange={(e) => {
                  setClassUnits({
                    one: classUnits.one,
                    two: classUnits.two,
                    three: classUnits.three,
                    four: !classUnits.four,
                    five: classUnits.five,
                    more: classUnits.more,
                  });
                }}
              />
              <label htmlFor="vehicle2"> 4 units</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                style={{ marginRight: "7px" }}
                checked={classUnits.five}
                onChange={(e) => {
                  setClassUnits({
                    one: classUnits.one,
                    two: classUnits.two,
                    three: classUnits.three,
                    four: classUnits.four,
                    five: !classUnits.five,
                    more: classUnits.more,
                  });
                }}
              />
              <label htmlFor="vehicle3"> 5 units</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                style={{ marginRight: "7px" }}
                checked={classUnits.more}
                onChange={(e) => {
                  setClassUnits({
                    one: classUnits.one,
                    two: classUnits.two,
                    three: classUnits.three,
                    four: classUnits.four,
                    five: classUnits.five,
                    more: !classUnits.more,
                  });
                }}
              />
              <label htmlFor="vehicle3"> {">"}5 units </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterBox;
