const router = require('express').Router();
const TestController = require('@controller/controller');

router
    .get('/', TestController.helloWorld)
    .post('/', TestController.createSomeone);

module.exports = router;