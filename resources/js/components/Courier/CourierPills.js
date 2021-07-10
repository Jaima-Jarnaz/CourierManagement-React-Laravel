import React from "react";
import "../css/courierPills.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function CourierPills(props) {
    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="row border border-light p-2">
                    <div className="col-md-8">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn btn-warning p-3"
                                    to="/courier/courierlist"
                                >
                                    Courier List
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn btn-info p-3"
                                    to="/courier/addcourier"
                                >
                                    Booking
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn  p-3"
                                    style={{ backgroundColor: "#6366d0" }}
                                    to="/Courier/Statuslist"
                                >
                                    Manage Status
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn btn-danger p-3"
                                    to="/Courier/Statuslist/pending"
                                >
                                    Pending
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link btn p-3 btn-success"
                                    to="/Courier/Statuslist/delivered"
                                >
                                    Delivered
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
