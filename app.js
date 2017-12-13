var myApp = angular.module('myApp',[
'ngRoute',
'rw.moneymask',
'ui.bootstrap',
'ui.bootstrap.datetimepicker']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/clientes#/', {
			templateUrl:'../views/templates/clientes/listarClientes.html',
			controller:'cliController'
		})
		.when('/ordemServico#', {
			templateUrl:'../views/templates/ordemServico/listarOrdemServico.html',
			controller:'ordemServicoController'
		})
		.when('/listarCliente', {
      templateUrl:'../views/templates/clientes/listarClientes.html',
			controller:'cliController'
		})
		.when('/cadastrarCliente', {
			templateUrl:'../views/templates/clientes/adicionarCliente.html',
			controller:'cliController'
		})
		.when('/:id/editarCliente', {
			templateUrl:'../views/templates/clientes/editarCliente.html',
			controller:'cliController'
		})
		.when('/:id/visualizarCliente', {
			templateUrl:'../views/templates/clientes/visualizarCliente.html',
			controller:'cliController'
		})
		.when('/ordemServico/', {
			templateUrl:'../views/templates/ordemServico/listarOrdemServico.html',
			controller:'ordemServicoController'
		})
		.when('/listarOrdemServico', {
			templateUrl:'../views/templates/ordemServico/listarOrdemServico.html',
			controller:'ordemServicoController'
		})
		.when('/emitirOrdemServico', {
			templateUrl:'../views/templates/ordemServico/emitirOrdemServico.html',
			controller:'ordemServicoController'
		})
		.when('/:id/visualizarOrdemServico', {
			templateUrl:'../views/templates/ordemServico/visualizarOrdemServico.html',
			controller:'ordemServicoController'
		})
    .when('/:id/editarOrdemServico', {
			templateUrl:'../views/templates/ordemServico/editarOrdemServico.html',
			controller:'ordemServicoController'
		});
});

myApp.controller('DateTimePicker', ['$scope', function($scope) {

    var that = this;
    console.log($scope);
    // date picker
    this.calenDataEntrega = {
        date: new Date('2015-03-01T00:00:00Z'),
        datepickerOptions: {
            showWeeks: false,
            startingDay: 1,
            dateDisabled: function(data) {
                return (data.mode === 'day' && (new Date().toDateString() == data.date.toDateString()));
            }
        }
    };

    this.calenDataRetirada = {
        date: new Date('2015-03-01T00:00:00Z'),
        datepickerOptions: {
            showWeeks: false,
            startingDay: 1,
            dateDisabled: function(data) {
                return (data.mode === 'day' && (new Date().toDateString() == data.date.toDateString()));
            }
        }
    };

    this.openCalendar = function(e, picker) {
        console.log('Abriu', picker);
        that[picker].open = true;
    };

}]);
