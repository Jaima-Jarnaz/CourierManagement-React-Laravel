import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useParams } from "react-router";
import CourierList from "./CourierList";

function DeleteCourier() {
    const [message, setMessage] = useState(false);
    const { id } = useParams();
    const deleteCourierData = async () => {
        const res = await axios.get(`/courier/delete/${id}`);
        if (res.data.status === 200) {
            setMessage(true);
        }
    };
    useEffect(() => {
        deleteCourierData();
    }, []);

    return <div>{message && <CourierList />}</div>;
}

export default DeleteCourier;
