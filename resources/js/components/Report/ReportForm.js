import React from "react";
import NavContainer from "../NavContainer";
import Container from "../Courier/Container";
import TotalEarn from "./TotalEarn";

export default function ReportForm() {
    return (
        <React.Fragment>
            <NavContainer>
                <Container>
                    <form className="">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Month">Month</label>
                                <select
                                    className="form-control custom-select"
                                    name="month"
                                    id=""
                                >
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="Year">Year</label>
                                <select
                                    className="form-control custom-select"
                                    name="year"
                                    id=""
                                >
                                    <option value="2021">2021</option>
                                    <option value="2021">2022</option>
                                    <option value="2021">2023</option>
                                    <option value="2021">2024</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2018">2017</option>
                                    <option value="2018">2016</option>
                                    <option value="2018">2015</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <button
                                className="menu-toggle btn btn-info btn-sm"
                                type="submit"
                            >
                                Filter
                            </button>
                        </div>
                    </form>
                </Container>
                <TotalEarn />
            </NavContainer>
        </React.Fragment>
    );
}
