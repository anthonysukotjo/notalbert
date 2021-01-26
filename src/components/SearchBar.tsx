import React, { useState } from "react";

const searchBarStyle = {
  height: "50px",
  width: "800px",
  marginTop: "25px",
  padding: "15px",
  border: "hidden",
};

const boxBorderStyle = {
  width: "830px",
  borderBottom: "solid 0.5px grey",
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);
  return (
    <div>
      <form>
        <div className={"row"} style={boxBorderStyle}>
          <input
            className={"searchBar"}
            style={searchBarStyle}
            value={searchQuery}
            autoComplete="off"
            placeholder="🔍 Search Code, names and descriptions"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button
            type="button"
            className={"btnX"}
            onClick={() => {
              setSearchQuery("");
            }}
          >
            <strong style={{ textAlign: "left" }}>✕</strong>
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
