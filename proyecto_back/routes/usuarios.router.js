const express = require("express")
const router = express.Router()
const usuariosController = require("../controllers/usuarios.controller")

router.post("/", usuariosController.create)
router.get("/", usuariosController.find)
router.get("/:id", usuariosController.findOne)
module.exports = router