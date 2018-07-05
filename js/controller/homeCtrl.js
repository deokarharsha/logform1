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
