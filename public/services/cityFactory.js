angular.module('weatherSPA')

.factory('city', function cityFactory() {
	var cityFactory = {};
	cityFactory.city = 'Los Angeles, CA';
	return cityFactory;
});