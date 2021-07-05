import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import CourierPills from "./CourierPills";
import StatusManageList from "./StatusManageList";

export default function StatusOfCourierUpdate() {
    const [statusdate, setStatusDate] = useState("");
    const [order_id, setOrderId] = useState("");
    const [courier_status, setCourierStatus] = useState("");
    //const [getData, setGetData] = useState("");
    const [message, setmessage] = useState(false);
    const { id } = useParams();

    const formSubmitHandler = async e => {
        e.preventDefault();

        const statusUpdatedData = {
            Order_Id: order_id,
            Courier_Status_date: statusdate,
            Courier_Status: courier_status
        };

        const result = await axios.post(
            `courierstatus/update/${id}`,
            statusUpdatedData
        );
        if (result.data.status === 200) {
            //setGetData(result.data.afterupdateData);
            setStatusDate("");
            setOrderId("");
            setCourierStatus("");
            setmessage(true);
        }
    };
    const getPreviousStatusData = async () => {
        const result = await axios.get(`/courier/getStatusDataByOrderId/${id}`);
        setOrderId(result.data.editableData.Order_Id);
        setStatusDate(result.data.editableData.Courier_Status_date);
        setCourierStatus(result.data.editableData.Courier_Status);
        console.log("fulldata", result.data.editableData);
    };

    useEffect(() => {
        getPreviousStatusData();
    }, []);

    return (
        <React.Fragment>
            {message && (
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 alert alert-dismissible alert-success mt-5 text-center">
                            <strong className="">Well done!</strong>
                            Data updated successfully
                        </div>
                    </div>
                    <StatusManageList />
                </div>
            )}
            {!message && (
                <div className="">
                    <CourierPills />
                    <form
                        onSubmit={formSubmitHandler}
                        className="border border-light bg-primary p-5 m-5 text-light"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Manage Courier Status
                            </legend>
                        </fieldset>

                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInput"
                                        className="form-label mt-4"
                                    >
                                        Order Id
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="order_id"
                                        value={order_id}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputPassword1"
                                        className="form-label mt-4"
                                    >
                                        Status Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Status Date"
                                        name="statusdate"
                                        onChange={e => {
                                            setStatusDate(e.target.value);
                                        }}
                                        value={statusdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label mt-4"
                                    >
                                        Courier Status
                                    </label>
                                    <div className="input-group-prepend"></div>
                                    <select
                                        className="custom-select"
                                        name="courier_status"
                                        onChange={e => {
                                            setCourierStatus(e.target.value);
                                        }}
                                        value={courier_status}
                                    >
                                        <option>Select Courier Status</option>
                                        <option value="Courier is on the way">
                                            Courier is on the way
                                        </option>
                                        <option value="Courier is on delivery">
                                            Courier is on delivery
                                        </option>
                                        <option value="Courier picked up">
                                            Courier picked up
                                        </option>
                                        <option value="Courier delivered">
                                            Courier delivered
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <button
                                    type="submit"
                                    className="btn btn-light mt-3"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <hr className="bg-light" />
                    </form>
                </div>
            )}
        </React.Fragment>
    );
}
