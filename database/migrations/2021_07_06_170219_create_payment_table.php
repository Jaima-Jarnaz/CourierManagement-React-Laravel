<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->date('Date');
            $table->string('Order_Id');
            $table->string('tracking_no');
            $table->string('Sender_Origin');
            $table->string('Receiver_Destination');
            $table->string('Catagory');
            $table->integer('Weight');
            $table->string('Delivery_Charge');
            $table->string('Total_Bill');
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
        Schema::dropIfExists('payments');
    }
}