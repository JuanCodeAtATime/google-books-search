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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
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