(function () {
  "use strict";
  angular.module('demoApp')
    .factory('ProductService', function ($http, $rootScope) {

        var url = 'http://tiy-fee-rest.herokuapp.com/collections/ng-server-gabaaa';

      var getProducts = function () {
        return $http.get(url);
      };
      var getComments = function () {
        return $http.get(url);
      };
      var createProduct = function (product) {
        $http.post(url, product);
        $rootScope.$broadcast('product:created');
      };
      var createComment = function (product) {
        $http.post(url, product);
        $rootScope.$broadcast('product:created');
      };
      var updateProduct = function (product, id) {
        $http.put(url + '/' + id, product);
        $rootScope.$broadcast('product:updated');
      };
      var getSingleProduct = function (id) {
        return $http.get(url + '/' + id);
      };
      var deleteProduct = function (id) {
        $http.delete(url + '/' + id);
        $rootScope.$broadcast('product:deleted');
      };
      return {
          getProducts: getProducts,
          createProduct: createProduct,
          deleteProduct: deleteProduct,
          getSingleProduct: getSingleProduct,
          updateProduct: updateProduct,
          createComment: createComment,
          getComments: getComments,
      }

  })


      .factory('CartService', function (_) {
          var cart = [];

          var addCartProduct = function (newCartProduct) {
            cart.push(newCartProduct);
          };
          var getCartProducts = function () {
            return cart;
          };
          var removeCartProduct = function (item) {
              var index = cart.indexOf(item);
              cart.splice(item,1);
          };
          var getTotalPriceOfCartProducts = function () {
              if(!cart.length) return 0;
              return _.pluck(cart, 'price').reduce(function (memo,num) {
                  return memo + num;
              });
          };
          return {
              getCartProducts: getCartProducts,
              addCartProduct: addCartProduct,
              getTotalPriceOfCartProducts: getTotalPriceOfCartProducts,
              removeCartProduct: removeCartProduct,
          };

      });


})();
