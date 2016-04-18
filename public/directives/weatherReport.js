angular.module('weatherSPA')

.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToFahrenheit: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});