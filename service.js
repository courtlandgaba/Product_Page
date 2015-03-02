(function () {
  "use strict";
  angular.module('demoApp')
    .factory('ProductsService', function () {
      var Products = [
        {
          picture: "pic1.png",
          title: "R-KAID-R Limited Edition Arcade",
          price: "2900"
        },
        {
          picture: "pic2.png",
          title: "House Tissue Box Cover",
          price: "300"
        },
        {
          picture: "pic3.png",
          title: "Inked America Art Print",
          price: "41"
        },
        {
          picture: "pic4.png",
          title: "Marshall Acton Wireless Speaker",
          price: "144"
        },
        {
          picture: "pic5.png",
          title: "Philips Screeneo Home Theater Projector",
          price: "2000"
        },
        {
          picture: "pic6.png",
          title: "CineSquid Suction Cup Camera Mount",
          price: "100"
        },
        {
          picture: "pic7.png",
          title: "Fujiyama Beer Glass",
          price: "85"
        },
        {
          picture: "pic8.png",
          title: "Desktop Punching Bag",
          price: "20"
        },
        {
          picture: "pic9.png",
          title: "To Do Wall Decal",
          price: "64"
        },
        {
          picture: "pic10.png",
          title: "Thor USB Stick",
          price: "33"
        },
        {
          picture: "pic11.png",
          title: "Nobody Cares Business Cards",
          price: "10"
        },
        {
          picture: "pic12.png",
          title: "Nubè Hammock Shelter",
          price: "275"
        },
        {
          picture: "pic13.png",
          title: "Cooler Tube",
          price: "22"
        },
        {
          picture: "pic14.png",
          title: "Philips Clear LED Light Bulb",
          price: "19"
        },
        {
          picture: "pic15.png",
          title: "I'll Never Lego Print",
          price: "55"
        },
        {
          picture: "pic16.png",
          title: "Samsung Gear Fit Fitness Tracker",
          price: "275"
        }
      ];
      var cartProducts = [
      ];
      var getProducts = function () {
        return Products;
      };
      var addProduct = function (newProduct) {
        Products.unshift(newProduct);
      };
      var getCartProducts = function () {
        return cartProducts;
      };
      var addCartProduct = function (newCartProduct) {
        cartProducts.push(newCartProduct);
      };
      var removeCartProduct = function (cartProduct) {
        cartProducts.pop(cartProduct);
      };
      var getTotalPriceOfCartProducts = function() {
          var totalPrice = 0;
          for (var i = 0; i < cartProducts.length; i++) {
              var price = parseInt(cartProducts[i].price);
              totalPrice += price;
          };
          return totalPrice;
      };
      return {
        getProducts: getProducts,
        addProduct: addProduct,
        getCartProducts: getCartProducts,
        addCartProduct: addCartProduct,
        removeCartProduct: removeCartProduct,
        getTotalPriceOfCartProducts: getTotalPriceOfCartProducts
      };
    });
})();
