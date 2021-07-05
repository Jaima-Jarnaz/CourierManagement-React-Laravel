import React from "react";
import img2_about from "../../../images/img2_about.jpeg";

export default function About() {
    return (
        <div
            className="container-fluid  p-5"
            style={{ backgroundColor: "white" }}
        >
            <div className="">
                <h2 className="text-center text-primary">ABOUT</h2>
            </div>
            <div className="row">
                <div className="col-md-6 p-5">
                    <img src={img2_about} className="img-fluid"></img>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p className="lead text-dark">
                                A courier transports documents and packages for
                                individuals, businesses, institutions, and
                                government agencies. Our courier prices start
                                from tk 60 for a two day service. The price you
                                pay will depend upon the parcel's weight and the
                                destination.By proper packaging we're sending
                                all the couriers,If you want some special
                                courier packaging.then you need to pay some more
                                money.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
