import React from "react";
import TrackCourier from "./TrackCourier";
import Service from "./Service";
import Footer from "./Footer";
import About from "./About";
import NavWebsite from "./NavWebsite";
import HomeSection from "./HomeSection";

export default function Index() {
    return (
        <div className="bg-light" style={{ backgroundColor: "white" }}>
            <NavWebsite />
            <HomeSection />
            <TrackCourier />
            <About />
            <Service />
            <Footer />
        </div>
    );
}
