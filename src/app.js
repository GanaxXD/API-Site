const express = require('express');
const sendError = require('./helper/sendError');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//sempre antes das rotas a linha abaixo:
app.use(sendError);
app.use('/', routes);

const sendErro = require('/@helper/sendError')

module.exports = app;