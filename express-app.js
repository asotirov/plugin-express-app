'use strict';
var express = require('express');
module.exports = function (options, imports, register) {
    var app = express();
    app.set('trust proxy', options.isProduction);
    register(null, {
        expressApp: app
    });
};