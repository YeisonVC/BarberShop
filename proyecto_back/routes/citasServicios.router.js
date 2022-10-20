const express = require("express")
const router = express.Router()
const citasServiciosController = require("../controllers/citasServicios.controller")

router.post("/", citasServiciosController.create)
router.get("/", citasServiciosController.find)
router.get("/:id", citasServiciosController.findOne)
module.exports = router