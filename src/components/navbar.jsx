// src/components/Navbar.jsx
import React, { useState } from "react";
import "../style/navbar.scss";

import heart from "../assets/heart.svg"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h3>Phinnee</h3>
                    <img src={heart} alt="" />
                    <h3>Deborah</h3>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? "x" : "☰"}
                </button>
                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`} style={{ display: isMenuOpen ? "block" : "none" }}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#story">Our Story</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#rsvp">RSVP</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;