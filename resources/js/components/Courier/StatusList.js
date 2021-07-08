import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
export default function StatusList(props) {
    // const [errorData,setErrorData]=useState(false);
    // if(props.error===true){
    //     setErrorData(tr);

    // }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row m-2 justify-content-center">
                    <div className="col mt-2">
                        {/* {props.error === true && <Redirect to="/" />}
                        {props.error === false && ( */}
                        <table
                            className="table table-striped text-dark"
                            style={{ backgroundColor: "white" }}
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Status Date</th>
                                    <th scope="col">Courier Status</th>
                                    <th scope="col">Status</th>
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
                                                {data.Courier_Status ===
                                                    "Courier delivered" && (
                                                    <p className="text-light btn btn-sm btn-success">
                                                        Delivered
                                                    </p>
                                                )}

                                                {data.Courier_Status !=
                                                    "Courier delivered" && (
                                                    <p className="text-light btn btn-sm btn-danger">
                                                        Pending
                                                    </p>
                                                )}
                                            </td>
                                            <td>
                                                <NavLink
                                                    to={`/courierstatus/update/${data.Order_Id}`}
                                                    className="btn btn-info"
                                                >
                                                    Status
                                                </NavLink>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* )} */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
