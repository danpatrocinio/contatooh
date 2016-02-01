angular.module('contatooh', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {

		$routeProvider.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosCtrl'
		});

		$routeProvider.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoCtrl'
		});

		$routeProvider.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoCtrl'
		});

		$routeProvider.otherwise({redirectTo: '/contatos'});

	});