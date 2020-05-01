import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";


const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="navbar navbar-dark" expand="lg s xs">
                <Navbar.Brand className="navbar-expand-lg navbar-dark col-10 mb-4">
                    <Link className="navbar-brand brand-title" to="#"                   >
                        <h2 className="logo col-10 mb-4"> Google Books Search</h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="justify-content-right navbar-right mr-auto" />
                <Navbar.Collapse className="navbar-right mr-auto collapse">
                    <NavLink className="nav-link heading-title" to="/search">Search</NavLink>
                    <NavLink className="nav-link heading-title" to="/saved">Saved</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;

