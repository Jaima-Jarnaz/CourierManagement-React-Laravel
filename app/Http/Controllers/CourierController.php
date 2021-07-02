<?php

namespace App\Http\Controllers;

use App\Courier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourierController extends Controller
{
    public function create(Request $request)
    {
        //dd('hello');
        $courier = new Courier();
        $courier->Sender_Name=request('Sender_Name');
        $courier->Sender_Address=request('Sender_Address');
        $courier->Sender_Phone=request('Sender_Phone');
        $courier->Sender_Email=request('Sender_Email');
        $courier->Sender_Origin=request('Sender_Origin');
        $courier->Receiver_Name=request('Receiver_Name');
        $courier->Receiver_Address=request('Receiver_Address');
        $courier->Receiver_Destination=request('Receiver_Destination');
        $courier->Receiver_Phone=request('Receiver_Phone');
        $courier->Receiver_Email=request('Receiver_Email');
        $courier->Date=request('Date');
        $courier->Courier_Status_date=request('Courier_Status_date');
        $courier->Catagory=request('Catagory');
        $courier->Weight=request('Weight');
        $courier->Order_Id=request('Order_Id');
        $courier->tracking_no=request('Tracking_No');
        $courier->Courier_Status=request('Courier_Status');
        $courier->save();
        return  response()->json(['status'=>200]);
    }

    public function genarateId()
    {
        $orderid = Courier::whereNotNull('Order_Id')->orderBy('Order_Id','desc')->limit(1)->first();
        //$data = Courier::where('Order_Id', $orderid['Order_Id'])->value('Order_Id');
        //return $data;
        return $orderid->Order_Id;
        //return $orderid[0]->Order_Id;
    }

    public function getCourierList()
    {
       $couriers=Courier::all();
        return response()->json(['status'=>200,'courierdata'=>$couriers]);
    }

    public  function totalcount()
    {
        $couriers = DB::table('couriers')->count();
        return response()->json(['totalcouriers'=>$couriers]);
        
    }

}