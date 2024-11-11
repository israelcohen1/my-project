"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
mongoose_1["default"].connect('mongodb+srv://israelcohen:spgqY3.RhWny7XF@cluster0.8dupj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
var userSchema = new mongoose_1["default"].Schema({
    name: String,
    phone: Number,
    password: String
});
var User = mongoose_1["default"].model('User', userSchema);
