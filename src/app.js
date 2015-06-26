'use strict';

// Imports
var angular = require('angular');
window.jQuery = window.$ = require('jquery');
require('bootstrap');
require('angular-route');
require('angular-spinkit');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');

// Injection
var app = angular.module('app', [
	'ngRoute',
	'app.home',
	'angular-spinkit'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);