import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";


const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar center inner navbar-expand-lg navbar-dark">
                <Link className="navbar-brand brand-title" to="#"                   >
                    <h2 className="logo "> Google Books Search</h2>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link heading-title" to="/search">
                                Search
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link heading-title" to="/saved">
                                Saved
              </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;