var contentUrl= "http://data.vip-tao.cn/api/v2/jhs";
angular.module('starter.appctrl',[])
.controller('AppCtrl', function($http,$scope,$ionicSlideBoxDelegate, News ,$ionicPosition,$ionicScrollDelegate,$stateParams , Channel) {

  $scope.data = [];

  $scope.channel = [];
// 新闻中心
  $scope.channel['xwzx'] = Channel.allNewsChannel();
// 美丽句容
  $scope.channel['charm'] = Channel.allCharmChannel();
// 信息公开
  $scope.channel['xxgk'] = Channel.allXxgkChannel();

  $scope.data['xwzx'] = News.all();


  // $http.get(contentUrl).success(function(data, status, headers, config) {
  //      $scope.data['xwzx'] = data;
  // }).error(function(data, status, headers, config) {
  //       //
  // })

  $scope.onDrag = function (argument) {
    $ionicSlideBoxDelegate.$getByHandle('ion-list-content').enableSlide(false);
  };

  $scope.onRelease = function (argument) {
     $ionicSlideBoxDelegate.$getByHandle('ion-list-content').enableSlide(true);
  };

  $scope.slideHasChanged = function ($index){
  	$scope.jumpToQuote($index);
  	$('#quote-'+$index).addClass('hover').siblings().removeClass('hover');
  };

  $scope.jumpToQuote = function (quote) {
  	$scope.quoteSelected = quote;
  	var quotePosition = $ionicPosition.position(angular.element(document.getElementById('quote-'+quote)));
  	$ionicScrollDelegate.$getByHandle('app-index-scroll-nav').scrollTo(quotePosition.left, quotePosition.top, true);
  };

  $scope.appIndexSlide = function($index){
      console.log(this);
      console.log($index);
  };

});
