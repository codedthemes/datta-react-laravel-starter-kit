<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {return Inertia::render('welcome');})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {return Inertia::render('navigation/dashboard/Default');})->name('dashboard');

    // Dashboard
    Route::get('dashboard/default', function () {return Inertia::render('navigation/dashboard/Default');})->name('default');
       
    // Basic component
    Route::get('basic/buttons', function () {return Inertia::render('components/basic/Button');})->name('Button');
    Route::get('basic/badges', function () {return Inertia::render('components/basic/Badges');})->name('Badges');
    Route::get('basic/breadcrumb', function () {return Inertia::render('components/basic/Breadcrumb');})->name('Breadcrumb');
    Route::get('basic/collapse', function () {return Inertia::render('components/basic/Collapse');})->name('Collapse');
    Route::get('basic/tabs-pills', function () {return Inertia::render('components/basic/TabsPills');})->name('TabsPills');
    Route::get('basic/typography', function () {return Inertia::render('components/basic/Typography');})->name('Typography');
    
    // Forms element
    Route::get('forms/form-elements/basic', function () {return Inertia::render('forms/form-element/FormBasic');})->name('FormBasic');
    
    // Bootstrap table
    Route::get('tables/bootstrap-table/basic-table', function () {return Inertia::render('table/bootstrap-table/BasicTable');})->name('BasicTable'); 

    // Chart
    Route::get('charts/apex-chart', function () {return Inertia::render('charts/ApexChart');})->name('ApexChart');
    
    // Map
    Route::get('map/google-map', function () {return Inertia::render('maps/GoogleMap');})->name('GoogleMap');
    
    // Login
    Route::get('auth/login-v1', function () {return Inertia::render('auth/login/LoginV1');})->name('LoginV1'); 
    
    // Register
    Route::get('auth/register-v1', function () {return Inertia::render('auth/register/RegisterV1');})->name('RegisterV1');

    Route::get('other/sample-page', function () {return Inertia::render('SamplePage');})->name('SamplePage');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
