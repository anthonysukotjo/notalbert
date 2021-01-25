import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const style = {

    height: '65px',
    backgroundColor: "#54008c",

}

const iconStyle = {
    // color: "white",
    // fontSize:'20px',
    // fontStyle: 'bold',
    // marginLeft: '30px',
}

const HeaderBar = () => {

    return  (
        <div style={style} >
            <Navbar collapseOnSelect expand="lg"  variant='dark'  sticky="top"  >
                <Nav className="mr-auto">
                    <a className="navbar-brand" href="/home">
                        <h2 className='font-weight-bolder'>A1b3rt</h2>
                    </a>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className = 'ml-auto'>
                    <Link to='/search'  className="nav-link">
                        <text style={iconStyle}>

                            🔍 Search
                        </text>
                    </Link>
                    <Link to='/timetable'  className="nav-link">
                        <text style={iconStyle}>
                            🗓 Timetable
                        </text>
                            </Link>
                    <Link to='/aboutus'  className="nav-link">
                        <text style={iconStyle}>
                            ✨ About
                        </text>
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default HeaderBar;