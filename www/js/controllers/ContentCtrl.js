angular.module('starter.contentctrl',[])
.controller('ContentCtrl', function($scope , $stateParams , News) {
	$scope.item = News.get($stateParams.id);
});
