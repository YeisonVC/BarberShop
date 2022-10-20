const CitaServicios = require("../models/citasServicios.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let citaServicios = new CitaServicios ({
        citaId: req.body.citaId,
        servicioId: req.body.servicioId,
    })

    citaServicios.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar el servicio en la cita"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio en la cita se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){// encontrar todos los empleados de la base de datos
    CitaServicios.find( function(err, citasServicios) {
        res.json(citasServicios)
    })
}

exports.findOne = function(req, res){// encontrar un empleado dependiendo de su id
    CitaServicios.findOne({_id: req.params.id}, function(err, citaServicios) {
        res.json(citaServicios)
    })
}