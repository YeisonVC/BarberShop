const express = require("express")
const router = express.Router()
const serviciosController = require("../controllers/servicios.controller")

router.post("/", serviciosController.create)
router.get("/", serviciosController.find)
router.get("/:id", serviciosController.findOne)
module.exports = router