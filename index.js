var express = require('express');
var bodyParser = require('body-parser');
var mainRouter = require('./mainRoutes.js');
var todoRouter = require('./todoRoute.js');
var app = express();

app.use('/cdn', express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', mainRouter);
app.use('/todo', todoRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port: " + process.env.PORT);
