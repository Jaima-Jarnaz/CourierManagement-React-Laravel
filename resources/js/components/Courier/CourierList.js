import CourierPills from "./CourierPills";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function CourierList() {
    const [fetchedCourierDetails, setFetchedCourierDetails] = useState([]);
    const courierFetchedData = async () => {
        const res = await axios.get("/courier/courierlist");
        if (res.data.status == 200) {
            setFetchedCourierDetails(res.data.courierdata);
        }
        console.log("data", res.data.courierdata);
    };
    useEffect(() => {
        courierFetchedData();
    }, []);
    console.log("data1213", fetchedCourierDetails);
    return (
        <div className="container-fluid">
            <CourierPills />
            <h4 className="text-center text-light mt-5">Courier Details</h4>
            <div className="row m-2 justify-content-center">
                <div className="col mt-3">
                    <table className="table table-primary table-striped text-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sender Information</th>
                                <th scope="col">Receiver Information</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status Date</th>
                                <th scope="col">Catagory</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Order Id</th>
                                <th scope="col">Tracking No</th>
                                <th scope="col">Courier Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchedCourierDetails.map(data => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">#</th>
                                        <td>
                                            <strong>Origin:</strong>
                                            {data.Sender_Origin}
                                            <br />
                                            <strong>Sender Name:</strong>
                                            {data.Sender_Name}
                                            <br />
                                            <strong>Sender Phone:</strong>
                                            {data.Sender_Phone}
                                            <br />
                                            <strong>Sender Address:</strong>
                                            {data.Sender_Address}
                                            <br />
                                            <strong>Sender Email:</strong>
                                            {data.Sender_Email}
                                            <br />
                                        </td>

                                        <td>
                                            <strong>Destination:</strong>
                                            {data.Receiver_Destination}
                                            <br />
                                            <strong>Receiver Name:</strong>
                                            {data.Receiver_Name}
                                            <br />
                                            <strong>Receiver Phone:</strong>
                                            {data.Receiver_Phone}
                                            <br />
                                            <strong>Receiver Address:</strong>
                                            {data.Receiver_Address}
                                            <br />
                                            <strong>Receiver Email:</strong>
                                            {data.Receiver_Email}
                                            <br />
                                        </td>

                                        <td>{data.Date}</td>
                                        <td>{data.Courier_Status_date}</td>
                                        <td>{data.Catagory}</td>
                                        <td>{data.Weight}</td>
                                        <td>{data.Order_Id}</td>
                                        <td>{data.tracking_no}</td>
                                        <td>{data.Courier_Status}</td>

                                        <td>
                                            <NavLink
                                                to={`/courierupdate/${data.id}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="text-info m-2"
                                                />
                                            </NavLink>
                                            <NavLink
                                                to={`/courierdelete/${data.id}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrashAlt}
                                                    className="text-danger m-2"
                                                />
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
    );
}
