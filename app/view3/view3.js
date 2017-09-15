'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    $scope.createUser = function (uEmail, uPassword) {
        firebase.auth().createUserWithEmailAndPassword(uEmail, uPassword).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("There was an error: ");
            console.log("Error code: " + errorCode);
            console.log("Error message: " + errorMessage);
            // ...
        });
    };
}]);
