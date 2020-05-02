import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer navbar-fixed-bottom bg-color text-center heading-subtitle" style={{ color: "whitesmoke" }}>
            <span className="byline">Built with  <FontAwesomeIcon icon={faLayerGroup}
                style={{
                    color: "white",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                }} /> MERN Stack  by <a href="https://juancodeatatime.github.io/myPortfolio/" style={{ textDecoration: "none", color: "whitesmoke" }}>Juan Rivera</a></span>
        </footer>
    );
};

export default Footer;