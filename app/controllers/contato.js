var _contatos = [
				{_id: 1, nome: 'Contato Exemplo 1',
				email: 'cont1@empresa.com.br'},
				{_id: 2, nome: 'Contato Exemplo 2',
				email: 'cont2@empresa.com.br'},
				{_id: 3, nome: 'Contato Exemplo 3',
				email: 'cont3@empresa.com.br'}
			   ];

function adiciona(contatoNovo) {
	contatoNovo._id = _contatos.length + 1;
	_contatos.push(contatoNovo);
	return contatoNovo;
}

function atualiza(contatoAlterar) {
	_contatos = _contatos.map(function(contato) {
		if(contato._id == contatoAlterar._id) {
			contato = contatoAlterar;
		}
		return contato;
	});
	
	return contatoAlterar;
}

module.exports = function() {
	
	var controller = {};
	
	controller.salvaContato = function(req, res) {

		var contato = req.body;
		contato = contato._id ? 	atualiza(contato) :		adiciona(contato);

		res.json(contato);
	};
	
	controller.listaTodos = function(req, res) {
		res.json(_contatos);
	};

	controller.obtemContato = function(req, res) {
		var idContato = req.params.id;
		var contato = _contatos.filter(function(contato) {
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};

	controller.removeContato = function(req, res) {
		var idContato = req.params.id;

		_contatos = _contatos.filter(function(contato) {
			return contato._id != idContato;
		});

		res.sendStatus(204).end();
	};

	return controller;
};