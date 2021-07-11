import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ dataPerPage, totalData, url, loadMore }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className="text-dark">
                <ul className="pagination pagination-lg justify-content-center">
                    {pageNumbers.map(number => {
                        return (
                            <li
                                className="page-item active border border-light"
                                key={number}
                            >
                                <a
                                    className="page-link"
                                    onClick={loadMore}
                                    href={url}
                                >
                                    {number}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
