import React from 'react'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom"

export default function Navbar(props) {

    let btnStyle = { fontSize: "15px" }

    let headStyle = { fontSize: "35px", letterSpacing: "2px", color: props.mode === "light" ? "#740000" : "#76b1ff", fontWeight: "bold" }

    let navStyle = { color: props.mode === "light" ? "red" : "#0070ff", letterSpacing: "2px", fontSize: "20px" }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={headStyle} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link navitem" style={navStyle} to="/textUtils">Text Utils</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navitem" style={navStyle} to="/companies">Companies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navitem" style={navStyle} to="/cardmenu">Tutorials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navitem" style={navStyle} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navitem" style={navStyle} to="/logform">LogIn/Sign Up</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={{ backgroundColor: props.mode === "light" ? "#ff6969" : "#96c0ff", border: "none", height: "20px", width: "40px", marginRight: "5px" }} />
                        <label htmlFor="" style={navStyle} >{props.text} MODE ENABLED</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string }
