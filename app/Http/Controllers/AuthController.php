<?php

namespace App\Http\Controllers;

use App\Http\Request\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

        if (!Auth::attempt([
            'UserID' => $request->UserID,
            'password' => $request->Password
        ])) {
            throw new \Exception('Wrong user id or password.');
        }

        return response()->json([
            'user' => Auth::user(),
            'message' => 'Login successful',
            'status' => 200
        ]);
    }

    public function get_user()
    {
        return response()->json([
            'user' => Auth::user(),
            'status' => 200
        ], 200);
    }
}
