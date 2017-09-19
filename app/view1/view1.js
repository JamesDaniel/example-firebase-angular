'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "$firebaseObject", '$firebaseAuth', function($scope, $firebaseObject) {
    if (firebase.auth().currentUser !== null) {
        console.log("user id: " + firebase.auth().currentUser.uid);

        var ref = firebase.database().ref().child("users/" + firebase.auth().currentUser.uid);

        var syncUserObject = $firebaseObject(ref);
        syncUserObject.$bindTo($scope, "data");

        // var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
        //     username: $scope.data.text
        // });

    } else {
        console.log("No user currently logged in");
    }
}]);