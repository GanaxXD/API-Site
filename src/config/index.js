module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },

    db:{
        //connectionString: process.env.MONGO_DB, 
    },
    request:{
        rateLimit: {
            window: 15 * 60 * 1000, //em milissegundos, isso dá 15 minutos
            max: 150, //máximo de 150 requisições no período indicado acima
        },
        slowDown:{
            window: 15 * 60 * 1000,
            delayAfter: 100,
            delayMs: 100,
        },
    },
};