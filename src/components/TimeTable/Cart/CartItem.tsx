import React, { useState } from "react";

const CartItem = ({
  courseCode,
  courseName,
  regNo,
  // type,
  // instructors,
  time,
  status,
  index,
  setter,
  indices,
  setterTwo,
  isRecitation,
}) => {
  const style = {
    width: "500px",
    height: "auto",
    marginTop: "10px",
    borderRadius: "30px",
    padding: "10px",
    backgroundColor: "#E7DDEE",
  };
  const [showCal, setShowCal] = useState(false);

  const durationHours = Math.floor((time.minutes || 0) / 60);
  const durationMinutes = (time.minutes || 0) % 60;
  const startTimeHours = parseInt(time.startTime.split(":")[0]);
  const startTimeMinutes = parseInt(time.startTime.split(":")[1]);

  const endTimeHours = startTimeHours + durationHours;
  const endTimeMinutes = startTimeMinutes + durationMinutes;

  const endTimeString =
    endTimeHours.toString() +
    ":" +
    (endTimeMinutes === 0 ? "00" : endTimeMinutes.toString());

  return (
    <div>
      <div className={"col"} style={style}>
        <div
          className={"row justify-content-between"}
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          <div>
            <strong>{courseCode}</strong>
          </div>
          <div>
            <strong>Reg #: </strong> {regNo}
          </div>
          <div>
            <strong>Status: </strong> {status}
          </div>
        </div>
        <div style={{ textAlign: "left", marginLeft: "15px" }}>
          <strong>{courseName}</strong>
        </div>
        {isRecitation ? (
          <div style={{ textAlign: "left", marginLeft: "15px" }}>
            This is a Recitation
          </div>
        ) : (
          <div />
        )}
        <div
          className={"row "}
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          {/*<div>*/}
          {/*  <strong>Type: </strong> {type}*/}
          {/*</div>*/}
          <div style={{ marginRight: "25px" }}>
            <strong>Timings: </strong>
          </div>

          {time.daysWord.length !== 0 ? (
            <div className={"row"}>
              <div style={{ marginRight: "15px" }}>{time.minutes} minutes,</div>

              {time.daysWord.map((a) => (
                <div>{a}</div>
              ))}
              <div style={{ marginLeft: "10px" }}>
                {time.startTime + "-" + endTimeString}
              </div>
            </div>
          ) : (
            <div> No Meetings Found</div>
          )}

          {/*<div>*/}
          {/*  {time !== null || time !== undefined ? time.minutes : <div />}{" "}*/}
          {/*  minutes*/}
          {/*</div>*/}

          {/*{time !== null || time !== undefined ? (*/}
          {/*  time.daysWord.map((a) => <div>{a}</div>)*/}
          {/*) : (*/}
          {/*  <div />*/}
          {/*)}*/}

          {/*{time !== null || time !== undefined ? (*/}
          {/*  time.startTime + "-" + endTimeString*/}
          {/*) : (*/}
          {/*  <div />*/}
          {/*)}*/}
        </div>

        {/*<div className={"row"} style={{ marginLeft: "15px" }}>*/}
        {/*  <div>*/}
        {/*    <strong>Instructors: </strong>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    {instructors.map((a) => (*/}
        {/*      <div style={{ marginLeft: "10px" }}>{a}</div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={"row justify-content-between"}>
          {time.daysWord.length !== 0 ? (
            <button
              className="btn"
              style={{
                marginLeft: "30px",
                backgroundColor: "#54008c",
                color: "white",
                padding: "5px",
              }}
              onClick={() => {
                setShowCal(!showCal);
                let temp;
                console.log("current index is " + index.toString());
                const bool = () => {
                  for (let i = 0; i < indices.length; i++) {
                    if (indices[i] === index) {
                      return true;
                    }
                  }
                  return false;
                };
                console.log(bool());
                if (bool()) {
                  console.log("index is already inside, removing cal object");
                  temp = indices.filter(function (e) {
                    return e !== index;
                  });
                  setterTwo(indices.length - 1);
                } else {
                  console.log("index is not inside, adding cal object");
                  const newArray = indices;
                  newArray.push(index);
                  temp = newArray;
                  setterTwo(indices.length + 1);
                }
                console.log("the new array of indices is");
                console.log(temp);
                setter(temp);
              }}
            >
              <strong> {showCal ? "❌ Hide " : " ✅ Show "}</strong>on TimeTable
            </button>
          ) : (
            <div
              style={{
                marginLeft: "30px",
                backgroundColor: "#54008c",
                color: "white",
                padding: "5px",
              }}
            >
              <strong> NO MEETINGS Found</strong>
            </div>
          )}
          <button
            className="btn"
            style={{
              marginRight: "30px",
              backgroundColor: "#620000",
              color: "white",
              padding: "5px",
            }}
            onClick={() => {
              // const tempObject = JSON.parse(temp || "");
              const tempObject = JSON.parse(
                localStorage.getItem("Cart") || "[]"
              );
              console.log("convert to object");
              console.log(tempObject);
              console.log(tempObject.length);
              console.log("the index is " + index.toString());
              tempObject.splice(index, 1);
              console.log("the result is");
              console.log(tempObject);
              localStorage.setItem("Cart", JSON.stringify(tempObject));
              window.location.reload();

              // const bool = () => {
              //   for (let i = 0; i < indices.length; i++) {
              //     if (indices[i] === index) {
              //       return true;
              //       break;
              //     }
              //   }
              //   return false;
              // };
              // if (bool()) {
              //   console.log("index is already inside, removing cal object");
              //   const temp = indices.filter(function (e) {
              //     return e !== index;
              //   });
              //   setterTwo(indices.length - 1);
              //   setter(temp);
              // }
            }}
          >
            <strong> Remove from Cart</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
