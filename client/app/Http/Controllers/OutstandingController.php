<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OutstandingController extends Controller
{
    
    public function index()
    {
        // dd("FFFFFFFF");
        return view('outstanding.index');
    }

}
