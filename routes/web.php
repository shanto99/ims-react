<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RolePermissionController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\SubMenuController;

Route::get('/', function () {
    return view('app');
});
Route::prefix('ims-react')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::middleware('auth')->group(function () {
        Route::post('/create_user', [AuthController::class, 'createUser']);
        Route::get('/user', [AuthController::class, 'get_user']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/users_pagination/{page?}', [UserController::class, 'get_users_with_pagination']);
        Route::get('/roles', [RoleController::class, 'get_roles']);
        Route::post('/create_role', [RoleController::class, 'create_role']);
        Route::delete('/delete_role/{roleId}', [RoleController::class, 'delete_role']);

        Route::get('/permissions', [PermissionController::class, 'get_permmissions']);
        Route::get('/roles_permissions', [RolePermissionController::class, 'get_roles_with_permissions']);

        Route::get('/menus', [MenuController::class, 'get_menus']);
        Route::get('/sub_menus', [SubMenuController::class, 'get_sub_menus']);
    });
});

Route::fallback(function () {
    return redirect("/");
});
