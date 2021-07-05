import React, { useState } from "react";

export default function FilterByOrderId(props) {
    //const [clicked, setclicked] = useState(false);
    const [filterOrderId, setFilterOrderId] = useState("");

    const filterOrderidFormHandler = e => {
        e.preventDefault();
        props.enteredOrderId(filterOrderId); //using statelifting
        setFilterOrderId("");
    };

    return (
        <React.Fragment>
            <div className="row justify-content-center m-3">
                <div className="col-md-6">
                    <form
                        className="d-flex"
                        onSubmit={filterOrderidFormHandler}
                    >
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            name="tracking_no"
                            placeholder=" Order Id"
                            onChange={e => {
                                setFilterOrderId(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-secondary m-2 my-sm-0"
                            type="submit"
                        >
                            Filter
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
