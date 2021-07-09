import React from "react";

export default function TrackingDataDisplay(props) {
    return (
        <React.Fragment>
            <div className="container-fluid p-5 bg-success text-light">
                <h3 className="text-center text-light">Your Courier Status</h3>
                <hr className="bg-dark" />
                {props.trackingData.length === 0 && (
                    <h5 className="text-light text-center">
                        Sorry no data found
                    </h5>
                )}
                {props.trackingData.map(data => {
                    return (
                        <div key={data.id}>
                            <div className="row p-5 text-light justify-content-center">
                                <div className="col-md-5 ">
                                    <strong className="font-weight-bold text-light">
                                        Date :{data.Date}
                                    </strong>
                                </div>
                                <div className="col-md-5 ">
                                    <strong className="font-weight-bold text-light">
                                        Tracking No :{data.tracking_no}
                                    </strong>
                                </div>
                            </div>

                            <div className="row  mb-5 justify-content-center">
                                <div className="col-md-5 border border-light p-4 ">
                                    <strong className="font-weight-bold text-light">
                                        Courier Catagory :{data.Catagory}
                                    </strong>
                                    <br />
                                    <strong className="font-weight-bold text-light">
                                        Courier Weight :{data.Weight}
                                    </strong>
                                </div>
                                <div className="col-md-5 border border-light p-4">
                                    <strong className="font-weight-bold text-light">
                                        Courier Status :{data.Courier_Status}
                                    </strong>
                                    <br />
                                    <strong className="font-weight-bold text-light">
                                        Courier Status Date :
                                        {data.Courier_Status_date}
                                    </strong>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <strong className="font-weight-bold text-light">
                                        Sender Name :{data.Sender_Name}
                                    </strong>
                                    <br />
                                    <strong className="font-weight-bold text-light">
                                        Sender Phone :{data.Sender_Phone}
                                    </strong>
                                    <br />
                                    <strong className="font-weight-bold text-light">
                                        Sender Address :{data.Sender_Address}
                                    </strong>
                                </div>
                                <br />
                                <div className="col-md-5">
                                    <strong className="font-weight-bold text-light">
                                        Reciver Name :{data.Receiver_Name}
                                    </strong>
                                    <br />
                                    <strong className="font-weight-bold text-light">
                                        Reciver Address :
                                    </strong>
                                    {data.Receiver_Address}

                                    <br />
                                    <strong className="font-weight-bold text-light">
                                        Reciver Phone :{data.Receiver_Phone}
                                    </strong>
                                </div>
                            </div>

                            <hr className="bg-dark" />
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
