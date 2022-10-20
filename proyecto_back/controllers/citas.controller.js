const Cita = require("../models/citas.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let cita = new Cita ({
        fecha: req.body.fecha,
        hora: req.body.hora,
        usuarioId: req.body.usuarioId,
    })

    cita.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar la cita"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La cita se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){// encontrar todos los empleados de la base de datos
    Cita.find( function(err, citas) {
        res.json(citas)
    })
}

exports.findOne = function(req, res){// encontrar un empleado dependiendo de su id
    Cita.findOne({_id: req.params.id}, function(err, cita) {
        res.json(cita)
    })
}