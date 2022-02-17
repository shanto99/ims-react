<?php

namespace App\Http\Controllers;

use App\Models\MenuSub;
use Illuminate\Http\Request;

class SubMenuController extends Controller
{
    public function get_sub_menus()
    {
        $subMenus = MenuSub::with('menu')->get();
        return response()->json([
            'subMenus' => $subMenus,
            'status' => 200
        ]);
    }
}
