const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');
const Contato = require('./model/Contato');
const Telefone = require('./model/Telefone');

const connection = new Sequelize(dbConfig);

Contato.init(connection);
Telefone.init(connection);

Telefone.associate(connection.models);

module.exports = connection;
