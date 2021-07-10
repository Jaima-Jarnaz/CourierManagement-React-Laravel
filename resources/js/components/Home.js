import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import CardCount from "./CardCount";
import "./css/Home.css";
import Nav from "./Nav";
import courier from "../../images/courier.png";
import admin from "../../images/admin.png";
import branch from "../../images/branch.png";
import box from "../../images/box.png";
import deliver from "../../images/deliver.png";

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
                            className="col-md-9 mt-5 bg-light p-3"
                            id="home-side-div"
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <CardCount
                                        title={"Courier"}
                                        amount={courierCount}
                                        img={courier}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Admin"}
                                        amount={adminCount}
                                        img={admin}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Branch"}
                                        amount={0}
                                        img={branch}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <CardCount
                                        title={"Delivered"}
                                        amount={delivered}
                                        img={deliver}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <CardCount
                                        title={"Pending"}
                                        amount={pending}
                                        img={box}
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
