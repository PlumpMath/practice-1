/**
 * Created by amyqing719@gmail.com on 2016/10/14.
 */
var app = angular.module('myApp',[]);
var httpApp = angular.module('httpApp',[]);
app.controller('myCtrl',function($scope,$location){
    $scope.myUrl = $location.absUrl();
});
httpApp.controller('httpCtrl',function($scope,$http){
    $http.get("welcome.html").then(function(response){
        $scope.myWelcome = response.data;
    });
});