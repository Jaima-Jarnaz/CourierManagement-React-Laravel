import React from "react";

export default function CardService(props) {
    return (
        <div className="pb-5">
            <div
                className="card text-white bg-success m-5 p-5"
                style={{ maxWidth: "35rem" }}
            >
                <div className="card-header bg-light text-dark text-center">
                    {props.header}
                </div>
                <div className="card-body p-5 text-center">
                    <h2 className="card-text lead">{props.text}</h2>
                </div>
            </div>
        </div>
    );
}
