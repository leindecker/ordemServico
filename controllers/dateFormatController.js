var app = angular.module('myApp', []);
app.controller('datCtrl', function($scope) {
    $scope.today = new Date();
});
