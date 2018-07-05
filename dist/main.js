var app = angular.module("App",["ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'view/home.html',
            controller : 'homeCtrl'
        })
        .when('/login', {
            templateUrl : 'view/login.html',
            controller : 'loginCtrl'
        })
        .when('/register', {
            templateUrl : 'view/register.html',
            controller : 'registerCtrl'
        })
        .otherwise({
            redirectTo : '/login'
        });
    }
]);
 app.controller('testCtrl',[ '$scope', '$http', function ($scope, $http) {
  $scope.abc = "BindSuccesfully";
    $http.get("http://localhost:16557/test").then(function (response) {
      $scope.VehicleType = angular.fromJson(response.data.VehicleType);
    });
    $http.get("http://localhost:16557/test").then(function (response) {
      $scope.VehicleModel = angular.fromJson(response.data.VehicleModel);
    });
    $http.get("http://localhost:16557/test").then(function (response) {
      $scope.State = angular.fromJson(response.data.State);
    });
    $http.get("http://localhost:16557/test").then(function (response) {
      $scope.City = angular.fromJson(response.data.City);
    });

}]);
 app.controller("homeCtrl",['$scope', '$http' , '$location', '$rootScope', function($scope, $http, $location, $rootScope) {

  if($rootScope.uid && $rootScope.pwd){
    $scope.uid = $rootScope.uid ;
  }else{
    $location.path('/login');
  }
  $http.get("http://localhost:16557/home").then(function(response){
    $scope.Menu = angular.fromJson(response.data.Menu);
  });
  $scope.changePage = function(pageURL){
      $scope.pageurl = "view/" + pageURL;
  };
}]);
 app.controller("loginCtrl",['$scope', '$http', '$location', '$rootScope' , function($scope, $http, $location, $rootScope){
  $scope.submit = function(){
    $scope.error = false;
    $http({
          method : "GET",
          url : "http://localhost:16557/authenticate",
          params:{
              "Userid": $scope.Userid,
              "Password": $scope.Password
            }
          }).then(function(response) {
            if(response.data){
              $rootScope.uid = $scope.Userid;
              $rootScope.pwd = $scope.Password;
              $location.path("/");
            }else{
               $scope.error = true;
             }
          });
  };
}]);
