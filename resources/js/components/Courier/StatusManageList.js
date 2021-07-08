import React, { useState, useEffect } from "react";
import StatusList from "./StatusList";
import axios from "axios";
import CourierPills from "./CourierPills";
import FilterByOrderId from "./FilterByOrderId";
import { Redirect } from "react-router";

export default function StatusManageList() {
    const [fetchedPreviousStatus, setFetchedPreviousStatus] = useState([]);
    const [error, setError] = useState(false);

    const getPreviousData = async () => {
        const res = await axios.get("/courier/getPreviousStatusList");
        if (res.data.status == 200) {
            setFetchedPreviousStatus(res.data.listData);
        }
        console.log("status", res.data.listData);
    };

    const getFilterDataByOrderId = async enteredOrderId => {
        console.log(enteredOrderId);
        const res = await axios.get(`/courier/filterOrderId/${enteredOrderId}`);
        if (res.status === 200) {
            setFetchedPreviousStatus(res.data.filterOrderIdData);
            console.log("filterOrderIdData", res.data.filterOrderIdData);
        } else {
            setError(true);
        }
        // if (res.status === "failed") {
        //     setError(true);
        // }
    };

    useEffect(() => {
        getPreviousData();
    }, []);

    return (
        <React.Fragment>
            <CourierPills />
            <h4 className="text-center text-light mt-5">Courier Details</h4>
            <FilterByOrderId enteredOrderId={getFilterDataByOrderId} />
            {/* {error && <Redirect to="/" />}
            {!error && ( */}
            <StatusList
                fetchedPreviousStatus={fetchedPreviousStatus}
                error={error}
            />
            {/* )} */}
        </React.Fragment>
    );
}
