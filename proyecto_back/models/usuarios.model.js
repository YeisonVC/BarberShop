const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema ({
    nombre:{type: String, required: true, max: 60},
    apellido:{type: String, required: true, max: 40},
    telefono:{type: String, required: true, max: 15},
    mail:{type: String, required: true, max: 70},
    admin:{type: Boolean, required: true, max: 40},
    confirmado:{type: Boolean, required: true, max: 40},
});

module.exports = mongoose.model("usuarios", UsuariosSchema);