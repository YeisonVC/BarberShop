const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

//npm install jsonwebtoken
exports.login = function(req, res, next){
    
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({ usuario: req.body.usuario, pass: hashedpass}, function(err, usuario){
        let response = {
            token: null 
        }

        if(usuario !== null){
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "__recret__",
            { expiresIn: '1h'})//Expire el token/sesión después de 1h)
        }
        res.json(response);
    })
}