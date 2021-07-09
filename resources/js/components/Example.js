import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//import RegistrationTab from "./Registration/RegistrationTab";
import Register from "./Registration/Register";
import Login from "./Registration/Login";
import Home from "./Home";
import Index from "./website/Index";
import Service from "./website/Service";
import About from "./website/About";
import Footer from "./website/Footer";
import TrackingDataDisplay from "./website/TrackingDataDisplay";
import TrackCourier from "./website/TrackCourier";
import CourierAdd from "./Courier/CourierAdd";
import CourierContainer from "./Courier/CourierContainer";
import CourierList from "./Courier/CourierList";
import CourierUpdate from "./Courier/CourierUpdate";
import StatusManageList from "./Courier/StatusManageList";
import StatusOfCourierUpdate from "./Courier/StatusOfCourierUpdate";
import CourierTrack from "./Courier/CourierTrack";
import ReportGenarate from "./Report/ReportGenarate";

function Example() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />

                    <Route path="/CourierService" exact component={Index} />
                    <Route
                        path="/trackingData"
                        exact
                        component={TrackingDataDisplay}
                    />
                    <Route path="/tracking" exact component={TrackCourier} />
                    <Route path="/service" exact component={Service} />
                    <Route path="/about" exact component={About} />
                    <Route path="/footer" exact component={Footer} />

                    <Route path="/" exact component={Home} />
                    <Route path="/courier" exact component={CourierContainer} />
                    <Route
                        path="/courier/addcourier"
                        exact
                        component={CourierAdd}
                    />
                    <Route
                        path="/courier/courierlist"
                        exact
                        component={CourierList}
                    />
                    <Route
                        path="/courier/edit/:id"
                        exact
                        component={CourierUpdate}
                    />
                    {/* <Route
                        path="/courier/delete/:id"
                        exact
                        component={DeleteCourier}
                    /> */}
                    <Route
                        path="/courierstatus/update/:id"
                        exact
                        component={StatusOfCourierUpdate}
                    />
                    <Route
                        path="/Courier/Statuslist"
                        exact
                        component={StatusManageList}
                    />
                    <Route
                        path="/courier/track"
                        exact
                        component={CourierTrack}
                    />
                    <Route path="/report" exact component={ReportGenarate} />
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
