'use strict';

/**
 * @ngdoc overview
 * @name mindpowerApp
 * @description
 * # mindpowerApp
 *
 * Main module of the application.
 */
angular
  .module('mindpowerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/privacy-policy', {
        templateUrl: 'views/privacy-policy.html',
        controller: 'PrivacyPolicyCtrl',
        controllerAs: 'privacyPolicy'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/affiliates', {
        templateUrl: 'views/affiliates.html',
        controller: 'AffiliatesCtrl',
        controllerAs: 'affiliates'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
