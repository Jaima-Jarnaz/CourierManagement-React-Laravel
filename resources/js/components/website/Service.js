import React from "react";
import CardService from "./CardService";
import "../css/service.css";

export default function Service() {
    return (
        <React.Fragment>
            <div className="container-fluid bg-light p-5">
                <h2 className="text-center">Our Services</h2>
                <div className="row pb-4 tilt-in-top-1">
                    <div className="col-md-4">
                        <CardService
                            header={"Cash On Delivery"}
                            text={"Fastest courier Service"}
                        />
                    </div>
                    <div className="col-md-4">
                        <CardService
                            header={"Packaging"}
                            text={"Send proper package"}
                        />
                    </div>
                    <div className="col-md-4">
                        <CardService
                            header={"Catagories"}
                            text={"Provide different catagory"}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
