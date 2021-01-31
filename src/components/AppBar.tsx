import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  height: "65px",
  backgroundColor: "#54008c",
  marginBottom: "-10px",
};

const iconStyle = {
  // color: "white",
  // fontSize:'20px',
  // fontStyle: 'bold',
  // marginLeft: '30px',
};

const HeaderBar = () => {
  return (
    <div style={style}>
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <a className="navbar-brand" href="/home">
            <h2 className="font-weight-bolder">A1b3rt</h2>
          </a>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{ backgroundColor: "#54008c" }}>
            <Link to="/home" className="nav-link">
              <text style={iconStyle}>
                🔍 <strong>Search</strong>
              </text>
            </Link>
            <Link to="/timetable" className="nav-link">
              <div style={iconStyle}>
                🗓 <strong>Timetable</strong>
              </div>
            </Link>
            <Link to="/aboutus" className="nav-link">
              <div style={iconStyle}>
                ✨ <strong>About</strong>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderBar;
