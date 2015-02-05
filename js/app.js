var app = angular.module('finance', ['ngGrid', 'ngRoute']);

	app.config(function($routeProvider){

	  $routeProvider
	  	.when('/', {
	  		templateUrl: 'js/home.html',
	  		controller: 'homeCtrl'
	  	})
	  	.when('/search/:term', {
	  		templateUrl: 'js/searchView.html',
	  		controller: 'searchCtrl'
	  	})
	  	.otherwise({
	  		redirectTo: '/'
	  	})

	});