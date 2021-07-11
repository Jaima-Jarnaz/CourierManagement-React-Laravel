import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import RegistrationTab from "./RegistrationTab";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState("");
    const [error, seterror] = useState("");
    const [checkError, setCheckError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const formSubmitHandler = async e => {
        e.preventDefault();

        const enteredData = {
            email: email,
            password: password
        };
        const res = await axios.post("/login", enteredData);
        console.log("resdata", res);
        if (res.data.status === 200) {
            localStorage.setItem("admin", 1);
            setIsLoggedIn(true);
            setEmail("");
            setPassword("");
        } else {
            setCheckError(true);
            setIncorrectPassword(res.data.incorrectPassword);
            seterror(res.data.errors);
        }
    };

    useEffect(() => {
        const storageData = localStorage.getItem("admin");
        if (storageData == 1) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <>
            {isLoggedIn && (
                <div>
                    <Redirect to="/" />
                </div>
            )}
            {!isLoggedIn && (
                <div className="row justify-content-center">
                    <RegistrationTab />
                    <div className="col-md-6">
                        <form
                            onSubmit={formSubmitHandler}
                            className="border border-light bg-primary p-4 m-3 text-light"
                        >
                            <fieldset>
                                <legend className="text-center">Login</legend>
                                {checkError && (
                                    <div className="">
                                        <div className="row justify-content-center">
                                            {!error && (
                                                <div className="col-md-8 alert alert-dismissible alert-danger mt-5 text-center text-light">
                                                    <strong className="">
                                                        {incorrectPassword}
                                                    </strong>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label mt-4"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={e => {
                                            setEmail(e.target.value);
                                        }}
                                        value={email}
                                    />
                                    {error && (
                                        <p className="text-danger">
                                            {error.email}
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInput"
                                        className="form-label mt-4"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        name="password"
                                        onChange={e => {
                                            setPassword(e.target.value);
                                        }}
                                        value={password}
                                    />
                                    {error && (
                                        <p className="text-danger">
                                            {error.password}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-info btn-block mt-3"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
