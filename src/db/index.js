const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');

const models = [User]

const conexao = new Sequelize(dbConfig);

models.forEach(model => model.init(conexao));
models.forEach(model => model.associate && model.associate(conexao.models));