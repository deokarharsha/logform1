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
