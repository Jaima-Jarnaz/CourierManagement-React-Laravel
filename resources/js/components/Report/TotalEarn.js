import React from "react";
import "./totalearn.css";

export default function TotalEarn() {
    return (
        <div>
            <div
                className="jumbotron m-5 box"
                style={{ backgroundColor: "white" }}
            >
                <h1 className="h3">Total Earnings </h1>
                <hr className="my-2" />
            </div>

            <div
                className="jumbotron m-5 box2"
                style={{ backgroundColor: "white" }}
            >
                <h1 className="h3">Total Earnings in Month </h1>
                <hr className="my-2" />
                <p className="lead"></p>
            </div>
        </div>
    );
}
