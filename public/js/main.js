angular.module('contatooh',['ngRoute', 'ngResource'])
	.config(function($routeProvider, $httpProvider) {

		$httpProvider.interceptors.push('meuInterceptor');

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

		$routeProvider.when('/auth', {
			templateUrl: 'partials/auth.html'
		});

		$routeProvider.otherwise({redirectTo: '/contatos'});

	});
