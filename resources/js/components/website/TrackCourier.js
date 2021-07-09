import React, { useState } from "react";
import Container from "../Courier/Container";
import axios from "axios";
import TrackingDataDisplay from "./TrackingDataDisplay";
import { Redirect } from "react-router-dom";

export default function TrackCourier() {
    const [message, setMessage] = useState(false);
    const [trackingNo, setTrackingNo] = useState("");
    const [gettrackingNoData, setGetTrackingNoData] = useState([]);

    const trackSubmitFormHandler = async e => {
        e.preventDefault();

        const res = await axios.get(`/courier/tracking/${trackingNo}`);
        if (res.status === 200) {
            setMessage(true);
            setGetTrackingNoData(res.data.trackingData);
            console.log("tracking", res.data.trackingData);
        }
    };
    console.log(gettrackingNoData);
    return (
        <React.Fragment>
            <div className="" style={{ backgroundColor: "white" }}>
                {message && (
                    <div className="container-fluid  bg-light p-5">
                        <TrackingDataDisplay trackingData={gettrackingNoData} />
                        {/* <Redirect
                            to={{
                                pathname: "/trackingData",
                                state: { trackingData: gettrackingNoData }
                            }}
                        /> */}
                    </div>
                )}

                {!message && (
                    <div className="container-fluid  bg-light p-5">
                        <h2 className="text-center">Track Your Courier</h2>
                        <div className="row  justify-content-center pb-5">
                            <div className="col-md-6 pb-5">
                                <form
                                    className="d-flex p-5"
                                    onSubmit={trackSubmitFormHandler}
                                >
                                    <input
                                        className="form-control me-sm-2"
                                        type="text"
                                        name="tracking_no"
                                        placeholder="Tracking No"
                                        required
                                        onChange={e => {
                                            setTrackingNo(e.target.value);
                                        }}
                                    />
                                    <button
                                        className="btn btn-secondary m-3 my-sm-0"
                                        type="submit"
                                    >
                                        Track
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}
