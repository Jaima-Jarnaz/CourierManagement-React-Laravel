import React from "react";
import Nav from "../Nav";
import CourierAdd from "./CourierAdd";

export default function CourierContainer() {
    return (
        <React.Fragment>
            <div className="">
                <div className="row">
                    <div className="col-md-3">
                        <Nav />
                    </div>
                    <div className="col-md-9   p-5" id="home-side-div">
                        <CourierAdd />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
