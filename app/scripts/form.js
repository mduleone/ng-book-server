'use strict';

//var form = angular.controller('form', function($scope){return $scope;})
var app = angular.module('ngBookServerApp', []);
app.controller('signupController', function ($scope) {
    $scope.submitted = false;
    $scope.signupForm = function(){
      if($scope.signupForm.$valid){
      // submit as normal
      }else{
        $scope.signupForm.submitted = true;
      }
    };
  });

app.directive('ensureUnique', function($http){
    return {
      require: 'ngModel',
      link: function(scope, ele, attrs, c){
        scope.$watch(attrs.ngModel, function(n){
          if(!n){
            return;
          }
          $http({
            method: 'POST',
            url: './api/validate/'+attrs.ensureUnique,
            data: {'field': attrs.ensureUnique}
          }).success(function(data){
            c.$setValidity('unique', data.isUnique);
          }).error(function(data){
            c.$setValidity('unique', false);
          });
        });
      }
    };
  });