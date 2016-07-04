/**
 * Module dependencies.
 */

var express = require('express');
var cluster = require('cluster');
var app = express();

require('./mvc').boot(app);

app.listen(3000);
console.log('Express app started on port 3000');
