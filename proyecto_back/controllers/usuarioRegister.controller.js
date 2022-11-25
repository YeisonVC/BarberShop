const Empleado = require("../models/usuarios.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let empleado = new Empleado ({
        usuario: req.body.usuario,
        telefono: req.body.telefono,
        mail: req.body.mail,
        pass: req.body.pass
    })

    empleado.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar el usuario uwu"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){// encontrar todos los empleados de la base de datos
    Empleado.find( function(err, empleados) {
        res.json(empleados)
    })
}

exports.findOne = function(req, res){// encontrar un empleado dependiendo de su id
    Empleado.findOne({_id: req.params.id}, function(err, empleado) {
        res.json(empleado)
    })
}