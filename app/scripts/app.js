'use strict';

angular.module('bmcApp', ['ngRoute'])
	.config(function ($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'views/index.html',
	        controller: 'IndexCtrl'
	      })
	      .when('/canvas/:id',{
	      	templateUrl:'views/canvas.html',
	      	controller:'CanvasCtrl'
	      })
	      .when('/iteration/:id',{
	      	templateUrl:'views/iterations.html',
	      	controller:'IterationCtrl'
	      })
	      .otherwise({
	        redirectTo: '/'
	      });
	  });


