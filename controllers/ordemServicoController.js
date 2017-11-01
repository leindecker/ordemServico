myApp.controller('ordemServicoController', function($scope,$route,$routeParams,$http){
  $scope.getOrdemServico = function(){
    $http.get('/api/ordem').then(function(response){
      $scope.ordens = response.data;
    });
  };
  $scope.gerarOrdemServico = function(){
    $http.post('/api/ordem/', $scope.ordemServico).then(function(response){
      window.location.href = '#/listarOrdemServico';
    });
  };
  $scope.visualizarOrdemServico = function(){
    var id = $routeParams.id;
    $http.get('/api/ordem/'+ id).then(function(response){
      $scope.ordemServico = response.data;
    });
  };

  $scope.editarOrdemServico = function(){
    var id = $routeParams.id;
    $http.put('/api/ordem/'+ id , $scope.ordemServico).then(function(response){
      window.location.href = '#/listarOrdemServico';
    });
  };

  $scope.deletarOrdemServico = function(id){
    var id = id;
    $http.delete('/api/ordem/'+ id).then(function(response){
      $route.reload();
    });
  };
});
