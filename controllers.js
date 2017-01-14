'use strict';

var app = angular.module('myApp.controllers', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.errors = [];
  
	// Put your code here

	$scope.todayDate = new Date();

  $scope.editUser = function(user) {
    user.newName = user.name;
    user.editing = true;
  }

  $scope.updateUser = function(user) {
    user.updating = true;
    var oldName = user.name;
    user.name = user.newName;
    $http.put('/api/users/' + user.id, user).then(function(response) {
      // were just sending 'user' object as data since it's
      $scope.errros = [];
    }, function(response){
      $scope.errors.push(response.data);
      user.name = oldName;
    }).finally(function(){
      console.log($scope.users);
      user.editing = false;
      user.updating = false
    })
  }

  $scope.addUser = function(newUserName) {
    $scope.addingUser = true;
    $http.post('/api/users', {name: newUserName}).then(function(response) {
      console.log(response.data);
      $scope.users.push(response.data);
      $scope.errors = [];
    }, function(response){
      $scope.errors.push(response.data);
    }).finally(function(){
      $scope.addingUser = false;
      $scope.newUserName = '';
    })
  }
	
	// --- you should not need to edit below this line ---
	
	$scope.delete = function(user) {
	  user.deleting = true;
		$http.delete('/api/users/' + user.id).then(function(response) {
			$scope.users = $scope.users.filter(function(u) {
				return u.id != user.id
			});
		}, function(response) {
			$scope.errors.push(response.data);
		}).finally(function() {
		  user.deleting = false;

		});
	};
	
	$scope.users = [];
	$http.get('/api/users').then(function(response) {
		$scope.users = response.data;
	}, function(response) {
		$scope.errors.push(response.data);
	});

	$scope.serverUsers = [];
	$scope.refreshServerUsers = function() {
	  $scope.refreshingServerUsers = true;
		$http.get('/api/users').then(function(response) {
			$scope.serverUsers = response.data;
		}, function(response) {
			$scope.errors.push(response.data);
		}).finally(function() {
	    $scope.refreshingServerUsers = false;
		});
	};
});

app.directive('dateDir', function() {
  return {
    restrict: 'E',
    template: '{{todayDate | date:longDate}}'
  }
})



















/* uh, heard your call but can't answer and am having trouble calling back. sup?

I just got back home.
*/











