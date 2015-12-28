angular.module('contatooh').controller('ContatosCtrl',
	function($scope, $resource, $routeParams) {

		$scope.mensagem = {texto: ''};

		$scope.contatos = [];

		$scope.filtro = '';
		
		var Contatos = $resource('/contatos/:id');

		function buscaContatos() {
			Contatos.query(
					function(data) {
						$scope.contatos = data;
						$scope.mensagem = {};
					},
					function(erro) {
						console.log(erro);
						$scope.mensagem = {texto : 'Não foi possível obter a lista de contatos.'};
					}
			);
		};

		$scope.remove = function(contato) {
			Contatos.delete(
				{id: contato._id}, 
				buscaContatos, 
				function(erro) {
					console.log(erro);
					$scope.mensagem = {texto : 'Não foi possível remover o contato.'};
				}
			);
		};

		$scope.init = function() {
			buscaContatos();
		};

		$scope.init();
	});