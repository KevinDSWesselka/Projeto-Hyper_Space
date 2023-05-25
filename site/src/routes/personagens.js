var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/pegar_personagens", function (req, res) {
    personagemController.pegarPersonagens(req, res)
})


module.exports = router;