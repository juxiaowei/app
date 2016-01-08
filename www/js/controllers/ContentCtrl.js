angular.module('starter.contentctrl',[])
.controller('ContentCtrl', function($scope , News , $stateParams , $http) {
	$scope.item = News.get($stateParams.id);
	// $http.get("").success(function(data, status, headers, config) {
 //       $scope.item = data;
 //    }).error(function(data, status, headers, config) {
 //        //
 //  	})
});
