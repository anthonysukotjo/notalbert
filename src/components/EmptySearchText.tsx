import React from "react";
const style = {
  margin: "50px",
};
const textStyle = {
  color: "grey",
};
const EmptySearchText = () => {
  return (
    <div style={style}>
      <div style={textStyle}>
        ⬆️ Enter a <strong>query above ⬆️ </strong>
        <br />
        <br />
        or/ and
        <br />
        <br />
        ➡️ Select a <strong>School</strong> and <strong>Subject</strong> on the{" "}
        <strong>right➡️ </strong>
        <br />
        <br />
        to 👀 Browse Courses 📚!
      </div>
    </div>
  );
};

export default EmptySearchText;
