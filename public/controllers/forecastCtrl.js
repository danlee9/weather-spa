angular.module('weatherSPA')

.controller('forecastController', ['$resource', '$routeParams', 'city', 'appId', function($resource, $routeParams, city, appId) {
	this.city = city.city;
	this.days = $routeParams.days || 2;
	console.log(this.days);
	this.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	this.weatherResult = this.weatherAPI.get({q: this.city, cnt: this.days, APPID: appId});

	this.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}

	this.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}
}]);