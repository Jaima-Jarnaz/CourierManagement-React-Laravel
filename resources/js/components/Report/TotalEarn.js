import React from "react";
import "./totalearn.css";

export default function TotalEarn(props) {
    return (
        <div>
            <div
                className="jumbotron m-5 box"
                style={{ backgroundColor: "white" }}
            >
                <h2 className="text-dark">Total Earnings </h2>
                <hr className="my-2" />
                <h2>
                    <strong className="">{props.totalEarnings}</strong>
                </h2>
            </div>

            <div
                className="jumbotron m-5 box2"
                style={{ backgroundColor: "white" }}
            >
                <h1 className="text-dark">
                    Total Earnings in Month {props.month}
                </h1>
                <hr className="my-2" />
                {props.monthlyTotal == null && (
                    <h4>
                        <strong>Sorry no earnings</strong>
                    </h4>
                )}
                <h2>
                    <strong>{props.monthlyTotal}</strong>
                </h2>
            </div>
        </div>
    );
}
