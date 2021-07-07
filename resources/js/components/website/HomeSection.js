import React from "react";
import "../css/homesection.css";
import img1 from "../../../images/img1.jpg";

export default function HomeSection() {
    return (
        <div className="" style={{ backgroundColor: "white" }}>
            <div className="row container-fluid p-5 ">
                <div className="col-md-6 mt-5 flip-in-hor-top">
                    <h3>Bringing Growth through on time Delivery </h3>
                    <h1 className="ml-5">
                        <strong>Stay with FastCourier</strong>
                    </h1>
                </div>
                <div className="col-md-6 mt-5 flip-in-hor-top">
                    <img className="img-fluid w-75" src={img1}></img>
                </div>
            </div>
            <div className="">
                <div id="home-section"></div>
            </div>
        </div>
    );
}
