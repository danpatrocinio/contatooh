angular.module('contatooh').controller('ContatosCtrl',
	function($scope, Contato) {

		$scope.mensagem = {texto: ''};

		$scope.contatos = [];

		$scope.filtro = '';

		function buscaContatos() {
			Contato.query(
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
			if (confirm('Tem certeza que quer remover este contato?')) {
				Contato.delete(
					{id: contato._id}, 
					buscaContatos, 
					function(erro) {
						console.log(erro);
						$scope.mensagem = {texto : 'Não foi possível remover o contato.'};
					}
				);
			};
		};

		$scope.init = function() {
			buscaContatos();
		};

		$scope.init();
	});