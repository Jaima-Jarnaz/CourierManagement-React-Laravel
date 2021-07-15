import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import swal from "sweetalert";
import RegistrationTab from "./RegistrationTab";
import RegisterForm from "./RegisterForm";

export default function Register() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setmessage] = useState(false);
    const [error, seterror] = useState("");

    const getRegisterFormData = async enteredData => {
        const res = await axios.post("/register", enteredData);
        console.log("resdata", res);
        if (res.data.status === 200) {
            swal(res.data.success, "success");
            setmessage(true);
        } else {
            seterror(res.data.errors);
        }
        return () => {
            console.log("cleanup");
        };
    };

    useEffect(() => {
        const storageData = localStorage.getItem("admin");
        if (storageData == 1) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="container">
            {isLoggedIn && <Redirect to="/" />}
            <RegistrationTab />
            {message && (
                <div className="row justify-content-center">
                    <div className="col-md-6 alert alert-dismissible alert-success mt-5 text-center">
                        <strong>Well done!</strong> Registered Successfully
                    </div>
                    <Redirect to="/login" />
                </div>
            )}

            {!message && (
                <RegisterForm
                    registerFormData={getRegisterFormData} //statelifting
                    error={error}
                />
            )}
        </div>
    );
}
