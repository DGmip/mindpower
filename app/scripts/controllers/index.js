'use strict';

/**
 * @ngdoc function
 * @name mindpowerApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the mindpowerApp
 */
angular.module('mindpowerApp')
  .controller('IndexCtrl', function ($mdMedia) {
    this.smallScreen = $mdMedia('xs');
  });
