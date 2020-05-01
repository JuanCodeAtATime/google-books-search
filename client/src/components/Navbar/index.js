import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import "./style.css";


const NavBar = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "#189ff0" }}>
                <Navbar bg="transparent" expand="lg" top="sticky" className="navbar ml-auto col-11">
                    <Navbar.Brand href="#home"><h2 className="logo">Google Book Search</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navitems ml-auto col-5">
                            {/* <Link to="/search" style={{ marginRight: "1rem" }}>
                            <FontAwesomeIcon icon={faSearch}
                                style={{ color: "white", fontSize: "2rem", marginBottom: "1rem", cursor: "pointer" }}
                                data-tip="Search books"
                                data-text-color="white"
                            />
                        </Link> */}
                            <Link to="/saved" style={{
                                textDecoration: "none",
                                color: "white",

                            }}>
                                <FontAwesomeIcon icon={faBook}

                                    style={{
                                        color: "white",
                                        fontSize: "1.5rem",
                                        cursor: "pointer",
                                    }}
                                    data-tip="Saved books"
                                    data-text-color="white"
                                />
                                <span id="span" style={{
                                    color: "white",
                                    fontFamily: "Special Elite",
                                    fontSize: "1.2rem",
                                    marginLeft: ".5rem"
                                }}>Saved Books</span>
                            </Link>
                            <ReactTooltip />
                        </Nav>
                        {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </React.Fragment>

    );
};

export default NavBar;
