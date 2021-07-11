import React, { useState, useEffect } from "react";

export default function CourierAddForm(props) {
    const [senderName, setSenderName] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [origin, setOrigin] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [destination, setDestination] = useState("");
    const [receiverAddress, setReceiverAddress] = useState("");
    const [receiverPhone, setReceiverPhone] = useState("");
    const [receiveremail, setReceiverEmail] = useState("");
    const [date, setDate] = useState("");
    const [statusdate, setStatusDate] = useState("");
    const [catagory, setCatagory] = useState("");
    const [weight, setWeight] = useState("");
    const [order_id, setOrderId] = useState("");
    const [tracking_no, setTrackingNo] = useState("");
    const [courier_status, setCourierStatus] = useState("");

    //validation purpose
    const [errorHandle, setErrorHandle] = useState(false);
    const [Sender_PhoneValid, setSender_PhoneValid] = useState(false);
    const [Receiver_PhoneValid, setReceiver_PhoneValid] = useState(false);
    const [Courier_Status_dateValid, setCourier_Status_dateValid] = useState(
        false
    );
    const [DateValid, setDateValid] = useState(false);

    const formSubmitHandler = e => {
        e.preventDefault();

        const enteredData = {
            Sender_Name: senderName,
            Sender_Address: address,
            Sender_Phone: phone,
            Sender_Email: email,
            Sender_Origin: origin,
            Receiver_Name: receiverName,
            Receiver_Address: receiverAddress,
            Receiver_Destination: destination,
            Receiver_Phone: receiverPhone,
            Receiver_Email: receiveremail,
            Date: date,
            Courier_Status_date: statusdate,
            Catagory: catagory,
            Weight: weight,
            Order_Id: order_id,
            Tracking_No: tracking_no,
            Courier_Status: courier_status
        };

        props.allEnteredCourierData(enteredData);

        setSenderName("");
        setaddress("");
        setphone("");
        setemail("");
        setOrigin("");
        setReceiverName("");
        setDestination("");
        setReceiverAddress("");
        setReceiverPhone("");
        setReceiverEmail("");
        setDate("");
        setStatusDate("");
        setCatagory("");
        setWeight("");
        setOrderId("");
        setTrackingNo("");
        setCourierStatus("");
    };

    const fetechGeneratedId = async () => {
        const generateId = await axios.get("/courier/generatedId");
        setOrderId(generateId.data.orderid);
        setTrackingNo(generateId.data.trackingno);
    };

    useEffect(() => {
        fetechGeneratedId();
    }, []);

    const checkError = () => {
        if (props.error !== null) {
            setSender_PhoneValid(true);

            setReceiver_PhoneValid(true);

            setCourier_Status_dateValid(true);

            setDateValid(true);

            setErrorHandle(true);
        }
    };

    return (
        <div>
            {/* {errorHandle && <CourierAddForm />} */}
            <div className="justify-content-center">
                <div className="">
                    <form
                        onSubmit={formSubmitHandler}
                        className="border border-light bg-primary p-5 m-3 text-light"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Create New Courier
                            </legend>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Sender Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Sender Name"
                                            required
                                            name="senderName"
                                            onChange={e => {
                                                setSenderName(e.target.value);
                                            }}
                                            value={senderName}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label mt-4"
                                        >
                                            Origin
                                        </label>
                                        <div className="input-group-prepend"></div>
                                        <select
                                            className="custom-select"
                                            id="inputGroupSelect03"
                                            name="origin"
                                            required
                                            onChange={e => {
                                                setOrigin(e.target.value);
                                            }}
                                            value={origin}
                                        >
                                            <option value="">
                                                Select Origin
                                            </option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Khulna">
                                                Khulna
                                            </option>
                                            <option value="Rajshahi">
                                                Rajshahi
                                            </option>
                                            <option value="Sylet">Sylet</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInput"
                                            placeholder="Address"
                                            required
                                            name="address"
                                            onChange={e => {
                                                setaddress(e.target.value);
                                            }}
                                            value={address}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInput"
                                            className="form-label mt-4"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInput"
                                            placeholder="Phone"
                                            name="phone"
                                            onChange={e => {
                                                setphone(e.target.value);
                                            }}
                                            value={phone}
                                        />
                                        {Sender_PhoneValid && (
                                            <p className="text-danger">
                                                {props.error.Sender_Phone}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label mt-4"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            required
                                            placeholder="Enter email"
                                            name="email"
                                            onChange={e => {
                                                setemail(e.target.value);
                                            }}
                                            value={email}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-light" />

                            {/*``````````````Receiver info start `````````````````` */}
                            <legend className="text-center">
                                Receiver Information
                            </legend>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Receiver Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="receiverName"
                                            required
                                            onChange={e => {
                                                setReceiverName(e.target.value);
                                            }}
                                            value={receiverName}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label mt-4"
                                        >
                                            Receiver Destination
                                        </label>
                                        <div className="input-group-prepend"></div>
                                        <select
                                            className="custom-select"
                                            name="destination"
                                            required
                                            onChange={e => {
                                                setDestination(e.target.value);
                                            }}
                                            value={destination}
                                        >
                                            <option value="">
                                                Select Destination
                                            </option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Khulna">
                                                Khulna
                                            </option>
                                            <option value="Rajshahi">
                                                Rajshahi
                                            </option>
                                            <option value="Sylet">Sylet</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Receiver Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInput"
                                            placeholder="Address"
                                            required
                                            name="receiverAddress"
                                            onChange={e => {
                                                setReceiverAddress(
                                                    e.target.value
                                                );
                                            }}
                                            value={receiverAddress}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInput"
                                            className="form-label mt-4"
                                        >
                                            Receiver Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInput"
                                            placeholder="Phone"
                                            name="receiverPhone"
                                            onChange={e => {
                                                setReceiverPhone(
                                                    e.target.value
                                                );
                                            }}
                                            value={receiverPhone}
                                        />
                                        {Receiver_PhoneValid && (
                                            <p className="text-danger">
                                                {props.error.Receiver_Phone}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label mt-4"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            required
                                            name="receiveremail"
                                            onChange={e => {
                                                setReceiverEmail(
                                                    e.target.value
                                                );
                                            }}
                                            value={receiveremail}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-light" />

                            {/* ``````````Courier info start ``````````*/}
                            <legend className="text-center">
                                Courier Information
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Date"
                                            name="date"
                                            onChange={e => {
                                                setDate(e.target.value);
                                            }}
                                            value={date}
                                        />
                                        {DateValid && (
                                            <p className="text-danger">
                                                {props.error.Date}
                                            </p>
                                        )}
                                    </div>
                                </div>

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
                                        {Courier_Status_dateValid && (
                                            <p className="text-danger">
                                                {
                                                    props.error
                                                        .Courier_Status_date
                                                }
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label mt-4"
                                        >
                                            Courier Catagory
                                        </label>
                                        <div className="input-group-prepend"></div>
                                        <select
                                            className="custom-select"
                                            id="inputGroupSelect03"
                                            name="catagory"
                                            required
                                            onChange={e => {
                                                setCatagory(e.target.value);
                                            }}
                                            value={catagory}
                                        >
                                            <option value="">
                                                Select Catagory
                                            </option>
                                            <option value="Paper">Paper</option>
                                            <option value="Box">Box</option>
                                            <option value="Glass">Glass</option>
                                            <option value="Liquid">
                                                Liquid
                                            </option>
                                            <option value="Bucket">
                                                Bucket
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label mt-4"
                                        >
                                            Weight
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleInput"
                                            placeholder="Weight in Kg"
                                            required
                                            name="weight"
                                            onChange={e => {
                                                setWeight(e.target.value);
                                            }}
                                            value={weight}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label mt-4"
                                        >
                                            Tracking No
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tracking_no"
                                            readOnly
                                            value={tracking_no}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
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
                                            required
                                            onChange={e => {
                                                setCourierStatus(
                                                    e.target.value
                                                );
                                            }}
                                            value={courier_status}
                                        >
                                            <option>
                                                Select Courier Status
                                            </option>
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

                            <hr className="bg-light" />

                            <button
                                type="submit"
                                className="btn btn-light mt-3"
                                onClick={checkError}
                            >
                                Save & Payment
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
