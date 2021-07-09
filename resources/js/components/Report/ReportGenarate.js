import React, { useEffect, useState } from "react";
import ReportForm from "./ReportForm";
import axios from "axios";

export default function ReportGenarate() {
    const [totalEarnings, setTotalEarnings] = useState("");
    const [monthlyTotal, setMonthlyTotal] = useState("");

    const getReportData = async getFormData => {
        const res = await axios.post("/reports", getFormData);

        if (res.data.status === 200) {
            setMonthlyTotal(res.data.monthlyTotal[0].total);
        }
        console.log(res.data.monthlyTotal[0].total);
    };

    const getTotalAmountData = async getFormData => {
        const res = await axios.get("/totalEarnings");
        if (res.data.status === 200) {
            setTotalEarnings(res.data.total_earnings);
        }
    };

    useEffect(() => {
        getTotalAmountData();
    }, []);

    return (
        <div>
            <ReportForm
                reportFormData={getReportData}
                totalEarnings={totalEarnings}
                monthlyTotal={monthlyTotal}
            />
        </div>
    );
}
