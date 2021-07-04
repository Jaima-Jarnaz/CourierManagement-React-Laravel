import React from "react";
import TrackCourier from "./TrackCourier";
import Service from "./Service";
import Footer from "./Footer";
import About from "./About";
import NavWebsite from "./NavWebsite";

export default function Index() {
    return (
        <div>
            <NavWebsite />
            <TrackCourier />
            <About />
            <Service />
            <Footer />
        </div>
    );
}
