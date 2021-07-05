import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid bg-success">
            <div className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Fast Courier</h5>
                            <p className="text-light">
                                Send your courier more faster way with
                                FasterCourier
                            </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Sections</h5>

                            <ul className="list-unstyled">
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
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Contact</h5>

                            <ul className="list-unstyled">
                                <li className="text-light">
                                    <p>
                                        <strong> Address</strong>
                                        <br />
                                        Uttora,sector-10,Dhaka,Bangladesh
                                    </p>
                                </li>
                                <li className="text-light">
                                    <p>
                                        <strong>Phone</strong>
                                        <br />
                                        +8801827363536
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">
                    © 2021 Copyright
                    <NavLink to="https://jaimajarnaz.netlify.app/">
                        Jaima Jarnaz
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
