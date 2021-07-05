import React from "react";
import Nav from "./Nav";

export default function NavContainer({ children }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Nav />
                </div>
                <div
                    className="col-md-9 mt-5 bg-light p-5"
                    style={{ height: "33rem" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
