import React from "react";

export default function About() {
    return (
        <div className="container-fluid bg-light p-5">
            <div className="">
                <h2 className="text-center text-primary">ABOUT</h2>
            </div>
            <div className="row">
                <div className="col-md-6 p-5">
                    <img
                        src={
                            "https://5.imimg.com/data5/NU/AA/IO/SELLER-43079951/international-sea-courier-service-500x500.jpeg"
                        }
                        className="img-fluid"
                    ></img>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p className="lead">
                                A training session plan – also called a learning
                                plan – is an organized description of the
                                activities and resources you'll use to guide a
                                group toward a specific learning objective.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
