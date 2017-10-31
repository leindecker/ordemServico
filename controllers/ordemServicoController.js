myApp.controller('ordemServicoController', function($scope,$route,$routeParams,$http){
  $scope.getOrdemServico = function(){
    $http.get('/api/ordem').then(function(response){
      $scope.ordens = response.data;
    });
  };
  $scope.gerarOrdemServico = function(){
    $http.post('/api/ordem/', $scope.ordemServico).then(function(response){
      window.location.href = '/ordemServico';
    });
  };
  $scope.visualizarOrdemServico = function(){
    var id = $routeParams.id;
    $http.get('/api/ordem/'+ id).then(function(response){
      $scope.ordemServico = response.data;
    });
  };
});
