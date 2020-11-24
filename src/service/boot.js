//Adicionando a rota do app.js usando o module-Alias
const app = require('@app');

const config = require('@config');

//O erro vem do banco de dados, no caso o mongoose
module.exports = (err) => {
    console.clear();
    if(err){
        console.log('Erro ao conectar ao banco de dados. O seguinte erro está impedindo a sua conexão: ');
        console.log(err);
    }

    app.listen(config.app.port, (err)=> {
        if(err){
            return console.log('erro');
        }
        console.log(`iniciou em http://localhost:${config.app.port}`);
    });
};

