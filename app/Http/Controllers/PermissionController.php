<?php

namespace App\Http\Controllers;

use App\Models\UserPermission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function get_permmissions()
    {
        $permissions = UserPermission::all();
        return response()->json([
            'permissions' => $permissions,
            'status' => 200
        ]);
    }
}
