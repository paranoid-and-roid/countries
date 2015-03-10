app

.controller("CountryListCtrl", ["$scope", "countriesService", function($scope, countriesService) {
	countriesService.list(function(countries) {
		$scope.countries = countries;
	});
}])

.controller("CountryDetailCtrl", ["$scope", "$routeParams", "countriesService", function($scope, $routeParams, countriesService) {
	countriesService.find($routeParams.countryName, function(country) {
		$scope.country = country;
	});
}]);