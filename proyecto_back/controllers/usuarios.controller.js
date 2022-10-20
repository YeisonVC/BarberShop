const Usuario = require("../models/usuarios.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let usuario = new Usuario ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        mail: req.body.mail,
        admin: req.body.admin,
        confirmado: req.body.confirmado,
        
    })

    usuario.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){// encontrar todos los empleados de la base de datos
    Usuario.find( function(err, usuarios) {
        res.json(usuarios)
    })
}

exports.findOne = function(req, res){// encontrar un empleado dependiendo de su id
    Usuario.findOne({_id: req.params.id}, function(err, usuario) {
        res.json(usuario)
    })
}