var app = angular.module('carrito', ['ngResource', 'services', 'controllers']);


var services = angular.module('services', ['ngResource']);

services.factory('itemService', ['$resource', function($resource) {
	return $resource('http://localhost:4567/items', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
}]);


var controllers = angular.module('controllers', []);

controllers.controller('itemController' , ['$scope', 'itemService', function($scope, itemService) {
  $scope.items = itemService.query();
  $scope.cantidad = 0;
  $scope.carrito = [];

  $scope.agregarAlCarrito = function(item) {
  	$scope.carrito.push(item);
  	$scope.cantidad = parseInt($scope.cantidad) + parseInt(item.precio);
  };
  $scope.sacarDelCarrito = function(index, precio) {
  	$scope.carrito.splice(index, 1);
  	$scope.cantidad = parseInt($scope.cantidad) - parseInt(precio);
  };
}]);