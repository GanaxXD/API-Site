const logger = require('@service/logger');


module.exports = (req, res, next) => {

    logger.error(
        message,
        status,
    );

    res.sendError = function (message, status = 500){
        return this
            .status(status)
            .send({message});
    };
    next();
};