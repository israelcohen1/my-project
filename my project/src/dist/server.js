"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/', function (req, res) {
    res.send('Welcome to the homepage');
});
app.post('/api/users', function (req, res) {
    console.log('req.body');
    console.log(req.body);
    res.status(201).json({ message: 'user saved' });
});
app.listen(port, function () {
    console.log("server listening on port " + port);
});
