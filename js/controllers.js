var peopleControllers = angular.module('peopleControllers', ['ngAnimate']);

peopleControllers.controller('ListController', ['$scope', '$http', function ($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.people = data;
	});

}]);

peopleControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.people = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]);