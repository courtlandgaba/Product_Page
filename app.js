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
                templateUrl: 'views/cart.html',
                controller: 'CartController as cart'
            })
            .when('/detail/:productId', {
                templateUrl: 'views/productDetail.html',
                controller: 'MainController as mainCtrl'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminController as admin'
            })
            .when('/admin/new', {
                templateUrl: 'views/newProduct.html',
                controller: 'AdminController as admin'
            })
            .when('/admin/edit/:productId', {
                templateUrl: 'views/editProduct.html',
                controller: 'AdminController as admin'
            })

    })
    .constant('_', _)
})();
