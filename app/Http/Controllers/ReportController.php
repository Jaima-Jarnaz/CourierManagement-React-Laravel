<?php

namespace App\Http\Controllers;

use App\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function generateReport()
    {
          $data = new Payment();
          $data->month=request('Month');
          $data->year=request('Year');
        //   $data->month="07";
        //   $data->year="2021";
          //$yearMonth=$data->year.'-'.$data->month;
          $paymentData=Payment::whereMonth('Date',$data->month)
                              ->whereYear('Date', $data->year)
                              ->get([ DB::raw('SUM(Total_Bill) as total')]);
          return response()->json(['status'=>200,'monthlyTotal'=>$paymentData]);
         //return $data;
        
    }

    public function total_earnings()
    {
        $total_earnings=Payment::select('Total_Bill')->sum('Total_Bill');
        return response()->json(['status'=>200,'total_earnings'=>$total_earnings]) ;
    }

    public function dailyReports()
    {
        $dailyreportdata=Payment::select('id','Date','Order_Id','tracking_no','Delivery_Charge','Total_Bill')->orderBy('Order_Id','DESC')->get();
        return response()->json(['status'=>200,'dailyreportdata'=>$dailyreportdata]);
      
    }



}