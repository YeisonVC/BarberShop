const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitasServiciosSchema = new Schema ({
    citaId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "citas",
    },

    servicioId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "servicios",
    },
    
});

module.exports = mongoose.model("citasServicios", CitasServiciosSchema);