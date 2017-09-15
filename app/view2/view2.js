'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
}]);
