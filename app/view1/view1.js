'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
    var ref = firebase.database().ref().child("data");

    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, "data");
}]);