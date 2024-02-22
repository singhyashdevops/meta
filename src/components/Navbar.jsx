import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom"

import "./Navbar.css"

export default function Navbar(props) {


    // const [isHover, setIsHover] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHover(true);
    // };
    // const handleMouseLeave = () => {
    //     setIsHover(false);
    // };

    // let link = { color: isHover ? 'red' : 'green', cursor:"pointer"};
    
    let headStyle = { color: props.mode === "light" ? "black" : "white" }
    let navStyle = { color: props.mode === "light" ? "#555455" : "#c1c1c1" }
    let switches = { backgroundColor: props.mode === "light" ? "#01af47" : "#75b0ff", border: "none", height: "1.1em", width: "2.2em", boxShadow: "none" }
    let toggler = { backgroundColor: "#ffffff00", color: "black", border: "none" }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={headStyle}>{props.title}</Link>
                <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={toggler}>
                    <span className="navbar-toggler-icon"></span>
                </span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <li className="nav-item" ><Link className="nav-link" style={navStyle} to="/textUtils">Textutils</Link></li>
                        <li className="nav-item" ><Link className="nav-link" style={navStyle} to="/companies">Companies</Link></li>
                        <li className="nav-item" ><Link className="nav-link" style={navStyle} to="/cardmenu">Tutorials</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" style={navStyle} to="/contact">Contact</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" style={navStyle} to="/logform">LogIn/Sign Up</Link></li>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} switchBox`}>
                        <input className="form-check-input" type="checkbox" role="button" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={switches} />
                        <label className="nav-Label mx-2" style={navStyle}>{props.text} Mode Enabled</label>
                    </div> */}
                </div>
            </div>
        </nav >
    )
}


Navbar.propTypes = { title: PropTypes.string }
