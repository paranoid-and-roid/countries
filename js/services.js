app

.factory("countriesService", function($http) {
	
	var cachedData;
	
	function getData(callback) {
		if(cachedData) {
			callback(cachedData);
		} else {
			$http.get('countries.json').success(function(data) {
				cachedData = data;
				callback(data);
			});
		}
	}
	
	return {
		list: getData,
		find: function(name, callback) {
			getData(function(data) {
				var country = data.filter(function(entry) {
					return entry.name === name;
				})[0];
				callback(country);
			});
		}
	};
});
