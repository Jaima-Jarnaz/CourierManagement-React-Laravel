import React, { useState, useEffect } from "react";
import StatusList from "./StatusList";
import axios from "axios";

export default function StatusManageList() {
    const [fetchedPreviousStatus, setFetchedPreviousStatus] = useState([]);
    const [isRendered, setisRendered] = useState(false);
    const getPreviousData = async () => {
        const res = await axios.get("/courier/getPreviousStatusList");
        if (res.data.status == 200) {
            setFetchedPreviousStatus(res.data.listData);
        }
        console.log(res.data.listData);
    };

    useEffect(() => {
        if (!isRendered) {
            getPreviousData();
            setisRendered(true);
        }
    }, []);
    return (
        <React.Fragment>
            <StatusList fetchedPreviousStatus={fetchedPreviousStatus} />
        </React.Fragment>
    );
}
