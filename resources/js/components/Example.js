import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CourierAdd from "./Courier/CourierAdd";
import CourierContainer from "./Courier/CourierContainer";
import Nav from "./Nav";
import Home from "./Home";
import CourierList from "./Courier/CourierList";

function Example() {
    return (
        <Router>
            <>
                <Switch>
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
                    {/* <Route path="/about" exact component={About} />
                    <Route path="/student" exact component={StudentDisplay} />
                    <Route path="/studentlist" exact component={StudentList} />
                    <Route
                        path="/studentupdate/:id"
                        exact
                        component={StudentUpdate}
                    />
                    <Route
                        path="/studentdelete/:id"
                        exact
                        component={StudentDelete}
                    />
                    <Route path="/addcourse" exact component={CourseDisplay} />
                    <Route path="/teachers" exact component={TeachersDisplay} />
                    <Route path="/addteachers" exact component={TeachersAdd} />
                    <Route path="/teacherslist" exact component={TeacherList} />
                    <Route
                        path="/teachersupdate/:id"
                        exact
                        component={TeacherUpdate}
                    />
                    <Route
                        path="/teachersdelete/:id"
                        exact
                        component={TeacherDelete}
                    />{" "}
                    */}
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
