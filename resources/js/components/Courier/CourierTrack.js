import React, { useState } from "react";
import Container from "./Container";
import NavContainer from "../NavContainer";
import axios from "axios";
import CourierTrackingDataDisplay from "./CourierTrackingDataDisplay";

export default function CourierTrack() {
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
            <NavContainer>
                <Container>
                    {message && (
                        <CourierTrackingDataDisplay
                            trackingData={gettrackingNoData}
                        />
                    )}

                    {!message && (
                        <form
                            className="d-flex"
                            onSubmit={trackSubmitFormHandler}
                        >
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                name="tracking_no"
                                placeholder="Tracking No"
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
                    )}
                </Container>
            </NavContainer>
        </React.Fragment>
    );
}
