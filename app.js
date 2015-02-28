(function () {
    "use strict";

    angular.module('demoApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController as mainCtrl'
            })
            .when('/cart', {
                templateUrl: 'views/main2.html'
            })
    });
})();
