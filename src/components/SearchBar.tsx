import React, { useState } from "react";

const searchBarStyle = {
  height: "50px",
  width: "900px",
  marginTop: "25px",
  padding: "15px",
  border: "hidden",
};

const boxBorderStyle = {
  width: "930px",
  borderBottom: "solid 0.5px grey",
};

const SearchBar = ({ bool, retrieveSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // console.log(searchQuery);
  return (
    <div>
      <form>
        <div className={"row"} style={boxBorderStyle}>
          <input
            className={"searchBar"}
            style={searchBarStyle}
            value={searchQuery}
            autoComplete="off"
            placeholder="🔍 Search names and descriptions"
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
