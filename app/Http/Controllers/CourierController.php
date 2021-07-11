<?php

namespace App\Http\Controllers;

use App\Courier;
use App\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CourierController extends Controller
{
    public function create(Request $request)
    {
           $validator = Validator::make($request->all(), [
            'Sender_Phone'       => 'string|required|max:20|min:10',
            'Receiver_Phone'    => 'string|required|max:20|min:10',
            'Courier_Status_date'       => 'date',
            'Date'                      => 'date',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' =>false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->errors()   
            ]);
        } 


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
       // $orderid2 = Courier::whereNull('Order_Id')->orderBy('Order_Id','desc')->limit(1)->first();

        $tracking_no = Courier::whereNotNull('tracking_no')->orderBy('tracking_no','desc')->limit(1)->first();
       // $tracking_no2 = Courier::whereNull('tracking_no')->first();

        //CMS-0102-0001
        if(isset($orderid)||isset($tracking_no)){
            $intString=$orderid->Order_Id;
            $int_string =substr($intString,9,12);
            $int_string=intval($int_string)+1;
            $generate_order_id="CMS-0102-".sprintf('%04s', $int_string);

            //``````````````Tracking_no``````

            $intTrackingString=$tracking_no->tracking_no;
            $int_string =substr($intTrackingString,9,12);
            $int_string=intval($int_string)+1;
            $generate_tracking_no="AJM-0728-".sprintf('%04s', $int_string);

        }
        else{
            $generate_order_id='CMS-0102-0001';
            $generate_tracking_no='AJM-0728-2031';
        }
        return response()->json(['orderid'=>$generate_order_id,'trackingno'=>$generate_tracking_no]) ;
        
    }


    public function getCourierList()
    {
        $couriers=Courier::orderBy('id','DESC')->paginate(5) ;
        //$couriers=Courier::all();
        return response()->json(['status'=>200,'courierdata'=>$couriers]);
    }

    public function getEditableData($id)
    {
        $couriers=Courier::find($id);
        return response()->json(['status'=>200,'editableData'=>$couriers]);
        
    }


    public function update($id)
    {
        
        $courier =Courier::find($id);
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


    public function delete($id)
    {
        $courier=Courier::find($id);
        $deleted_data=$courier->delete();
        $couriers=Courier::all();
        if($deleted_data){
           return response()->json(['status'=>200,'deleted_data'=>$deleted_data,'afterdeleteData'=>$couriers,'message'=>'Deleted Successfully']);
       }
    }

    public function getPreviousStatusList()
    {
        $list=Courier::select('Order_Id','Courier_Status_date','Courier_Status')->orderBy('Order_Id','DESC')->get();
        //$list2=Courier::select('Courier_Status')->get();
        //$list2=(object) $list;
        //$list2=json_encode($list);
        return response()->json(['status'=>200,'listData'=>$list]);
        //return $list2;
       
    }


    public function getStatusDataByOrderId($Order_Id)
    {
        $courierstatus=Courier::where('Order_Id',$Order_Id)->first();
        return response()->json(['status'=>200,'editableData'=>$courierstatus]);
        
    }


    public function updateCourierStatus($Order_Id)
    {
        $courier =Courier::where('Order_Id',$Order_Id)->first();
        $courier->Order_Id=request('Order_Id');
        $courier->Courier_Status_date=request('Courier_Status_date');
        $courier->Courier_Status=request('Courier_Status');
        $courier->save();
        return  response()->json(['status'=>200,'afterupdateData'=>$courier]);
    }

    public function trackingCourierData($key)
    {
        
        $trackingData=Courier::where('tracking_no','LIKE',"%$key%")->get();
        return response()->json(['status'=>200,'trackingData'=>$trackingData]);
        
    }


    public function getFilterDataByOrderId($Order_Id)
    {
        $filterData=Courier::where('Order_Id',$Order_Id)->get();
         if(count($filterData)==0){
            return response()->json(['status'=>'failed','filterOrderIdData'=>$filterData]);

        }else{
             return response()->json(['status'=>200,'filterOrderIdData'=>$filterData]);

        }
    }


    public function getPaymentDataOfOrderId($Order_Id)
    {
        $getData=Courier::where('Order_Id',$Order_Id)->first();
        $orderid=$getData->Order_Id;
        $date=$getData->Date;
        $catagory=$getData->Catagory;
        $trackingno=$getData->tracking_no;
        $weight=$getData->Weight;
        $origin=$getData->Sender_Origin;
        $destination=$getData->Receiver_Destination;
        if($origin ==='Dhaka' and $destination ==='Dhaka'){
            $total=($weight*20)+100;
            $delivery_charge=$total-($weight*20);

        }else{
            $total=($weight*20)+200;
            $delivery_charge=$total-($weight*20);
    
        }

        $payment_data = array([
                            "orderid"=>$orderid,
                            "date"=>$date, 
                            "catagory"=>$catagory, 
                            "trackingno"=>$trackingno,
                            "weight"=>$weight,
                            "origin"=>$origin,
                            "destination"=>$destination,
                            "total"=>$total,
                            "delivery_charge"=>$delivery_charge]

                            );
        return response()->json(['status'=>200,'payment_data'=>$payment_data]);
        
    }

    public function postPaymentData()
    {
        $orderid=request('orderid');
        $courier= new Courier();
        $courier=Courier::where('Order_Id',$orderid)->first();
        if($courier->Order_Id == $orderid){

            $payment = new Payment();
            $payment->Order_Id=$courier->Order_Id;
            $payment->Sender_Origin=$courier->Sender_Origin;
            $payment->Receiver_Destination=$courier->Receiver_Destination;
            $payment->Date=$courier->Date;
            $payment->Catagory=$courier->Catagory;
            $payment->Weight=$courier->Weight;
            $payment->tracking_no=$courier->tracking_no;
            $payment->Total_Bill=request('total');
            $payment->Delivery_Charge=request('delivery_charge');
            $payment->save();
            return  response()->json(['status'=>200]);

        }
        
       
    }



    public  function totalcount()
    {
        $couriers = DB::table('couriers')->count();
        $admins = DB::table('admins')->count();
        $totalDelivered = DB::table('couriers')->where('Courier_Status','Courier delivered')->count();
        $pending=$couriers - $totalDelivered;
        return response()->json(['totalcouriers'=>$couriers,'totalAdmins'=>$admins,'pendingCourier'=>$pending,'totalDelivered'=>$totalDelivered]);
        
    }

}