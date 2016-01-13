// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.listctrl' , 'starter.appctrl' , 'starter.contentctrl' , 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })


  // Each tab has its own nav history stack:

  .state('tab.index', {
    url: '/index',
    views: {
      'menuContent': {
        templateUrl: 'templates/index.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.xwzx', {
    url: '/xwzx',
    views: {
      'xwzx': {
        templateUrl: 'templates/xwzx.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.charm', {
    url: '/charm',
    views: {
      'charm': {
        templateUrl: 'templates/charm.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.xxgk', {
    url: '/xxgk',
    views: {
      'xxgk': {
        templateUrl: 'templates/xxgk.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.detail', {
    url: '/detail/:id',
    views: {
      'xwzx': {
        templateUrl: 'templates/detail.html',
        controller: 'ContentCtrl'
      }
    }
  })

  .state('tab.list', {
    url: '/list',
    views: {
      'menuContent': {
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/index');

});
