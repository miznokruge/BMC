'use strict';

angular.module('bmcApp', ['ngRoute','ngResource'])
	.config(function ($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'views/main.html',
	        controller: 'MainCtrl'
	      })
	      .when('/iterations/:id',{
	      	templateUrl:'views/iterations.html',
	      	controller:'IterationCtrl'
	      })
	      .when('/canvas/:id/:index',{
	      	templateUrl:'views/canvas.html',
	      	controller:'CanvasCtrl'
	      })
	      .otherwise({
	        redirectTo: '/'
	      });
	  });


