import React from "react";

export default function CardCount(props) {
    return (
        <div className="row">
            <div className="col-md-4">
                <div
                    className="card text-white bg-info mb-3"
                    style={{ maxWidth: "30rem" }}
                >
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h2 className="card-text">+{props.amount}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
