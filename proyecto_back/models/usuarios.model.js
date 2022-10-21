const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema ({
    usuario:{type: String, required: true, max: 60},
    pass:{type: String, required: true, max: 128},
});

module.exports = mongoose.model("usuarios", UsuariosSchema);