import React from "react";
import NavContainer from "../NavContainer";
import Container from "../Courier/Container";
import { Redirect } from "react-router-dom";

export default function DailyReport(props) {
    console.log("daily", props.passeddailyReportData);
    return (
        <NavContainer>
            <div>
                <div>
                    {/* <Redirect className="btn btn-warning btn-sm m-2" to="/">
                        Back
                    </Redirect> */}
                </div>
                <h4 className="text-center text-dark">Daily Reports</h4>
                <div className="row m-2 justify-content-center">
                    <div className="col mt-3">
                        <table
                            className="table table-striped text-dark"
                            style={{ backgroundColor: "white" }}
                        >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>

                                    <th scope="col">Date</th>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Tracking No</th>
                                    <th scope="col">Delivery Charge</th>
                                    <th scope="col">Total Bill</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.passeddailyReportData.map(data => {
                                    return (
                                        <tr key={data.id}>
                                            <th scope="row">#</th>

                                            <td>{data.Date}</td>
                                            <td>{data.Order_Id}</td>
                                            <td>{data.tracking_no}</td>
                                            <td>{data.Delivery_Charge}</td>
                                            <td>{data.Total_Bill}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </NavContainer>
    );
}
