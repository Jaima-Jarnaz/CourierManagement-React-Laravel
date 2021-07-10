import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import axios from "axios";
import CourierPills from "./CourierPills";
import CourierAddForm from "./CourierAddForm";

export default function CourierAdd() {
    const [message, setmessage] = useState(false);
    const [error, seterror] = useState("");
    const [orderId, setOrderId] = useState("");

    const allEnteredCourierData = async enteredData => {
        setOrderId(enteredData.Order_Id);
        const res = await axios.post("/courier/addcourier", enteredData);
        if (res.data.status === 200) {
            setmessage(true);
        } else {
            seterror(res.data.errors);
        }
    };

    return (
        <React.Fragment>
            <CourierPills />
            {message && (
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 alert alert-dismissible alert-success mt-5 text-center">
                            <strong className="">Well done!</strong>
                            Data saved successfully
                        </div>
                    </div>
                    <PaymentForm enteredOrderId={orderId} />
                </div>
            )}

            {!message && (
                <CourierAddForm
                    allEnteredCourierData={allEnteredCourierData}
                    error={error}
                />
            )}
        </React.Fragment>
    );
}
