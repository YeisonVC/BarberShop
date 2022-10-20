const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitasSchema = new Schema ({
    fecha:{type: String, required: true, max: 60},
    hora:{type: String, required: true, max: 60},
    usuarioId:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "servicios",
        }

});

module.exports = mongoose.model("citas", CitasSchema);