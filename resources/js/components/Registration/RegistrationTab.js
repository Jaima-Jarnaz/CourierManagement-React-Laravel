import React from "react";
import { NavLink } from "react-router-dom";

export default function RegistrationTab() {
    return (
        <div className="container-fluid">
            <ul className="nav nav-tabs p-2 justify-content-center border-bottom border-light">
                <li className="nav-item">
                    <NavLink
                        className="nav-link  text-light"
                        data-bs-toggle="tab"
                        to="/register"
                    >
                        Register
                    </NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink
                        className="nav-link  text-light"
                        data-bs-toggle="tab"
                        to="/login"
                    >
                        LogIn
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
