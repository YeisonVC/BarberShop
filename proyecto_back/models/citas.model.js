const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitasSchema = new Schema ({
    fecha:{type: String, required: true, max: 60},
    hora:{type: String, required: true, max: 60},
    usuarioId:
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: "usuarios",
        }

});

module.exports = mongoose.model("citas", CitasSchema);