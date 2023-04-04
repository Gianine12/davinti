const express = require('express');

const ContatoController = require('./controller/ContatoController');

const route = express.Router();

route.post('/contato/criar', ContatoController.create);
route.get('/contato', ContatoController.busca_contato_especifico);
route.put('/contato/:id', ContatoController.atualizar_contato);
route.delete('/contato/:id', ContatoController.deletar_contato);

module.exports = route;
