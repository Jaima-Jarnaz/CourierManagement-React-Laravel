import React from "react";
import "../css/courierPills.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function CourierPills() {
    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="row bg-light border border-success p-3">
                    <div className="col-md-8">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn btn-outline-success p-3 bg-success"
                                    to="/courier/courierlist"
                                >
                                    Courier List
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn btn-outline-success p-3 bg-info"
                                    to="/courier/addcourier"
                                >
                                    Courier Add
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn btn-outline-warning p-3"
                                    to="#"
                                >
                                    Manage Status
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <NavLink className="nav-link" to="/">
                            <FontAwesomeIcon
                                icon={faArrowCircleLeft}
                                className="text-info"
                                id="backIcon"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
