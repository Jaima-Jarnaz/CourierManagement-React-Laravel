<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get("/courier/generatedId","CourierController@genarateId");
Route::get("courier/totalcourier","CourierController@totalcount");
Route::post("/courier/addcourier","CourierController@create");
Route::get("/courier/courierlist","CourierController@getCourierList");
Route::get("/courier/edit/{id}","CourierController@getEditableData");
Route::post("/courier/edit/{id}","CourierController@update");
Route::get("/courier/delete/{id}","CourierController@delete");


//```````manage courier status``````````
Route::get("/courier/getPreviousStatusList","CourierController@getPreviousStatusList");
Route::get("/courier/getStatusDataByOrderId/{id}","CourierController@getStatusDataByOrderId");
Route::post("/courierstatus/update/{id}","CourierController@updateCourierStatus");