<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('app');
});
Route::prefix('ims-react')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::middleware('auth')->group(function () {
        Route::get('/user', [AuthController::class, 'get_user']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });
});
