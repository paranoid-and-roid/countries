var app = angular.module("countriesApp" , ['ngRoute'])

.config(["$routeProvider", function($routeProvider){
	
$routeProvider
	.when('/', {
		templateUrl: 'templates/country_list.html',
		controller: 'CountryListCtrl'
	})
	.when('/:countryName', {
		templateUrl: "templates/country_detail.html",
		controller: 'CountryDetailCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
