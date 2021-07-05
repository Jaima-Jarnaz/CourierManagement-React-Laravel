import React from "react";

export default function Container({ children }) {
    return (
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
            <div className="row p-5 justify-content-center">
                <div className="col p-5">{children}</div>
            </div>
        </div>
    );
}
