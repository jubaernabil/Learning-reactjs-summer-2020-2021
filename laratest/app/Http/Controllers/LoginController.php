<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;

class LoginController extends Controller
{
    public function index()
    {
        return view('login.index');
    }

    public function verify(UserRequest $req)
    {
        $user = User::where('name', $req->uname)
            ->where('password', $req->password)
            ->get();

        if (count($user) > 0) {
            $req->session()->put('type', $user[0]->type);
            return redirect('/home');
        } else {
            $req->session()->flash('msg', 'invaild username or password');
            return redirect('/login');
        }
    }
}
