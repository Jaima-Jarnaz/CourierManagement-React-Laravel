import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CourierAdd from "./Courier/CourierAdd";
import CourierContainer from "./Courier/CourierContainer";
import Home from "./Home";
import CourierList from "./Courier/CourierList";
import CourierUpdate from "./Courier/CourierUpdate";
import DeleteCourier from "./Courier/DeleteCourier";
import StatusManageList from "./Courier/StatusManageList";
import StatusOfCourierUpdate from "./Courier/StatusOfCourierUpdate";
import Index from "./website/Index";

function Example() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/CourierService" exact component={Index} />
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
                    <Route
                        path="/courier/delete/:id"
                        exact
                        component={DeleteCourier}
                    />
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
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
