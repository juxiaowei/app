angular.module('starter.appctrl',[])
.controller('AppCtrl', function($scope,$ionicSlideBoxDelegate, News) {
  $scope.news = News.all();
  $scope.onDrag = function (argument) {
    $ionicSlideBoxDelegate.$getByHandle('ion-list-content').enableSlide(false);
   }
  $scope.onRelease = function (argument) {
    $ionicSlideBoxDelegate.$getByHandle('ion-list-content').enableSlide(true);
   }

});
