import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const style = {

    height: '65px',
    backgroundColor: "#54008c",
}

const HeaderBar = () => {

    return  (
        <div style={style} >
            <Navbar collapseOnSelect expand="lg"  variant='dark'  sticky="top"  >
                <Nav className="mr-auto">
                    <a className="navbar-brand" href="#">
                        <h2 className='font-weight-bolder'>(not) Albert</h2>
                    </a>
                </Nav>
            </Navbar>
        </div>
    );
}

export default HeaderBar;