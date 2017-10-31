myApp.controller('cliController', function($scope,$route,$routeParams,$http){
  $scope.getClientes = function(){
		$http.get('/api/clientes').then(function(response){
			$scope.clientes = response.data;
		});
	};
	$scope.visualizarCliente = function(){
		var id = $routeParams.id;
		$http.get('/api/clientes/'+ id).then(function(response){
			$scope.cliente = response.data;
		});
	};
	$scope.addCliente = function(){
		$http.post('/api/clientes/', $scope.cliente).then(function(response){
			window.location.href = '/clientes';
		});
	};
	$scope.atualizarCliente = function(){
		var id = $routeParams.id;
		$http.put('/api/clientes/'+ id , $scope.cliente).then(function(response){
			window.location.href = '/clientes';
		});
	};
	$scope.deletarCliente = function(id){
		var id = id;
		$http.delete('/api/clientes/'+ id).then(function(response){
			$route.reload();
		});
	};
});
