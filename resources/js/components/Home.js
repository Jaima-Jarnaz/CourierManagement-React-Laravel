import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import CardCount from "./CardCount";
import "./css/Home.css";
import Nav from "./Nav";

export default function Home() {
    const [courierCount, setCourierCount] = useState(0);
    const [adminCount, setAdminCount] = useState(0);
    const [pending, setPending] = useState(0);
    const [delivered, setDelivered] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const clickOnLogOut = () => {
        localStorage.removeItem("admin");
        setIsLoggedIn(false);
    };

    const totalCount = async () => {
        const result = await axios.get("courier/totalcourier");
        setCourierCount(result.data.totalcouriers);
        setAdminCount(result.data.totalAdmins);
        setPending(result.data.pendingCourier);
        setDelivered(result.data.totalDelivered);
        console.log(result.data.totalcouriers);
    };

    useEffect(() => {
        totalCount();

        const storageData = localStorage.getItem("admin");
        if (storageData === null) {
            setIsLoggedIn(false);
        }
    }, []);
    return (
        <React.Fragment>
            {!isLoggedIn && <Redirect to="/register" />}
            {isLoggedIn && (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Nav clickOnLogOut={clickOnLogOut} />
                        </div>
                        <div
                            className="col-md-9 mt-5 bg-light p-5"
                            id="home-side-div"
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <CardCount
                                        title={"Total Courier"}
                                        amount={courierCount}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Total Pending"}
                                        amount={pending}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Total Admin"}
                                        amount={adminCount}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <CardCount
                                        title={"Total Delivered"}
                                        amount={delivered}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Total Branch"}
                                        amount={0}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Catagory"}
                                        amount={adminCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
