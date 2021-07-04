import React from "react";

export default function TrackCourier() {
    return (
        <div className="p-5" style={{ "background-color": "white" }}>
            <div className="row p-5">
                <div className="col-md-6">
                    <form class="d-flex">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Tracking No"
                        />
                        <button
                            class="btn btn-secondary m-3 my-sm-0"
                            type="submit"
                        >
                            Track
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
