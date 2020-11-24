/* Autor: Cortez Ramirez Jose Kevyn
    Fecha: Noviembre 2020*/
var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }

});
/*userSchema.methods.encryptPassword = async function (password) {
    const salt =await bcrypt.gensalt(10);
    const hash =bcrypt.hash (password,salt);
    return hash;
};
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
   };*/
module.exports = mongoose.model('user', userSchema);