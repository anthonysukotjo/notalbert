import React, { useState } from "react";

const searchBarStyle = {
  height: "50px",
  width: "95%",
  marginTop: "25px",
  padding: "15px",
  border: "hidden",
};

const boxBorderStyle = {
  // width: "auto",
  // minWidth: "min(10vmin,800px)",

  display: "inline-block",
  borderBottom: "solid 0.5px grey",
};

const SearchBar = ({ bool, retrieveSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // console.log(searchQuery);
  return (
    <div style={{ width: "auto", display: "inline-block" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{ width: "auto", display: "inline-block" }}
      >
        <div className={"row searchBarDiv"} style={boxBorderStyle}>
          <input
            className={"searchBar"}
            style={searchBarStyle}
            value={searchQuery}
            autoComplete="off"
            placeholder="🔍 Search course names"
            onChange={(e) => {
              retrieveSearch(e.target.value);
              setSearchQuery(e.target.value);
            }}
          />
          {bool ? (
            <button
              type="button"
              className={"btnX"}
              onClick={() => {
                retrieveSearch("");
                setSearchQuery("");
              }}
            >
              <strong style={{ textAlign: "left" }}>✕</strong>
            </button>
          ) : (
            <div />
          )}
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
