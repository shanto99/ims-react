<?php

namespace App\Http\Controllers;

use App\Http\Request\LoginRequest;
use App\Service\MenuService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request, MenuService $menuService)
    {

        if (!Auth::attempt([
            'UserID' => $request->UserID,
            'password' => $request->Password
        ])) {
            throw new \Exception('Wrong user id or password.');
        }

        return $this->get_user($menuService);
    }

    public function get_user(MenuService $menuService)
    {
        $user = Auth::user();
        $user->menus = $menuService->menus($user);

        return response()->json([
            'user' => Auth::user(),
            'status' => 200
        ], 200);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Logged out successfully',
            'status' => 200
        ], 200);
    }
}
