import React from "react";

export default function CardCount(props) {
    return (
        <div className="p-3 mt-3">
            <div
                className="card text-white  mb-3"
                style={{ maxWidth: "35rem" }}
            >
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <h2 className="card-text">+{props.amount}</h2>
                </div>
            </div>
        </div>
    );
}
