import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CourierPills from "./CourierPills";

export default function StatusDelivered() {
    const [fetchedPreviousStatus, setFetchedPreviousStatus] = useState([]);

    const getPreviousData = async () => {
        const res = await axios.get("/courier/getPreviousStatusList");
        if (res.data.status == 200) {
            setFetchedPreviousStatus(res.data.listData);
        }
        console.log("status", res.data.listData);
    };

    useEffect(() => {
        getPreviousData();
    }, []);

    const newArray = fetchedPreviousStatus.filter(
        data => data.Courier_Status === "Courier delivered"
    );

    return (
        <React.Fragment>
            <div className="container-fluid">
                <CourierPills />
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
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newArray.map(data => {
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
