<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group([
    'prefix' => 'api/',
], function (){

    /**
     * Article api routes
     */

    Route::get('article', 'Api\\ArticleController@index');
    Route::post('article', 'Api\\ArticleController@store');
    Route::get('article/{article}', 'Api\\ArticleController@find');
    Route::put('article/{article}', 'Api\\ArticleController@update');
    Route::delete('article/{article}', 'Api\\ArticleController@delete');

});
