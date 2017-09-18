'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'view4Ctrl'
  });
}])

.controller('view4Ctrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
    console.log('in view 4');
    var auth = $firebaseAuth();

    $scope.loginUser = function (email, password) {
        auth.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
            console.log("User Logged in successfully with uid: " + firebaseUser.uid);
        }).catch(function(error) {
            console.log("An Authentication error occurred: " + error);
        });
    };

    $scope.logout = function () {
        auth.$signOut();
    };
}]);
