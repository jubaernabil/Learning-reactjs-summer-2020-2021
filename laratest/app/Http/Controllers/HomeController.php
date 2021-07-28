<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $type = session()->get('type');
        return view('home.index')
            ->with('type', $type)
            ->with('id', '1');
    }
}
