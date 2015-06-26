'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/homeCtrl');
var NgOnLoad  = require('./directives/ngOnload');



// Home sub-module definition
var home = angular.module('app.home', []);
home.controller('HomeCtrl', ['$sce', '$scope', HomeCtrl]);
home.directive('ngOnLoad',[NgOnLoad]);


module.exports = home;