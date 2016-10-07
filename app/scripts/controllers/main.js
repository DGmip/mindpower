'use strict';

/**
 * @ngdoc function
 * @name mindpowerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mindpowerApp
 */
angular.module('mindpowerApp')
  .controller('MainCtrl', function () {
    this.submitGetFreeBookForm = function() {
      window.alert('submit');
    };
  });
