import CourierPills from "./CourierPills";
import swal from "sweetalert";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function CourierList() {
    const [fetchedCourierDetails, setFetchedCourierDetails] = useState([]);
    const [otherInfo, setOtherInfo] = useState({});
    const [message, setMessage] = useState(false);
    const [url, setUrl] = useState("/courier/courierlist");
    const [pagination, setPagination] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [dataPerPage] = useState(4);

    const courierFetchedData = async () => {
        const res = await axios.get(url);
        if (res.data.status == 200) {
            setFetchedCourierDetails(
                fetchedCourierDetails.length > 0
                    ? fetchedCourierDetails.concat(res.data.courierdata.data)
                    : res.data.courierdata.data
            );

            setOtherInfo(res.data.courierdata);
            setUrl(res.data.courierdata.next_page_url);
        }
        makePagination(res.data.courierdata);

        console.log("data", res.data.courierdata);
    };

    const loadMore = () => {
        setUrl(pagination.next_page_url);
        courierFetchedData();
    };

    // const first = () => {
    //     setUrl(pagination.first_page_url);
    //     courierFetchedData();
    // };

    const makePagination = allDataWithPagenumUrl => {
        let pagination = {
            current_page: allDataWithPagenumUrl.current_page,
            last_page: allDataWithPagenumUrl.last_page,
            next_page_url: allDataWithPagenumUrl.last_page_url,
            prev_page_url: allDataWithPagenumUrl.prev_page_url,
            first_page_url: allDataWithPagenumUrl.first_page_url
        };
        setPagination(pagination);
    };

    useEffect(() => {
        courierFetchedData();
    }, []);

    const deleteCourierData = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                axios
                    .get(`/courier/delete/${id}`)
                    .then(function(response) {
                        if (response.data.status === 200) {
                            swal(response.data.message, {
                                icon: "success"
                            });
                            setMessage(true);
                        }
                    })
                    .catch(function(error) {
                        swal("Data no deleted!");
                        console.log(error);
                    });
            }
        });
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(otherInfo.total / otherInfo.per_page); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container-fluid">
            {message && (
                <div className="container-fluid">
                    <CourierList />
                </div>
            )}

            {!message && (
                <div className="container-fluid">
                    <CourierPills />
                    <h4 className="text-center text-light mt-5">
                        Courier Details
                    </h4>
                    <div className="row m-2 justify-content-center">
                        <div className="col mt-3">
                            <table
                                className="table table-striped text-dark"
                                style={{
                                    backgroundColor: "white"
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Sender Information</th>
                                        <th scope="col">
                                            Receiver Information
                                        </th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status Date</th>
                                        <th scope="col">Catagory</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Tracking No</th>
                                        <th scope="col">Courier Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fetchedCourierDetails.map(data => {
                                        return (
                                            <tr key={data.id}>
                                                <th scope="row">#</th>
                                                <td>
                                                    <strong>Origin:</strong>
                                                    {data.Sender_Origin}
                                                    <br />
                                                    <strong>
                                                        Sender Name:
                                                    </strong>
                                                    {data.Sender_Name}
                                                    <br />
                                                    <strong>
                                                        Sender Phone:
                                                    </strong>
                                                    {data.Sender_Phone}
                                                    <br />
                                                    <strong>
                                                        Sender Address:
                                                    </strong>
                                                    {data.Sender_Address}
                                                    <br />
                                                    <strong>
                                                        Sender Email:
                                                    </strong>
                                                    {data.Sender_Email}
                                                    <br />
                                                </td>

                                                <td>
                                                    <strong>
                                                        Destination:
                                                    </strong>
                                                    {data.Receiver_Destination}
                                                    <br />
                                                    <strong>
                                                        Receiver Name:
                                                    </strong>
                                                    {data.Receiver_Name}
                                                    <br />
                                                    <strong>
                                                        Receiver Phone:
                                                    </strong>
                                                    {data.Receiver_Phone}
                                                    <br />
                                                    <strong>
                                                        Receiver Address:
                                                    </strong>
                                                    {data.Receiver_Address}
                                                    <br />
                                                    <strong>
                                                        Receiver Email:
                                                    </strong>
                                                    {data.Receiver_Email}
                                                    <br />
                                                </td>

                                                <td>{data.Date}</td>
                                                <td>
                                                    {data.Courier_Status_date}
                                                </td>
                                                <td>{data.Catagory}</td>
                                                <td>{data.Weight}</td>
                                                <td>{data.Order_Id}</td>
                                                <td>{data.tracking_no}</td>
                                                <td>{data.Courier_Status}</td>

                                                <td>
                                                    <NavLink
                                                        to={`/courier/edit/${data.id}`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faEdit}
                                                            className="text-info m-2"
                                                        />
                                                    </NavLink>
                                                    <button
                                                        onClick={() => {
                                                            deleteCourierData(
                                                                data.id
                                                            );
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrashAlt}
                                                            className="text-danger m-2"
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div className="text-dark">
                            <ul className="pagination pagination-lg justify-content-center">
                                {pageNumbers.map(number => {
                                    return (
                                        <li
                                            className="page-item active border border-light"
                                            key={number}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={loadMore}
                                            >
                                                {number}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
