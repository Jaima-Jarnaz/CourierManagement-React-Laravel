import React, { useState, useEffect } from "react";
import Print from "./Print";
import Container from "./Container";
import axios from "axios";

export default function PaymentForm(props) {
    const order_id = props.enteredOrderId;
    const [getPaymentData, setGetPaymentData] = useState([]);
    const [message, setmessage] = useState(false);

    const gettingPaymentData = async () => {
        const res = await axios.get(`/courier/payment/${order_id}`);
        if (res.data.status === 200) {
            setGetPaymentData(res.data.payment_data);
            console.log("payment", res.data.payment_data);
        }
    };

    const postPaymentData = async () => {
        const result = await axios.post(
            "/courier/paymentdata",
            getPaymentData[0]
        );
        if (result.data.status === 200) {
            setmessage(true);
        }
    };

    useEffect(() => {
        gettingPaymentData();
    }, []);
    console.log(getPaymentData);

    return (
        <React.Fragment>
            <Container>
                {message && <Print />}
                {!message &&
                    getPaymentData.map(data => {
                        return (
                            <div className="" key={data.trackingno}>
                                <div className="border border-success p-5">
                                    <h3 className="text-center m-3">
                                        Total Bill
                                    </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong className="font-weight-bold text-dark">
                                                Date
                                                <p style={{ color: "#57728e" }}>
                                                    {data.date}
                                                </p>
                                            </strong>
                                        </div>
                                        <div className="col-md-6">
                                            <strong className="font-weight-bold text-dark">
                                                Tracking No
                                                <p style={{ color: "#57728e" }}>
                                                    {data.trackingno}
                                                </p>
                                            </strong>
                                        </div>
                                    </div>
                                    <hr className="bg-dark" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong className="font-weight-bold text-dark">
                                                Sender Address
                                                <p style={{ color: "#57728e" }}>
                                                    {data.origin}
                                                </p>
                                            </strong>
                                        </div>
                                        <div className="col-md-6">
                                            <strong className="font-weight-bold text-dark">
                                                Reciver Address
                                                <p style={{ color: "#57728e" }}>
                                                    {data.destination}
                                                </p>
                                            </strong>
                                        </div>
                                    </div>
                                    <hr className="bg-dark" />

                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong className="font-weight-bold text-dark">
                                                Courier Catagory
                                                <p style={{ color: "#57728e" }}>
                                                    {data.catagory}
                                                </p>
                                            </strong>
                                            <br />
                                            <strong className="font-weight-bold text-dark">
                                                Courier Weight
                                                <p style={{ color: "#57728e" }}>
                                                    {data.weight}
                                                </p>
                                            </strong>
                                        </div>
                                        <div className="col-md-6">
                                            <strong className="font-weight-bold text-dark">
                                                Delivery Charge
                                                <p style={{ color: "#57728e" }}>
                                                    {data.delivery_charge}
                                                </p>
                                            </strong>
                                            <br />
                                            <strong className="font-weight-bold text-dark">
                                                Total Bill
                                                <p style={{ color: "#57728e" }}>
                                                    {data.total}
                                                </p>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <hr className="bg-sunccess" />
                                <button
                                    className="btn btn-success"
                                    onClick={postPaymentData}
                                >
                                    Save & Print
                                </button>
                            </div>
                        );
                    })}
            </Container>
        </React.Fragment>
    );
}
