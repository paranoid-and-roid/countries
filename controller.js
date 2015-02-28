app.controller("CountriesCtrl", ["$scope", "$http", function($scope, $http) {

	$http.get("moreCountries.json").success(function(data) {
		$scope.data = data;
	});

}]);