app.controller("CountriesCtrl", ["$scope", "$http", function($scope, $http) {

	$http.get("countries.json").success(function(data) {
		$scope.countries = data;
	});
	
	$scope.sortField = '-name';
	$scope.reverse = true;

}]);