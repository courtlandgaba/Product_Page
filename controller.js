(function () {
    "use strict";
    angular.module('demoApp')
    .controller('MainController', function (ProductsService, $scope) {
        var mainCtrl = this;

        mainCtrl.products = ProductsService.getProducts();
        mainCtrl.cartProducts = ProductsService.getCartProducts();
        mainCtrl.getTotalPriceOfCartProducts = ProductsService.getTotalPriceOfCartProducts();

        mainCtrl.addProduct = function (newProduct) {
          ProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };

        mainCtrl.addCartProduct = function (newCartProduct) {
            ProductsService.addCartProduct(newCartProduct);
            $scope.newCartProduct = {};
        };

        mainCtrl.removeCartProduct = function (cartProduct) {
            ProductsService.removeCartProduct(cartProduct);
            $scope.removeCartProduct = {};
//            ProductsService.getTotalPriceOfCartProducts();

        };

        // mainCtrl.getTotalPriceOfCartProducts = function() {
        //     ProductsService.getTotalPriceOfCartProducts();
        // }



    });

})();
