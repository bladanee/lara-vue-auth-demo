<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/admin', function (Request $request) {
    return $request->user();
});
Route::group(
    [
        "as"            =>  "admin.company.",
        "prefix"        =>  "company",
        "namespace"     =>  "Admin",
    ],
    function() {
        Route::get('/',
            [
                "uses"  => "CompanyController@index",
                "as"    => "home",
            ]
        );
        Route::get('/create',
            [
                "uses"  =>  "CompanyController@create",
                "as"    =>  "create"
            ]
        );
        Route::post('/create',
            [
                "uses"  => "CompanyController@store",
            ]
        );
        Route::get('/edit/{id}',
            [
                "uses"  => "CompanyController@edit",
                "as"    => "edit"
            ]
        );
        Route::post('/edit/{id}',
            [
                "uses"  => "CompanyController@update",
            ]
        );
        Route::get('/delete/{id}',
            [
                "uses"  => "CompanyController@destroy",
                "as"    => "delete"
            ]
        );
    }
);
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');
