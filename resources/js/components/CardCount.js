import React from "react";
import "./CardCount.css";

export default function CardCount(props) {
    return (
        <div className="mt-3">
            <div className="text-white bg-light">
                <div className="card overlayone">
                    <img
                        src={props.img}
                        className="img-fluid"
                        style={{ width: "17rem" }}
                    ></img>
                    <div className="overlayinn">
                        <h2 className="card-title text-center">
                            {props.title}
                        </h2>
                        <strong>
                            <h1 className="card-text text-center">
                                +{props.amount}
                            </h1>
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
