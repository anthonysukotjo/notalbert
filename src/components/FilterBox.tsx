import React from "react";

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
  return (
    <div className={"col  "} style={boxStyle}>
      <div
        className="row justify-content-between"
        style={{
          marginLeft: "0.0px",
          marginRight: "1px",
        }}
      >
        <div style={{ textAlign: "left", color: "#54008c", fontSize: "23px" }}>
          <strong>Refine By</strong>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-link"
            style={{
              color: "grey",
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">Semester</text>
      </div>

      <div style={{ marginBottom: "3px" }}></div>

      <div>
        <select className="custom-select">
          <option value="0">Spring 2021</option>
          <option value="1">Fall 2020</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">School</text>
      </div>

      <div style={{ marginBottom: "3px" }}></div>

      <div>
        <select className="custom-select">
          <option value="0">Select School:</option>
          <option value="1">Fall 2020</option>
          <option value="2">Spring 2021</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">Subject</text>
      </div>

      <div style={{ marginBottom: "3px" }}></div>

      <div>
        <select className="custom-select">
          <option value="0">Select Subject:</option>
          <option value="1">Fall 2020</option>
          <option value="2">Spring 2021</option>
        </select>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }}></div>

        <text className="font-weight-bolder">Instruction Mode</text>
      </div>

      <div style={{ marginBottom: "5px" }}></div>

      <div className="col flex-column align-items-start">
        <div className="row">
          <input
            type="checkbox"
            value="online"
            //id and name?
            style={{ marginTop: "4px", marginRight: "7px" }}
          />
          <label> Online</label>
        </div>
        <div className="row">
          <input
            type="checkbox"
            value="inPerson"
            style={{ marginTop: "4px", marginRight: "7px" }}
          />
          <label htmlFor="vehicle2"> In person</label>
        </div>
        <div className="row">
          <input
            type="checkbox"
            value="blended"
            style={{ marginTop: "4px", marginRight: "7px" }}
          />
          <label htmlFor="vehicle3"> Blended</label>
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}></div>

      <div style={{ textAlign: "left" }}>
        <text className="font-weight-bolder">Class Units</text>

        <div style={{ marginBottom: "5px" }}></div>

        <div className={"row"}>
          <div className={"col"}>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                style={{ marginRight: "7px" }}
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
