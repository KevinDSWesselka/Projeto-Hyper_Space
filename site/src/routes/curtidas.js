var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.get("/get-curtida", function (req, res) {
    curtidaController.getCurtida(req, res)
})

module.exports = router;