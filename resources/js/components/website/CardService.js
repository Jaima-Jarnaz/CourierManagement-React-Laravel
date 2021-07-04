import React from "react";

export default function CardService(props) {
    return (
        <div>
            <div
                className="card text-white bg-success m-5 p-5"
                style={{ "max-width": "35rem" }}
            >
                <div className="card-header">{props.header}</div>
                <div className="card-body">
                    <h3 className="card-text">{props.text}</h3>
                </div>
            </div>
        </div>
    );
}
