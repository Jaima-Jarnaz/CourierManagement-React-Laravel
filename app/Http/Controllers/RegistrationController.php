<?php

namespace App\Http\Controllers;

use App\Registration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
     public function register(Request $request) {

        // return true/false based on validation
        $validator = Validator::make($request->all(), [
            'name'     => 'required',
            'email'    => 'required | unique:admins,email',
            'phone'    => 'required|max:20|min:10',
            'password' => 'required|string|min:8',
        ],[
            'name.required'=>'Name is required',
            'email.unique'=>'Email is already  exists,Please try another one',
            'phone.required'=>'Phone number is required',
            'password.required'=>'please enter your password',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' =>false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->errors()   
            ]);
        } 
            $user = new Registration;
            $user->name=request('name');
            $user->email=request('email');
            $user->phone=request('phone');
            $user->password = Hash::make($request->password);
            //$user->password=request('password');
            $user->save();
            return response()->json(['status'=>200,'success'=>'Successfully Registered']);
    }


    public function login(Request $request)
    {

         $validator = Validator::make($request->all(), [
            'email'    => 'required ',
            'password' => 'required|string|min:8',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' =>false,
                'errors' => $validator->errors()   
            ]);
        } 

        $user = Registration::where('email',$request->email)->first();
       if(!$user || !Hash::check($request->password,$user->password))
       {
           return ['incorrectPassword'=> 'Email or Password Incorrect ','success' =>false];
       }
       return response()->json(['status'=>200,'user'=>$user]);
    }

}