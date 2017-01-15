'use-strict';

var app = angular.module('myApp.showDate', []);

app.controller('dateCtrl', function($scope) {
  $scope.date = new Date();
});