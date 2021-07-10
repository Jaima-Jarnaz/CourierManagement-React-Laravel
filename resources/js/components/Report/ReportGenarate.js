import React, { useEffect, useState } from "react";
import ReportForm from "./ReportForm";
import axios from "axios";
import DailyReport from "./DailyReport";

export default function ReportGenarate() {
    const [totalEarnings, setTotalEarnings] = useState("");
    const [monthlyTotal, setMonthlyTotal] = useState("");
    const [checkButtonClick, setCheckButtonClick] = useState(false);
    const [dailyReportData, setDailyReportData] = useState([]);

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

    const dailyReportGenerate = async () => {
        setCheckButtonClick(true);
        const res = await axios.get("/dailyReports");
        if (res.data.status === 200) {
            setDailyReportData(res.data.dailyreportdata);
            console.log(res.data.dailyreportdata);
        }
    };

    useEffect(() => {
        getTotalAmountData();
    }, []);

    return (
        <div>
            {!checkButtonClick && (
                <ReportForm
                    reportFormData={getReportData}
                    totalEarnings={totalEarnings}
                    monthlyTotal={monthlyTotal}
                    dailyReport={dailyReportGenerate}
                />
            )}
            {checkButtonClick && (
                <DailyReport passeddailyReportData={dailyReportData} />
            )}
        </div>
    );
}
