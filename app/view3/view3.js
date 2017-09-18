'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
    var Auth = $firebaseAuth();

    $scope.createUser = function(email, password) {
        $scope.message = null;
        $scope.error = null;

        // Create a new user
        Auth.$createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                console.log("User created with uid: " + firebaseUser.uid);
            }).catch(function(error) {
            console.log("An error occurred: " + error);
        });
    };
}]);
