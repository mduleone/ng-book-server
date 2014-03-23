'use strict';

angular.module('ngBookServerApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('api/check').success(function(validate) {
      $scope.validate = validate;
    });
  });
