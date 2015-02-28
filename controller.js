(function () {
    "use strict";
    angular.module('demoApp')
    .controller('MainController', function (SuperProductsService, $scope) {
        var mainCtrl = this;

        mainCtrl.superproducts = SuperProductsService.getProducts();


        mainCtrl.addSuperProduct = function (newProduct) {
          SuperProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };

    });

})();
