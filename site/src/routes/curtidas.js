var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.get("/get-curtida/:idPersonagem", function (req, res) {
    curtidaController.getCurtida(req, res)
})

router.put("/get-curtida/:idUsuario/:idPersonagem", function (req, res) {
    curtidaController.likeOrDeslike(req, res)
})

router.post("/post-curtida", function (req, res) {
    curtidaController.postCurtida(req, res)
})

module.exports = router;