const Servicio = require("../models/servicios.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let servicio = new Servicio ({
        nombre: req.body.nombre,
        precio: req.body.precio
    })

    servicio.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar el servicio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){// encontrar todos los empleados de la base de datos
    Servicio.find( function(err, servicios) {
        res.json(servicios)
    })
}

exports.findOne = function(req, res){// encontrar un empleado dependiendo de su id
    Servicio.findOne({_id: req.params.id}, function(err, servicio) {
        res.json(servicio)
    })
}