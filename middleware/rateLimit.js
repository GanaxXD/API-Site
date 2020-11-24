const rateLimit = requeire('express-rate-limit');
const {requests } = require('@config/index');
const slowDown = require('express-slow-down');


const slower = slowDown({
    windowMs: requests.slowDown.window,
    delayAfter: requests.slowDown.delayAfter,
    delayMs: requests.slowDown.delayMs,
});

const limiter = rateLimit({
    windowMs: requests.rateLimit.window,
    max: requests.rateLimit.max,
});

module.exports = [
    limiter,
    slower,
];