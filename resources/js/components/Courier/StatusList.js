import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function StatusList(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row m-2 justify-content-center">
                    <div className="col mt-2">
                        <table
                            className="table table-striped text-dark"
                            style={{ backgroundColor: "white" }}
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Status Date</th>
                                    <th scope="col">Courier Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {props.fetchedPreviousStatus.map(data => {
                                    return (
                                        <tr key={data.Order_Id}>
                                            <td>{data.Order_Id}</td>
                                            <td>{data.Courier_Status_date}</td>
                                            <td>{data.Courier_Status}</td>

                                            <td>
                                                <NavLink
                                                    to={`/courierstatus/update/${data.Order_Id}`}
                                                    className="btn btn-success"
                                                >
                                                    Status
                                                </NavLink>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
