import React from "react";
import { Button } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";

const fabStyle = {
  bottom: 20,
  right: 30,
  position: "fixed",
  backgroundColor: "#54008c",
  height: "69px",
  width: "69px",
  borderRadius: "1000px",
} as React.CSSProperties;

const FloatingFilterButton = () => {
  return (
    <div>
      <Button style={fabStyle}>
        <FiFilter />
      </Button>
    </div>
  );
};
export default FloatingFilterButton;
