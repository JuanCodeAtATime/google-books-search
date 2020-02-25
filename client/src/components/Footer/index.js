import React from "react";
import "./style.css";
import mernlogo from "./mernlogo.jpg"

const Footer = () => {
    return (
        <footer className="footer navbar-fixed-bottom bg-color text-center heading-subtitle" style={{ color: "whitesmoke" }}>
            <div><img src={mernlogo} alt="mernLogo" className="mern" /><p class="byline">A MERN APP by Juan Rivera</p></div>
        </footer>
    );
};

export default Footer;