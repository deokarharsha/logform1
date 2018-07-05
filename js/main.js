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
