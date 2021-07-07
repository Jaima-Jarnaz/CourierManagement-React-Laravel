import React, { useState } from "react";

export default function RegisterForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const formSubmitHandler = async e => {
        e.preventDefault();

        const enteredData = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        console.log(enteredData);
        props.registerFormData(enteredData);

        if (props.error !== null) {
            setNameValid(true);

            setEmailValid(true);

            setPhoneValid(true);

            setPasswordValid(true);
        }
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form
                        onSubmit={formSubmitHandler}
                        className="border border-light bg-primary p-4 m-3 text-light"
                    >
                        <fieldset>
                            <legend className="text-center">Register</legend>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label mt-4"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Name"
                                    name="name"
                                    onChange={e => {
                                        setName(e.target.value);
                                    }}
                                    value={name}
                                />
                                {nameValid && (
                                    <p className="text-danger">
                                        {props.error.name}
                                    </p>
                                )}
                            </div>

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
                                {emailValid && (
                                    <p className="text-danger">
                                        {props.error.email}
                                    </p>
                                )}
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="exampleInput"
                                    className="form-label mt-4"
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    placeholder="Phone"
                                    name="phone"
                                    onChange={e => {
                                        setPhone(e.target.value);
                                    }}
                                    value={phone}
                                />
                                {phoneValid && (
                                    <p className="text-danger">
                                        {props.error.phone}
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
                                {passwordValid && (
                                    <p className="text-danger">
                                        {props.error.password}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success mt-3 btn-block"
                            >
                                Register
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
