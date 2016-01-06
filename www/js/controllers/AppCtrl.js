angular.module('starter.appctrl',[])
.controller('AppCtrl', function($scope,$ionicSlideBoxDelegate, News) {
  $scope.news = News.all();
  $scope.onDrag = function (argument) {
    $ionicSlideBoxDelegate.$getByHandle('ion-list-content').enableSlide(false);
  }
  $scope.onRelease = function (argument) {
     $ionicSlideBoxDelegate.$getByHandle('ion-list-content').enableSlide(true);
  }
  $scope.slideHasChanged = function ($index){
  	$scope.jumpToQuote($index);
  }
  $scope.jumpToQuote = function (quote) {
  	$scope.quoteSelected = quote;
  	var quotePosition = $ionicPosition.position(angular.element(document.getElementById('quote-'+quote)));
  	$ionicScrollDelegate.$getByHandle('app-index-scroll-nav').scrollTo(quotePosition.left, quotePosition.top, true);
  }
});
