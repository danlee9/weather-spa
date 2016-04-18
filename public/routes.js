angular.module('weatherSPA')

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController',
		controllerAs: 'home'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController',
		controllerAs: 'forecast'
	})
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController',
		controllerAs: 'forecast'
	});
}]);