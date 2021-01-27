import React, { useEffect, useState } from "react";
import qs from "qs";

const subjectStyle = {
  // marginTop: '30px',
  width: "100%",
};

const SubjectComponentList = ({
  Boolean: loading,
  Array: data,
  String: school,
}) => {
  console.log("subject component data ");
  console.log(data);
  let elements: JSX.Element[] = [];
  for (let i = 0; i < data.length; i++) {
    const subjectCode = Object.keys(data[i])[0];
    const subjectName = data[i][subjectCode];
    const link = `/course?school=${school}&subject=${subjectCode}`;
    elements.push(
      <div style={subjectStyle}>
        <button className="btn default">
          <a href={link}>
            <h4>
              {" "}
              <strong> {subjectCode} </strong> {subjectName}
            </h4>
          </a>
        </button>
      </div>
    );
  }
  if (!loading) {
    return <div>{elements}</div>;
  } else return <div></div>;
};

const Subjects = ({ location }) => {
  console.log(location);

  const { schoolCode } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { schoolName } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  // const [departmentList, setDepartmentsList] = useState({ loading: true, data: {} });
  const [subjectList, setSubjectList] = useState({
    schoolLoading: true,
    data: {
      firstHalfList: [{}, {}],
      secondHalfList: [{}, {}],
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://schedge.a1liu.com/subjects");
        console.log("fetching...");
        if (!response.ok) {
          // handle invalid search parameters
          return;
        }
        const data = await response.json();
        console.log(data);
        const fullList: Object[] = [];
        const firstHalf: Object[] = [];
        const secondHalf: Object[] = [];

        for (const key in data[schoolCode]) {
          let subject = {};
          subject[key] = data[schoolCode][key].name;
          fullList.push(subject);
        }
        fullList.sort((a, b) =>
          Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1
        );
        for (let i = 0; i < fullList.length; i++) {
          i % 2 === 0
            ? firstHalf.push(fullList[i])
            : secondHalf.push(fullList[i]);
        }

        setSubjectList(() => ({
          schoolLoading: false,
          data: {
            firstHalfList: firstHalf,
            secondHalfList: secondHalf,
          },
        }));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="col">
      <h2 className="font-weight-bolder">{schoolName}</h2>
      <div className="row">
        <div className="col">
          <div className=" text-left">
            <SubjectComponentList
              Boolean={subjectList.schoolLoading}
              Array={subjectList.data.firstHalfList}
              String={schoolCode}
            />
          </div>
        </div>
        <div className="col">
          <div className=" text-left">
            <SubjectComponentList
              Boolean={subjectList.schoolLoading}
              Array={subjectList.data.secondHalfList}
              String={schoolCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
