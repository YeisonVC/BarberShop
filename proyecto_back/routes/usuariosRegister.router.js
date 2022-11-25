const express = require("express")
const router = express.Router()
const usuariosRegisterController = require("../controllers/usuarioRegister.controller")

router.post("/crear-cuenta", usuariosRegisterController.create)// CREATE
router.get("/crear-cuenta", usuariosRegisterController.find)// SELECT

module.exports = router