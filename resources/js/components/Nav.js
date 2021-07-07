import "./css/Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

export default function Nav(props) {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary p-4"
                id="nav-id"
            >
                <div className="container-fluid">
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
                                    to="/Courier/Statuslist"
                                >
                                    Status
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/courier/track"
                                >
                                    Tracking
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    to="/report"
                                >
                                    Reports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link active"
                                    onClick={props.clickOnLogOut}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
