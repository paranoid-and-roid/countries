app.controller("CountriesCtrl", ["$scope", "$http", function($scope, $http) {

	$http.get("countries.json").success(function(data) {
		$scope.data = data;
	});

}]);