'use strict';

/**
 * @ngdoc overview
 * @name hsStatsFrontApp
 * @description
 * # hsStatsFrontApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hsStatsFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'underscore'
  ]);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('errorInterceptor');

  if (!$httpProvider.defaults.headers.get) {
    $httpProvider.defaults.headers.get = {};
  }
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]);
//app.config(function ($routeProvider, $provide) {
  app.config(function ($routeProvider) {
    //var rootUrl = $("#linkRoot").attr("href");
    //$provide.constant('rootUrl', rootUrl);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });