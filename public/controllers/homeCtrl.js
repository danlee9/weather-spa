angular.module('weatherSPA')

.controller('homeController', ['$scope', '$location', 'city', function($scope, $location, city) {
	this.city = city.city;
	this.forecast = function() {
		$location.path('/forecast');
	};
	$scope.$watch(angular.bind(this, function() {
		return this.city;
	}), function(newVal) {
		city.city = newVal;
	});
}]);