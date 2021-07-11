import React from "react";
import "./CardCount.css";

export default function CardCount(props) {
    return (
        <div className="mt-3">
            <div className="text-white bg-light">
                <div className="card overlayone m-2">
                    <img src={props.img} style={{ maxWidth: "71%" }}></img>
                    <h2 className="text-center">{props.amount}</h2>
                    <div className="overlayinn">
                        <h4 className="card-title text-center">
                            {props.title} - {props.amount}
                        </h4>
                    </div>
                </div>
                <div className="footer text-center bg-info">{props.title}</div>
            </div>
        </div>
    );
}
