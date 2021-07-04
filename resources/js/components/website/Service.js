import React from "react";
import CardService from "./CardService";

export default function Service() {
    return (
        <React.Fragment>
            <div
                className="container-fluid"
                style={{ "background-color": "white" }}
            >
                <div className="row">
                    <div className="col-md-4">
                        <CardService
                            header={"Cash On Delivery"}
                            text={"Fastest Service"}
                        />
                    </div>
                    <div className="col-md-4">
                        <CardService
                            header={"Cash On Delivery"}
                            text={"Fastest Service"}
                        />
                    </div>
                    <div className="col-md-4">
                        <CardService
                            header={"Cash On Delivery"}
                            text={"Fastest Service"}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
