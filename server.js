require('dotenv').config();
//Quando usamos o dotenv, ele precisa estar requisitado na primeira linha


//Adicionando a biblioteca Module-Alias
require('module-alias/register');
const boot = require('@service/boot');
const config = require('@config');
//const mongoose = require('mongoose');

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useCreateIndex', true);

/* if(config.db.connectionString){
    mongoose.connect(config.db.connectionString, boot);
} else {
    console.log('Sem ceção de uma string de conexão!');
} */

boot();