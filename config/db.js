
/* Autor: Cortez Ramirez Jose Kevyn
    Fecha: Noviembre 2020*/
const mongoose = require("mongoose");

// Copia la URL del sitio de mongo DB
const MONGOURI = "mongodb+srv://user1:user1@cluster0.gmrmh.mongodb.net/todos?retryWrites=true&w=majority";

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la BD !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 
module.exports= InitiateMongoServer;
