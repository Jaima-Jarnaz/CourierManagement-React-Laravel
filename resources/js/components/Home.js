import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCount from "./CardCount";
import "./css/Home.css";
import Nav from "./Nav";

export default function Home() {
    const [courierCount, setCourierCount] = useState(0);
    const totalCount = async () => {
        const result = await axios.get("courier/totalcourier");
        setCourierCount(result.data.totalcouriers);
        console.log(result.data.totalcouriers);
    };

    useEffect(() => {
        totalCount();
    }, []);
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Nav />
                    </div>
                    <div
                        className="col-md-9 mt-5 bg-light p-5"
                        id="home-side-div"
                    >
                        <CardCount
                            title={"Total Courier"}
                            amount={courierCount}
                        />
                        <CardCount
                            title={"Total Branch"}
                            amount={courierCount}
                        />
                        <CardCount
                            title={"Total Admin"}
                            amount={courierCount}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
