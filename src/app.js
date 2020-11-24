const express = require('express');
const sendError = require('./helper/sendError');
const app = express();
const routes = require('./routes');
const rateLimit = require('@middleware/rateLimit');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(...rateLimit); //inserindo o array do middleware com todos os indices do vetor module.exports

//sempre antes das rotas a linha abaixo:
app.use(sendError);
app.use('/', routes);

const sendErro = require('/@helper/sendError');


module.exports = app;