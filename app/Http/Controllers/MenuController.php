<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function get_menus()
    {
        $menus = Menu::all();
        return response()->json([
            'menus' => $menus,
            'status' => 200
        ], 200);
    }
}
