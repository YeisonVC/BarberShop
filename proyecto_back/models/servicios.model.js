const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiciosSchema = new Schema ({
    nombre:{type: String, required: true, max: 60},
    precio:{type: Number, required: true}
});

module.exports = mongoose.model("servicios", ServiciosSchema);