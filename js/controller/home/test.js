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
