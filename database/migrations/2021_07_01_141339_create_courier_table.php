<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourierTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('couriers', function (Blueprint $table) {
            $table->id();
            $table->string('Sender_Name');
            $table->string('Sender_Address');
            $table->string('Sender_Phone');
            $table->string('Sender_Email')->unique();
            $table->string('Sender_Origin');
            $table->string('Receiver_Name');
            $table->string('Receiver_Address');
            $table->string('Receiver_Destination');
            $table->string('Receiver_Phone');
            $table->string('Receiver_Email')->unique();
            $table->date('Date');
            $table->date('Courier_Status_date');
            $table->string('Catagory');
            $table->integer('Weight');
            $table->string('Order_Id');
            $table->string('tracking_no');
            $table->string('Courier_Status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('couriers');
    }
}