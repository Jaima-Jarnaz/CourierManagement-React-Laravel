import React from "react";
import { NavLink } from "react-router-dom";

export default function Pagination() {
    return (
        <div>
            <div className="text-dark">
                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item disabled border border-light">
                        <NavLink
                            className="page-link"
                            to="/courier/courierlist"
                        >
                            &laquo;
                        </NavLink>
                    </li>
                    <li className="page-item active border border-light">
                        <NavLink
                            className="page-link"
                            to="/courier/courierlist"
                        >
                            1
                        </NavLink>
                    </li>
                    <li className="page-item border border-light">
                        <NavLink
                            className="page-link"
                            to="/courier/courierlist"
                        >
                            2
                        </NavLink>
                    </li>
                    <li className="page-item border border-light">
                        <NavLink
                            className="page-link"
                            to="/courier/courierlist"
                        >
                            3
                        </NavLink>
                    </li>
                    <li className="page-item border border-light">
                        <NavLink
                            className="page-link"
                            to="/courier/courierlist"
                        >
                            5
                        </NavLink>
                    </li>
                    <li className="page-item border border-light">
                        <NavLink
                            className="page-link"
                            to="/courier/courierlist"
                        >
                            &raquo;
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
