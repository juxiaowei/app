angular.module('starter.appctrl',[])
.controller('AppCtrl', function($scope, News) {
  $scope.news = News.all();
});
