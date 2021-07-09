import React from "react";

export default function CourierTrackingDataDisplay(props) {
    return (
        <React.Fragment>
            {props.trackingData.length === 0 && (
                <h5 className="text-dark text-center">Sorry no data found</h5>
            )}
            {props.trackingData.map(data => {
                return (
                    <div key={data.id}>
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="font-weight-bold text-dark">
                                    Date :{data.Date}
                                </strong>
                            </div>
                            <div className="col-md-6">
                                <strong className="font-weight-bold text-dark">
                                    Tracking No :{data.tracking_no}
                                </strong>
                            </div>
                        </div>
                        <hr className="bg-dark" />
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="font-weight-bold text-dark">
                                    Sender Name :{data.Sender_Name}
                                </strong>
                                <br />
                                <strong className="font-weight-bold text-dark">
                                    Sender Phone :{data.Sender_Phone}
                                </strong>
                                <br />
                                <strong className="font-weight-bold text-dark">
                                    Sender Address :{data.Sender_Address}
                                </strong>
                            </div>
                            <div className="col-md-6">
                                <strong className="font-weight-bold text-dark">
                                    Reciver Name :{data.Receiver_Name}
                                </strong>
                                <br />
                                <strong className="font-weight-bold text-dark">
                                    Reciver Address :{data.Receiver_Address}
                                </strong>
                                <br />
                                <strong className="font-weight-bold text-dark">
                                    Reciver Phone :{data.Receiver_Phone}
                                </strong>
                            </div>
                        </div>
                        <hr className="bg-dark" />

                        <div className="row">
                            <div className="col-md-6">
                                <strong className="font-weight-bold text-dark">
                                    Courier Catagory :{data.Catagory}
                                </strong>
                                <br />
                                <strong className="font-weight-bold text-dark">
                                    Courier Weight :{data.Weight}
                                </strong>
                            </div>
                            <div className="col-md-6">
                                <strong className="font-weight-bold text-dark">
                                    Courier Status :{data.Courier_Status}
                                </strong>
                                <br />
                                <strong className="font-weight-bold text-dark">
                                    Courier Status Date :
                                    {data.Courier_Status_date}
                                </strong>
                            </div>
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
}
