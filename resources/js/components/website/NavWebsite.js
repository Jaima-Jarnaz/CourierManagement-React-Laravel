import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavWebsite.css";
import logo from "../../../images/logo.png";

export default function NavWebsite() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success p-4">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            className="img-fluid"
                            src={logo}
                            style={{ width: "13rem" }}
                        ></img>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/CourierService"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/service"
                                >
                                    Services
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/tracking"
                                >
                                    Tracking
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/footer"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
