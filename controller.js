(function () {
    "use strict";
    angular.module('demoApp')
    .controller('MainController', function (ProductService, $routeParams, $location, _, $rootScope) {
        console.log("PRODUCTS: Configuring MainController")

        var mainCtrl = this;


        ProductService.getSingleProduct($routeParams.productId).success(function (data) {
            mainCtrl.singleProduct=data;
        });
        ProductService.getProducts().success(function (data) {
            mainCtrl.products = data;
        });
        mainCtrl.currentIndex = $routeParams.productId;

        // mainCtrl.addComment = function (newComment) {
        //     newComment.comment = parseInt(newComment.comment);
        //     ProductService.createComment(newComment);
        //     $location.path('#/detail/{{product._id}}');
        // };
        // ProductService.getComments().success(function (data) {
        //     mainCtrl.comments = data;
        // });

        console.log("PRODUCTS: Done Configuring MainController")

    })

    .controller('AdminController', function (ProductService, $location, $routeParams, _, $rootScope) {

        var admin = this;

        ProductService.getProducts().success(function (data) {
            admin.products = data;
        });
        ProductService.getSingleProduct($routeParams.productId).success(function (data) {
            admin.singleProduct=data;
        });
        admin.currentIndex = $routeParams.productId;

        admin.addProduct = function (newProduct) {
            newProduct.price = parseInt(newProduct.price);
            ProductService.createProduct(newProduct);
            $location.path('/admin');
        };
        admin.deleteProduct = function (id) {
            ProductService.deleteProduct(id);
        };
        admin.updateProduct = function (product) {
            ProductService.updateProduct(product, $routeParams.productId);
            $location.path('/admin');
        };

    })

    .controller('CartController', function (CartService) {

        var cart = this;

        cart.items = CartService.getCartProducts();
        cart.total = 0;

        cart.addCartProduct = function (item) {
            CartService.addCartProduct(item);
        };
        cart.removeCartProduct = function (item) {
            CartService.removeCartProduct(item);
        };
        cart.updateTotal = function () {
            cart.total = CartService.getTotalPriceOfCartProducts();
            return cart.total;
        };
    });
})();
