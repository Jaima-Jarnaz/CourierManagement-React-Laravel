import "./css/Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary p-4"
                id="nav-id"
            >
                <div className="container-fluid">
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

                    <div className="" id="navbarColor01">
                        <ul className="">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/courier"
                                >
                                    Couriers
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/teachers"
                                >
                                    Branches
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/about"
                                >
                                    Status
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/register"
                                >
                                    Reports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/login"
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
