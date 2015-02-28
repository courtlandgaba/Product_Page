(function () {
  "use strict";
  angular.module('demoApp')
    .factory('SuperProductsService', function () {
      var superProducts = [
        {
          picture: "pic1.png",
          title: "R-KAID-R Limited Edition Arcade",
          price: "$2,900"
        },
        {
          picture: "Superman",
          title: "Lex Luthor",
          price: "$10"
        },
        {
          picture: "Superman",
          title: "Lex Luthor",
          price: "$10"
        },
        {
          picture: "Superman",
          title: "Lex Luthor",
          price: "$10"
        }
      ];

      var getSuperProducts = function () {
        return superProducts;
      };
      var addSuperProduct = function (hero) {
        superProducts.push(hero);
      }

      return {
        getProducts: getSuperProducts,
        addProduct: addSuperProduct
      };
    });

})();
